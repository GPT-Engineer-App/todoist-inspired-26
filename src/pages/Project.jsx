import { useParams } from "react-router-dom";
import TaskList from "@/components/TaskList";
import AddTask from "@/components/AddTask";

const ProjectPage = () => {
  const { projectId } = useParams();

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Project: {projectId}</h1>
      <AddTask />
      <TaskList />
    </div>
  );
};

export default ProjectPage;