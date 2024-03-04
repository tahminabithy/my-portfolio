import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import EachProject from "../EachProject/EachProject";
import "./Project.css";
const Project = () => {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    fetch("/projectData.json")
      .then((res) => res.json())
      .then((data) => setProjects(data.slice(0, 3)));
  }, []);
  return (
    <div className="container py-5" id="project">
      <p className="about-heading text-center py-8">Projects</p>
      <div className="row g-5">
        {projects.map((project) => (
          <EachProject key={project.id} project={project}></EachProject>
        ))}
      </div>
      <div className="d-flex justify-content-end mt-4">
        <Link to="/allProjects">
          <button className="project-btn px-3 text-white font-style">
            View All
            <i class="fas fa-play-circle text-white icon-bg p-3 ms-2 rounded-circle"></i>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Project;
