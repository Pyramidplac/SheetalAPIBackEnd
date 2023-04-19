//data base ma je key ni jrur hoy a key lakhvani and table nu name j bnavvu hoy a lakhvanu
module.exports = mongoose => {
    const Question = mongoose.model(
        "Question",
        mongoose.Schema(
            {
                qtype: String,
                question: String,
                answer: String,
            }
        )
    );

    return Question;
};