export class Task {
  constructor(public name: string, public completed: boolean = false) {}

  create() {
    console.log(`Task "${this.name}" created.`);
  }

  edit(newName: string) {
    console.log(`Task "${this.name}" renamed to "${newName}".`);
    this.name = newName;
  }

  delete() {
    console.log(`Task "${this.name}" deleted.`);
  }

  complete() {
    this.completed = true;
    console.log(`Task "${this.name}" completed.`);
  }

  uncomplete() {
    this.completed = false;
    console.log(`Task "${this.name}" uncompleted.`);
  }
}
