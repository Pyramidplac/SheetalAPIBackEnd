//data base ma je key ni jrur hoy a key lakhvani and table nu name j bnavvu hoy a lakhvanu
module.exports = mongoose => {
    const Course = mongoose.model(
        "Course",
        mongoose.Schema(
            {
                course: String,
                coursefees: Number,
                year: String,
                type: String,
            }
        )
    );

    return Course;
};