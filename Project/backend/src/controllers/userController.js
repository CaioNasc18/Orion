const User = require("../models/User");

exports.updateUser = async (req, res) => {
    const { id } = req.params;

    const { name, email, password, role } = req.body;

    const data = await User.update(
        {
            name: name,
            email: email,
            password: password,
            role: role,
        },
        {
            where: { id: id },
        }
    )
        .then((result) => {
            return result;
        })
        .catch((error) => {
            return error;
        });

    res.json({
        success: true,
        data: data,
        message: "User updated successfully",
    });
};