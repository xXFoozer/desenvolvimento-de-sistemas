import { Task } from "../entity/Task";

class TaskService {
    //fAKE BANCO DE DADOS
    private taskList: Task[] = []
    
    public create(text: string): void {
        //VERIFICAR SE JA TEM TAREFA COM ESSE TEXT
        const textAlreadyExist = this.taskList.find(task => task.getText() == text)
        if (textAlreadyExist) {
            throw new Error("Já existe uma tarefa com esse texto.")
        }

        //CRIAR O OBJETO DO TIPO TASK
        const newTask = new Task(text);

        //ADICIONAR NA LISTA/BANCO DE DADOS
        this.taskList.push(newTask)
    }

    public getAll(): Task[] {
        return this.taskList;
    }
}

export const taskService = new TaskService();