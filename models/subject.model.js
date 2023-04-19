//data base ma je key ni jrur hoy a key lakhvani and table nu name j bnavvu hoy a lakhvanu
module.exports = mongoose => {
    const Subject = mongoose.model(
        "Subject",
        mongoose.Schema(
            {
                subject: String,
                timeline: String,
                category: String
            }
        )
    );

    return Subject;
};