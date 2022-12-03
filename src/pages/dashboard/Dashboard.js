import "./Dashboard.css";
import { useCollection } from "../../hooks/useCollection";
import ProjectsList from "../../components/ProjectsList";
import ProjectFilters from "./ProjectFilters";
import { useState } from "react";

export default function Dashboard() {
  const { documents, error } = useCollection("projects");
  const [currentFilter, setCurrentFitler] = useState("all");

  const changeFilter = (newFilter) => {
    setCurrentFitler(newFilter);
  };

  return (
    <div>
      <h2 className="page-title">Dashboard</h2>
      {error && <p className="error">{error}</p>}
      {documents && (
        <ProjectFilters
          currentFilter={currentFilter}
          changeFilter={changeFilter}
        />
      )}
      {documents && <ProjectsList projects={documents} />}
    </div>
  );
}
