import { Command } from '../commands/Command';
import { CommandHistory } from '../history/CommandHistory';

export class TaskManager {
  constructor(private commandHistory: CommandHistory) {}

  executeCommand(command: Command) {
    command.execute();
    this.commandHistory.push(command);
  }

  undoCommand() {
    const command = this.commandHistory.pop();
    if (command) {
      command.undo();
    } else {
      console.log('No commands to undo');
    }
  }
}
