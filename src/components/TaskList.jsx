import { useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

const TaskList = () => {
  const [tasks, setTasks] = useState([
    { id: 1, name: "Sample Task 1", dueDate: "2023-10-01", completed: false },
    { id: 2, name: "Sample Task 2", dueDate: "2023-10-02", completed: false },
  ]);

  const toggleComplete = (taskId) => {
    setTasks(tasks.map(task => task.id === taskId ? { ...task, completed: !task.completed } : task));
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  return (
    <div>
      {tasks.map(task => (
        <div key={task.id} className="flex items-center justify-between mb-2">
          <div className="flex items-center">
            <Checkbox checked={task.completed} onCheckedChange={() => toggleComplete(task.id)} />
            <span className={`ml-2 ${task.completed ? "line-through" : ""}`}>{task.name}</span>
          </div>
          <div className="flex items-center space-x-2">
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline" size="sm">Edit</Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Edit Task</DialogTitle>
                </DialogHeader>
                {/* Add form to edit task details */}
              </DialogContent>
            </Dialog>
            <Button variant="destructive" size="sm" onClick={() => deleteTask(task.id)}>Delete</Button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TaskList;