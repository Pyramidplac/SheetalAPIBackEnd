//data base ma je key ni jrur hoy a key lakhvani and table nu name j bnavvu hoy a lakhvanu
module.exports = mongoose => {
    const takenBy = mongoose.model(
        "takenBy",
        mongoose.Schema(
            {
                takenby: String
            }
        )
    );

    return takenBy;
};