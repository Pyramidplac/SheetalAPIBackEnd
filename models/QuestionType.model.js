//data base ma je key ni jrur hoy a key lakhvani and table nu name j bnavvu hoy a lakhvanu
module.exports = mongoose => {
    const QuestionType = mongoose.model(
        "QuestionType",
        mongoose.Schema(
            {
                questiontype: String
            }
        )
    );

    return QuestionType;
};