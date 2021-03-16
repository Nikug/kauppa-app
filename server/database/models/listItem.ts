import { listItemSchema } from "../schemas/listItem";
import mongoose from "mongoose";

export const ListItem = mongoose.model("ListItem", listItemSchema);
