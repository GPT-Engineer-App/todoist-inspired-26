import TaskList from "@/components/TaskList";
import AddTask from "@/components/AddTask";

const InboxPage = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Inbox</h1>
      <AddTask />
      <TaskList />
    </div>
  );
};

export default InboxPage;