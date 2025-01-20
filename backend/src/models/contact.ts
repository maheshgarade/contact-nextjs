import mongoose, { Schema, Document } from "mongoose";

export interface Contact extends Document {
  name: string;
  phone: string;
  email: string;
  access: string;
}

const ContactSchema: Schema = new Schema({
  name: { type: String, required: true },
  phone: { type: String, required: true },
  email: { type: String, required: true },
  access: { type: String, required: true },
});

export default mongoose.model<Contact>("Contact", ContactSchema);
