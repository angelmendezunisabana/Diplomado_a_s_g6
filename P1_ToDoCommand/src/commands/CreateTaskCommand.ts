import { Command } from './Command';
import { Task } from '../receiver/Task';

export class CreateTaskCommand implements Command {
  constructor(private task: Task) {}

  execute() {
    this.task.create();
  }

  undo() {
    this.task.delete();
  }
}
