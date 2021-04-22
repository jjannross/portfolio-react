import React from "react";

function Projects() {
    return (
  <div className="container">
  <div className="row">
    <div className="card text-white bg-secondary mb-3" style="max-width: 18rem; margin: 30px; align-content: center;">
        <div className="card-header">Password Generator</div>
        <div className="card-body">
          <a target="_blank" href="./images/passwordg.png">
            <img id="thumbnails" src="./images/passwordg.png" alt="PasswordApp">
          </a>
          <br></br> 
          <p className="card-text">Create a password, user determines length, which characters, letters, numbers are included. A password is chosen at random.</p>
          <a href="https://jjannross.github.io/password-generator/" target="_blank" className="btn btn-light btn-sm">Take me to the repo!</a>
          <br></br>
          <a href="https://jjannross.github.io/password-generator/" target="_blank" className="btn btn-light btn-sm">Take me to the deployed app!</a>
        </div>
    </div>
      <br>
    <div className="card text-white bg-secondary mb-3" style="max-width: 18rem; margin: 30px;">
        <div className="card-header">Weather Dashboard</div>
        <div className="card-body">
          <a target="_blank" href="./images/weatherd.png">
            <img id="thumbnails" src="./images/weatherd.png" alt="WeatherApp">
          </a>
          <br></br> 
          <p className="card-text">Current weather and 5 day forecast displayed with a special UV Indext indicator. This app utilizes various APIs to gather all data as well as local storage to see a list of previously searched cities.</p>
          <a href="https://jjannross.github.io/weatherdashboard/" target="_blank" className="btn btn-light btn-sm">Take me to the repo!</a>
          <br></br>
          <a href="https://jjannross.github.io/weatherdashboard/" target="_blank" className="btn btn-light btn-sm">Take me to the deployed app!</a>
        </div>
    </div>
    <div className="card text-white bg-secondary mb-3" style="max-width: 18rem; margin: 30px;">
      <div className="card-header">Team Profile Generator</div>
      <div className="card-body">
        <a target="_blank" href="./images/teamprofile.png">
          <img id="thumbnails" src="./images/teamprofile.png" alt="TeamProfileApp">
        </a>
        <br></br> 
        <p className="card-text">Command-line application that takes in information about employees on a software engineering team, then generates an HTML webpage that displays summaries for each person.</p>
        <a href="https://jjannross.github.io/team-profile-generator/" target="_blank" className="btn btn-light btn-sm">Take me to the repo!</a>
        <br></br>
        <a href="https://jjannross.github.io/team-profile-generator/" target="_blank" className="btn btn-light btn-sm">Take me to the deployed app!</a>
      </div>
    </div>
  </div>

  <div className="row" style="margin-bottom: 150px;">
    <div className="card text-white bg-secondary mb-3" style="max-width: 18rem; margin: 30px;">
      <div className="card-header">Employee Management System</div>
      <div className="card-body">
        <a target="_blank" href="./images/employeemanage.png">
          <img id="thumbnails" src="./images/employeemanage.png" alt="EmployeeManagementApp">
        </a>
        <br></br> 
        <p className="card-text">Employee Management System allows a business owner to organize and plan their business by viewing and managing the departments, roles, and employees in my company.</p>
        <a href="https://jjannross.github.io/employee-management-system/." target="_blank" className="btn btn-light btn-sm">Take me to the repo!</a>
        <br></br>
        <a href="https://jjannross.github.io/employee-management-system/" target="_blank" className="btn btn-light btn-sm">Take me to the deployed app!</a>
      </div>
    </div>
    <br>
    <div className="card text-white bg-secondary mb-3" style="max-width: 18rem; margin: 30px;">
      <div className="card-header">Burger</div>
      <div className="card-body">
        <a target="_blank" href="./images/burger.png">
          <img id="thumbnails" src="./images/burger.png" alt="TeamProfileApp">
        </a>
        <br></br> 
        <p className="card-text">An application that can be used to write and save notes. write and save notes. The notes can help organize and keep track of tasks I need to complete. This application will use an Express.js back end and will save and retrieve note data from a JSON file.</p>
        <a href="https://github.com/jjannross/burger" target="_blank" className="btn btn-light btn-sm">Take me to the repo!</a>
        <br></br>
        <a href="https://eat-burger310.herokuapp.com/" target="_blank" className="btn btn-light btn-sm">Take me to the deployed app!</a>
      </div>
    </div>
  </div>
  );
}
  

export default Projects;