export interface ITodo {
    text: string;
    completed: boolean;
}

export type IToggleCompleted = (selectedTodo: ITodo) => void;

export type IRemoveTask = (index: number) => void;

export type IAddTask = (text: string) => void;