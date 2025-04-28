import React from "react";
import { createRoot } from "react-dom/client";
import { Navbar } from "./components/Navbar/Navbar";
import { Contact } from "./components/Contact/Contact";
import { ProjDemo } from "./components/ProjDemos/projdemo";
import projects from "./data/projects.json";
import stylesA from "./App.module.css";
import stylesB from "./projectDetails.module.css"
import "./index.css";

function ProjectDetails() {
  return (
    <div className={stylesA.App}>
      <Navbar />
      <div className={stylesB.titleContainer}>
        <h2 className={stylesB.title}>Project Breakdown</h2>  
      </div>

      <div className={stylesB.projectContainer}> 
        <div className={stylesB.projects} id="projects">{
                projects.map((project, id) => {
                return( 
                    <ProjDemo key={id} project={project}/>
                );
            })}
            </div>
      </div>
      <Contact />
    </div>
  );
}

createRoot(document.getElementById("project-root")).render(<ProjectDetails />);