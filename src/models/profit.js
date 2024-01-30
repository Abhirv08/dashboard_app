import mongoose from "mongoose";
import { Schema } from "mongoose";


const ProfitSchema = new Schema({
    Timestamp: {
        type: String,
        required: true
    },
    Profit_percentage: {
        type: Number,
        required: true
    }
})


const Profit = mongoose.models.Profit || mongoose.model('Profit', ProfitSchema);

export default Profit