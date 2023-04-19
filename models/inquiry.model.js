//data base ma je key ni jrur hoy a key lakhvani and table nu name j bnavvu hoy a lakhvanu
module.exports = mongoose => {
    const Inquiry = mongoose.model(
        "Inquiry",
        mongoose.Schema(
            {
                name: String,
                parentsname: String,
                studentmobile: Number,
                parentmobile: Number,
                email: String,
                birthdate: Date,
                gender: String,
                whatsapp: Number,
                education: String,
                address: String,
                city: String,
                inquirydate: Date,
                takenby: String,
                course: Array,
                leadsource: String
            }
        )
    );

    return Inquiry;
};