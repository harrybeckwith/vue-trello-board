import defaultBoard from "../default-board";
import { saveStatePlugin, uuid } from "../utils";

const board = JSON.parse(localStorage.getItem("board")) || defaultBoard;

const trelloBoard = {
  namespaced: true,
  plugins: [saveStatePlugin],
  state: {
    board
  },
  getters: {
    getTask(state) {
      return id => {
        for (const column of state.board.columns) {
          for (const task of column.tasks) {
            if (task.id === id) {
              return task;
            }
          }
        }
      };
    }
  },
  mutations: {
    CREATE_TASK(state, { tasks, name }) {
      tasks.push({
        name,
        id: uuid(),
        description: ""
      });
      localStorage.setItem("board", JSON.stringify(state.board));
    },
    DELETE_TASK(state, { taskIndex, columnIndex }) {
      // use found column index
      // use task index inside column
      // remove from state
      state.board.columns[columnIndex].tasks.splice(taskIndex, 1);
      localStorage.setItem("board", JSON.stringify(state.board));
    },
    CREATE_COLUMN(state, { name }) {
      state.board.columns.push({
        name,
        tasks: []
      });
      localStorage.setItem("board", JSON.stringify(state.board));
    },
    DELETE_COLUMN(state, { columnIndex }) {
      // delete whole column based on columnIndex
      state.board.columns.splice(columnIndex, 1);
      localStorage.setItem("board", JSON.stringify(state.board));
    },
    UPDATE_TASK(state, { task, key, value }) {
      task[key] = value;
      localStorage.setItem("board", JSON.stringify(state.board));
    },
    MOVE_TASK(state, { fromTasks, toTasks, fromTaskIndex, toTaskIndex }) {
      const taskToMove = fromTasks.splice(fromTaskIndex, 1)[0];
      toTasks.splice(toTaskIndex, 0, taskToMove);
      localStorage.setItem("board", JSON.stringify(state.board));
    },
    MOVE_COLUMN(state, { fromColumnIndex, toColumnIndex }) {
      const columnList = state.board.columns;

      const columnToMove = columnList.splice(fromColumnIndex, 1)[0];
      columnList.splice(toColumnIndex, 0, columnToMove);
      localStorage.setItem("board", JSON.stringify(state.board));
    }
  }
};

export default trelloBoard;