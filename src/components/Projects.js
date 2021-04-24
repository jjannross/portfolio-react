import React from "react";

function Projects(props) {
    return(
        <div className="card text-white bg-secondary mb-3" style={{maxWidth: "18rem", margin: "30px", alignContent: "center"}}>
        <div className="card-header">{props.project.title}</div>
        <div className="card-body">
         
            <img id="thumbnails" src={props.project.thumbnail} alt="PasswordApp"/>
           
          <br/><br/> 
          <p className="card-text">{props.project.description}</p>
          <a href={props.project.repoLink} target="_blank" className="btn btn-light btn-sm" rel="noreferrer">Take me to the repo!</a>
          <br/><br/>
          <a href={props.project.deployedLink} target="_blank" className="btn btn-light btn-sm" rel="noreferrer">Take me to the deployed app!</a>
        </div>
    </div>
    )  
}

export default Projects; 