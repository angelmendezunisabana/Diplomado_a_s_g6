import { Command } from './Command';
import { Task } from '../receiver/Task';

export class CompleteTaskCommand implements Command {
  constructor(private task: Task) {}

  execute() {
    this.task.complete();
  }

  undo() {
    this.task.uncomplete();
  }
}
