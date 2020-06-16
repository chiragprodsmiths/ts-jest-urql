export type TodoEntity = {
  id: number;
  text: string;
  complete: boolean;
};

export type TodosQueryResult = {
  todos: TodoEntity[];
};
