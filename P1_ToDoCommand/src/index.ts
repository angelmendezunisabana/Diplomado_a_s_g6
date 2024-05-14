import { Task } from './receiver/Task';
import { CreateTaskCommand } from './commands/CreateTaskCommand';
import { EditTaskCommand } from './commands/EditTaskCommand';
import { DeleteTaskCommand } from './commands/DeleteTaskCommand';
import { CompleteTaskCommand } from './commands/CompleteTaskCommand';
import { CommandHistory } from './history/CommandHistory';
import { TaskManager } from './invoker/TaskManager';

const task = new Task('Go to class');
const createTaskCommand = new CreateTaskCommand(task);
const editTaskCommand = new EditTaskCommand(task, 'Connect to the class');
const deleteTaskCommand = new DeleteTaskCommand(task);
const completeTaskCommand = new CompleteTaskCommand(task);

const commandHistory = new CommandHistory();
const taskManager = new TaskManager(commandHistory);

taskManager.executeCommand(createTaskCommand);
taskManager.executeCommand(editTaskCommand);
taskManager.undoCommand();
taskManager.executeCommand(completeTaskCommand);
taskManager.executeCommand(deleteTaskCommand);
taskManager.undoCommand();
taskManager.undoCommand();
