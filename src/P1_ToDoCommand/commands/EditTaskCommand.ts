import { Command } from './Command';
import { Task } from '../receiver/Task';

export class EditTaskCommand implements Command {
  private previousName: string;

  constructor(private task: Task, private newName: string) {
    this.previousName = task.name;
  }

  execute() {
    this.task.edit(this.newName);
  }

  undo() {
    this.task.edit(this.previousName);
  }
}
