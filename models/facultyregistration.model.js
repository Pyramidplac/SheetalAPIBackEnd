//data base ma je key ni jrur hoy a key lakhvani and table nu name j bnavvu hoy a lakhvanu
module.exports = mongoose => {
    const FacultyRegistration = mongoose.model(
        "FacultyRegistration",
        mongoose.Schema(
            {
                name: String,
                course: Array,
                email: String,
                password: String,
                role: String,
                roles: [
                    {
                        type: mongoose.Schema.Types.ObjectId,
                        ref: "Role"
                    }
                ]
            }
        )
    );

    return FacultyRegistration;
};