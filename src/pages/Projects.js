<!DOCTYPE html>
<html lang="en-us">

<head>
  <meta charset="UTF-8">
  <title>Jennifer Smith</title>
  <!-- bootstrap link  -->
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
  <!-- css link  -->
  <link rel="stylesheet" type="text/css" href="style.css">
  <!-- google fonts -->
  <link rel="preconnect" href="https://fonts.gstatic.com">
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@200&display=swap" rel="stylesheet">
</head>

<body>
  <!-- Navagation Bar  -->
  <header class="header w-100 bg-dark text-white">
    <h1>Jennifer Smith</h1>
    <ul class="nav nav-tabs" id="myTab" role="tablist">
      <li class="nav-item" role="presentation">
        <a class="nav-link bg-secondary text-white" id="home-tab" data-toggle="tab" href="index.html" role="tab" aria-controls="home"
          aria-selected="true">Home</a>
      </li>
      <li class="nav-item" role="presentation">
        <a class="nav-link active" id="profile-tab" data-toggle="tab" href="portfolio.html" role="tab" aria-controls="profile"
          aria-selected="false">Portfolio</a>
      </li>
      <li class="nav-item" role="presentation">
        <a class="nav-link bg-secondary text-white" id="contact-tab" data-toggle="tab" href="contact.html" role="tab" aria-controls="contact"
          aria-selected="false">Contact</a>
      </li>
    </ul>
  </header>
  <!-- projects on cards  -->
  <div class="container">
    <div class="row">
      <h1>Portfolio</h1>
    </div>
    <!-- container for grid design  -->
  <div class="container">
  <div class="row">
    <div class="card text-white bg-secondary mb-3" style="max-width: 18rem; margin: 30px; align-content: center;">
        <div class="card-header">Password Generator</div>
        <div class="card-body">
          <a target="_blank" href="./images/passwordg.png">
            <img id="thumbnails" src="./images/passwordg.png" alt="PasswordApp">
          </a>
          <br></br> 
          <p class="card-text">Create a password, user determines length, which characters, letters, numbers are included. A password is chosen at random.</p>
          <a href="https://jjannross.github.io/password-generator/" target="_blank" class="btn btn-light btn-sm">Take me to the repo!</a>
          <br></br>
          <a href="https://jjannross.github.io/password-generator/" target="_blank" class="btn btn-light btn-sm">Take me to the deployed app!</a>
        </div>
    </div>
      <br>
    <div class="card text-white bg-secondary mb-3" style="max-width: 18rem; margin: 30px;">
        <div class="card-header">Weather Dashboard</div>
        <div class="card-body">
          <a target="_blank" href="./images/weatherd.png">
            <img id="thumbnails" src="./images/weatherd.png" alt="WeatherApp">
          </a>
          <br></br> 
          <p class="card-text">Current weather and 5 day forecast displayed with a special UV Indext indicator. This app utilizes various APIs to gather all data as well as local storage to see a list of previously searched cities.</p>
          <a href="https://jjannross.github.io/weatherdashboard/" target="_blank" class="btn btn-light btn-sm">Take me to the repo!</a>
          <br></br>
          <a href="https://jjannross.github.io/weatherdashboard/" target="_blank" class="btn btn-light btn-sm">Take me to the deployed app!</a>
        </div>
    </div>
    <div class="card text-white bg-secondary mb-3" style="max-width: 18rem; margin: 30px;">
      <div class="card-header">Team Profile Generator</div>
      <div class="card-body">
        <a target="_blank" href="./images/teamprofile.png">
          <img id="thumbnails" src="./images/teamprofile.png" alt="TeamProfileApp">
        </a>
        <br></br> 
        <p class="card-text">Command-line application that takes in information about employees on a software engineering team, then generates an HTML webpage that displays summaries for each person.</p>
        <a href="https://jjannross.github.io/team-profile-generator/" target="_blank" class="btn btn-light btn-sm">Take me to the repo!</a>
        <br></br>
        <a href="https://jjannross.github.io/team-profile-generator/" target="_blank" class="btn btn-light btn-sm">Take me to the deployed app!</a>
      </div>
    </div>
  </div>

  <div class="row" style="margin-bottom: 150px;">
    <div class="card text-white bg-secondary mb-3" style="max-width: 18rem; margin: 30px;">
      <div class="card-header">Employee Management System</div>
      <div class="card-body">
        <a target="_blank" href="./images/employeemanage.png">
          <img id="thumbnails" src="./images/employeemanage.png" alt="EmployeeManagementApp">
        </a>
        <br></br> 
        <p class="card-text">Employee Management System allows a business owner to organize and plan their business by viewing and managing the departments, roles, and employees in my company.</p>
        <a href="https://jjannross.github.io/employee-management-system/." target="_blank" class="btn btn-light btn-sm">Take me to the repo!</a>
        <br></br>
        <a href="https://jjannross.github.io/employee-management-system/" target="_blank" class="btn btn-light btn-sm">Take me to the deployed app!</a>
      </div>
    </div>
    <br>
    <div class="card text-white bg-secondary mb-3" style="max-width: 18rem; margin: 30px;">
      <div class="card-header">Burger</div>
      <div class="card-body">
        <a target="_blank" href="./images/burger.png">
          <img id="thumbnails" src="./images/burger.png" alt="TeamProfileApp">
        </a>
        <br></br> 
        <p class="card-text">An application that can be used to write and save notes. write and save notes. The notes can help organize and keep track of tasks I need to complete. This application will use an Express.js back end and will save and retrieve note data from a JSON file.</p>
        <a href="https://github.com/jjannross/burger" target="_blank" class="btn btn-light btn-sm">Take me to the repo!</a>
        <br></br>
        <a href="https://eat-burger310.herokuapp.com/" target="_blank" class="btn btn-light btn-sm">Take me to the deployed app!</a>
      </div>
    </div>
  </div>
  

      
    <!-- footer  -->
    <footer class="footer w-70 bg-dark text-white">
    </footer>
</body>

</html>
