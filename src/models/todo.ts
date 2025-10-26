import mongoose, { Document, Schema } from "mongoose";

export interface ITodo extends Document {
  id: string;
  text: string;
  completed: boolean;
  createdAt: Date;
  dueDate?: Date;
  tags: string[];
  reminder?: Date
}

const todoSchema: Schema = new Schema<ITodo>({
  id: { type: String, required: true, unique: true },
  text: { type: String, required: true },
  completed: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now },
  dueDate: { type: Date, required: false },
  reminder: { type: Date, required: false },
  tags: { type: [String], default: [] },
});

const Todo = mongoose.model<ITodo>("Todo", todoSchema);
export default Todo;
