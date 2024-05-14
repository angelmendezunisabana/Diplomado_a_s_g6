import { Command } from '../commands/Command';

export class CommandHistory {
  private history: Command[] = [];

  push(command: Command) {
    this.history.push(command);
  }

  pop(): Command | undefined {
    return this.history.pop();
  }
}
