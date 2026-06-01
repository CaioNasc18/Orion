const User = require("../models/User");
 
// CRIAR CONTA
exports.createUser = async (req, res) => {
    try {
        const { name, email, password, telephone, id_tipo, id_empresa } = req.body;
 
        // Validação básica
        if (!name || !email || !password || !telephone) {
            return res.status(400).json({
                success: false,
                message: "Os campos nome, email, palavra-passe e telefone são obrigatórios.",
            });
        }
 
        // Verificar se o email já existe
        const existing = await User.findOne({ where: { email } });
        if (existing) {
            return res.status(409).json({
                success: false,
                message: "Já existe uma conta com este email.",
            });
        }
 
        const newUser = await User.create({
            name,
            email,
            password,   // ⚠️ Em produção: usar bcrypt para hash da password
            telephone,
            id_tipo: id_tipo || null,
            id_empresa: id_empresa || null,
            active: false,
        });
 
        return res.status(201).json({
            success: true,
            message: "Conta criada com sucesso.",
            user: {
                id: newUser.id_Utilizador,
                name: newUser.name,
                email: newUser.email,
            },
        });
 
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};
 
// ATUALIZAR UTILIZADOR
exports.updateUser = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, email, password, role } = req.body;
 
        const [affectedRows] = await User.update(
            { name, email, password, role },
            { where: { id } }
        );
 
        if (affectedRows === 0) {
            return res.status(404).json({
                success: false,
                message: "Utilizador não encontrado ou sem alterações.",
            });
        }
 
        return res.json({
            success: true,
            message: "Utilizador atualizado com sucesso.",
        });
 
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};
 