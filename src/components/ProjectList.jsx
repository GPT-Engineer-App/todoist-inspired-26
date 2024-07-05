import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

const ProjectList = () => {
  const [projects, setProjects] = useState([
    { id: 1, name: "Project 1" },
    { id: 2, name: "Project 2" },
  ]);

  const addProject = (projectName) => {
    setProjects([...projects, { id: projects.length + 1, name: projectName }]);
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-2">Projects</h2>
      <ul>
        {projects.map(project => (
          <li key={project.id} className="mb-1">{project.name}</li>
        ))}
      </ul>
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline" className="mt-2">Add Project</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Add Project</DialogTitle>
          </DialogHeader>
          <AddProjectForm onAddProject={addProject} />
        </DialogContent>
      </Dialog>
    </div>
  );
};

const AddProjectForm = ({ onAddProject }) => {
  const [projectName, setProjectName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddProject(projectName);
    setProjectName("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input
        placeholder="Project name"
        value={projectName}
        onChange={(e) => setProjectName(e.target.value)}
        className="mb-2"
      />
      <Button type="submit">Add</Button>
    </form>
  );
};

export default ProjectList;