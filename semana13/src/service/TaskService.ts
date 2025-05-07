import { Task } from "../entity/Task";
import { TaskRepository } from "../repository/TaskRepository";

class TaskService {
    //fAKE BANCO DE DADOS
    private taskList: Task[] = []
    private taskRepository = new TaskRepository();

    public create(text: string): void {
        //VERIFICAR SE JA TEM TAREFA COM ESSE TEXT
       
        // const textAlreadyExist = this.taskList.find(task => task.getText() == text)
        // if (textAlreadyExist) {
        //     throw new Error("Já existe uma tarefa com esse texto.")
        // }

   
        const newTask = new Task(text);
        // this.taskRepository.save(newTask)
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

    public delete(id:string){
        const task = this.getById(id)
        if(task === null){
            throw new Error("TAREFA NÃO FOI ENCONTRADA !!")
        }

        this.taskList = this.taskList.filter(task => task.getId() !== id) 
        //filter cria outro vetor e compara ate o valor do "id" for igual ao numero da contante "task"
    }
}

export const taskService = new TaskService();