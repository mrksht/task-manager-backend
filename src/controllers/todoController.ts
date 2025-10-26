import { Request, Response } from "express";
import Todo, { ITodo } from "../models/todo";

export const getTodos = async (req: Request, res: Response): Promise<void> => {
  const todos = await Todo.find();
  res.json(todos);
};

export const createTodo = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { id, text, completed, createdAt, tags, dueDate, reminder } = req.body as ITodo;
    const todo = new Todo({ id, text, completed, createdAt, tags, dueDate, reminder });
    await todo.save();
    res.status(201).json(todo);
  } catch (err: any) {
    res.status(400).json({ error: err.message });
  }
};

export const updateTodo = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { text, completed, tags } = req.body as Partial<ITodo>;
    const todo = await Todo.findOneAndUpdate(
      { id: req.params.id },
      { text, completed, tags },
      { new: true }
    );
    res.json(todo);
  } catch (err: any) {
    res.status(400).json({ error: err.message });
  }
};

export const deleteTodo = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    await Todo.findOneAndDelete({ id: req.params.id });
    res.json({ message: "Todo deleted" });
  } catch (err: any) {
    res.status(400).json({ error: err.message });
  }
};

export const summariseWithTags = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { id, text, completed, createdAt } = req.body;
    const todo = new Todo({ id, text, completed, createdAt, tags: [] });
    await todo.save();
    res.status(201).json(todo);
  } catch (err: any) {
    res.status(400).json({ error: err.message });
  }
};
