const User = require("../models/User");
const bcrypt = require("bcryptjs");
 
//  LOGIN 
exports.loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
 
        if (!email || !password) {
            return res.status(400).json({
                success: false,
                message: "Email e palavra-passe são obrigatórios.",
            });
        }
 
        const user = await User.findOne({ where: { email } });
        if (!user) {
            return res.status(401).json({
                success: false,
                message: "Credenciais inválidas.",
            });
        }
 
        if (!user.active) {
            return res.status(403).json({
                success: false,
                message: "A sua conta ainda não foi ativada. Contacte o administrador.",
            });
        }
 
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({
                success: false,
                message: "Credenciais inválidas.",
            });
        }
 
        return res.json({
            success: true,
            message: "Login efetuado com sucesso.",
            user: {
                id: user.id_Utilizador,
                name: user.name,
                email: user.email,
                id_tipo: user.id_tipo,
                id_empresa: user.id_empresa,
            },
        });
 
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};
 
//  ATUALIZAR PASSWORD 
exports.updateUser = async (req, res) => {
    try {
        const { email, password, newPassword } = req.body;
 
        if (!email || !password || !newPassword) {
            return res.status(400).json({
                success: false,
                message: "Email, palavra-passe atual e nova palavra-passe são obrigatórios.",
            });
        }
 
        // Verificar se o utilizador existe
        const user = await User.findOne({ where: { email } });
        if (!user) {
            return res.status(404).json({
                success: false,
                message: "Utilizador não encontrado.",
            });
        }
 
        // Confirmar que a senha atual está correta
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({
                success: false,
                message: "A palavra-passe atual está incorreta.",
            });
        }
 
        // Guardar a nova senha com hash
        const hashedPassword = await bcrypt.hash(newPassword, 10);
 
        await User.update(
            { password: hashedPassword },
            { where: { email } }
        );
 
        return res.json({
            success: true,
            message: "Palavra-passe atualizada com sucesso.",
        });
 
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};