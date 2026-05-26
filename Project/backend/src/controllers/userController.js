const User = require("../models/User");

exports.updateUser = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, email, password, role } = req.body;

        // Executa a atualização e espera pelo resultado
        const [affectedRows] = await User.update(
            {
                name: name,
                email: email,
                password: password,
                role: role,
            },
            {
                where: { id: id },
            }
        );

        // Se nenhuma linha foi afetada, significa que o utilizador não foi encontrado
        if (affectedRows === 0) {
            return res.status(404).json({
                success: false,
                message: "User not found or no changes made",
            });
        }

        return res.json({
            success: true,
            message: "User updated successfully",
        });

    } catch (error) {
        // Se der qualquer erro na base de dados, cai aqui
        return res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};