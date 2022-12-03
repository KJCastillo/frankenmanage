import "./Dashboard.css";
import { useCollection } from "../../hooks/useCollection";
import ProjectsList from "../../components/ProjectsList";
import ProjectFitlers from "./ProjectFitlers";

export default function Dashboard() {
  const { documents, error } = useCollection("projects");

  return (
    <div>
      <h2 className="page-title">Dashboard</h2>
      {error && <p className="error">{error}</p>}
      {documents && <ProjectFitlers />}
      {documents && <ProjectsList projects={documents}/>}
    </div>
  );
}
