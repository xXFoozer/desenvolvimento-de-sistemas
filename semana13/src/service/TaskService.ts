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

    public getById(id: string): Task | null {
        const task = this.taskList.find(task => task.getId() === id);
        
        return !task ? null : task;
    }

    public completed(id: string, completed: boolean){
        const task = this.getById(id);
        if(task === null){
            throw new Error("TAREFA NÃO FOI ENCONTRADA !!")
        }

        task.setCompleted(completed);
        return task;
    }

    public updateText(id:string,text:string){
        const task = this.getById(id);
        if(task === null){
            throw new Error("TAREFA NÃO FOI ENCONTRADA !!")
        }

        task.setText(text);
        return task;
    }

    
}

export const taskService = new TaskService();