import mongoose from "mongoose";

const { Schema } = mongoose;

export const listItemSchema = new Schema({
    _id: Schema.Types.ObjectId,
    item: String,
    checked: Boolean,
    list: { type: Schema.Types.ObjectId, ref: "ListItem" },
});
