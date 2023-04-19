//data base ma je key ni jrur hoy a key lakhvani and table nu name j bnavvu hoy a lakhvanu
module.exports = mongoose => {
    const Fees = mongoose.model(
        "Fees",
        mongoose.Schema(
            {
                feesmaster: String,
                amountmaster: Number,
                daymaster: String,
                courseId: [
                    {
                        type: mongoose.Schema.Types.ObjectId,
                        ref: "Course"
                    }
                ]
            }
        )
    );

    return Fees;
};