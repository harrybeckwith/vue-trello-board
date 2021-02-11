import { uuid } from "./utils";

export default {
  name: "workshop",
  columns: [
    {
      name: "todo",
      tasks: [
        {
          description: "",
          name: "first task",
          id: uuid(),
          userAssigned: null
        },
      ]
    },
    {
      name: "in-progress",
      tasks: [
        {
          description: "",
          name: "first task",
          id: uuid(),
          userAssigned: null
        }
      ]
    },
    {
      name: "done",
      tasks: [
        {
          description: "",
          name: "first task",
          id: uuid(),
          userAssigned: null
        }
      ]
    }
  ]
};
