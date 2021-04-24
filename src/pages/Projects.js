import React, {useState} from "react";
import projects from "../utils/projects.json"
import ProjectCard from "../components/Projects"
function Projects() {
    const [projectData, setProjectData]=useState(projects)
    return (
  <div className="container">
  <div className="row">
   
   {projectData.map(project=>{
       return(
        <>
         <ProjectCard project= {project} />
   </>
       )
   })}
 
  </div> 
  </div>
  );
}
  

export default Projects;