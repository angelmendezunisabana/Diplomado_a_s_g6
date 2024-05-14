import { Command } from './Command';
import { Task } from '../receiver/Task';

export class DeleteTaskCommand implements Command {
  constructor(private task: Task) {}

  execute() {
    this.task.delete();
  }

  undo() {
    this.task.create();
  }
}
