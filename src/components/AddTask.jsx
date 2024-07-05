import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { format } from "date-fns";

const AddTask = () => {
  const [taskName, setTaskName] = useState("");
  const [dueDate, setDueDate] = useState(null);

  const addTask = () => {
    // Logic to add task
    console.log("Task added:", { taskName, dueDate });
    setTaskName("");
    setDueDate(null);
  };

  return (
    <div className="mb-4">
      <div className="flex items-center space-x-2">
        <Input
          placeholder="Add a new task"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
        />
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline">
              {dueDate ? format(dueDate, "PPP") : "Set Due Date"}
            </Button>
          </PopoverTrigger>
          <PopoverContent>
            <Calendar
              mode="single"
              selected={dueDate}
              onSelect={setDueDate}
              initialFocus
            />
          </PopoverContent>
        </Popover>
        <Button onClick={addTask}>Add Task</Button>
      </div>
    </div>
  );
};

export default AddTask;