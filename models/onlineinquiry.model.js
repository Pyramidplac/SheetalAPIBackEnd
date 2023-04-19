//data base ma je key ni jrur hoy a key lakhvani and table nu name j bnavvu hoy a lakhvanu
module.exports = mongoose => {
    const OnlineInquiry = mongoose.model(
        "OnlineInquiry",
        mongoose.Schema(
            {
                name: String,
                email: String,
                subject: String,
                phone: Number,
                message: String
            }
        )
    );

    return OnlineInquiry;
};