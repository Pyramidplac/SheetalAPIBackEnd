//data base ma je key ni jrur hoy a key lakhvani and table nu name j bnavvu hoy a lakhvanu
module.exports = mongoose => {
    const AcademicYear = mongoose.model(
        "AcademicYear",
        mongoose.Schema(
            {
                academicyear: String,
                academicyearfromdate: Date,
                academicyearenddate: Date
            }
        )
    );

    return AcademicYear;
};