const User = require("../models/User");
const bcrypt = require("bcryptjs");
 
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
 
        // Hash da password antes de guardar
        const hashedPassword = await bcrypt.hash(password, 10);
 
        const newUser = await User.create({
            name,
            email,
            password: hashedPassword,
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
 
// LOGIN 
exports.loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
 
        if (!email || !password) {
            return res.status(400).json({
                success: false,
                message: "Email e palavra-passe são obrigatórios.",
            });
        }
 
        // Procurar utilizador pelo email
        const user = await User.findOne({ where: { email } });
        if (!user) {
            return res.status(401).json({
                success: false,
                message: "Credenciais inválidas.",
            });
        }
 
        // Verificar se a conta está ativa
        if (!user.active) {
            return res.status(403).json({
                success: false,
                message: "A sua conta ainda não foi ativada. Contacte o administrador.",
            });
        }
 
        // Comparar a password com o hash guardado
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
 
// ATUALIZAR UTILIZADOR
exports.updateUser = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, email, password, role } = req.body;
 
        // Se vier uma nova password, fazer hash antes de guardar
        let updatedFields = { name, email, role };
        if (password) {
            updatedFields.password = await bcrypt.hash(password, 10);
        }
 
        const [affectedRows] = await User.update(updatedFields, {
            where: { id_Utilizador: id },
        });
 
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