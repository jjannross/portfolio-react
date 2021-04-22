<!-- HTML Bio with CSS -->
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
  <!-- navagation bar  -->
  <header class="header w-100 bg-dark text-white">
    <h1>Jennifer Smith</h1>
    <ul class="nav nav-tabs" id="myTab" role="tablist">
      <li class="nav-item" role="presentation">
        <a class="nav-link active" id="home-tab" data-toggle="tab" href="index.html" role="tab" aria-controls="home"
          aria-selected="true">Home</a>
      </li>
      <li class="nav-item" role="presentation">
        <a class="nav-link bg-secondary text-white" id="profile-tab" data-toggle="tab" href="portfolio.html" role="tab" aria-controls="profile"
          aria-selected="false">Portfolio</a>
      </li>
      <li class="nav-item" role="presentation">
        <a class="nav-link bg-secondary text-white" id="contact-tab" data-toggle="tab" href="contact.html" role="tab" aria-controls="contact"
          aria-selected="false">Contact</a>
      </li>
    </ul>
    <!-- <div class="tab-content" id="myTabContent">
      <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab"></div>
      <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab"></div>
      <div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab"></div>
    </div> -->
  </header>
  <!-- container  -->
  <div class="container">
    <section id="main-bio">
      <div class="container mb-5">
        <h1>About Me</h1>
        <div class="row">
          <div class="col-12 col-sm-3 col-md-6 col-lg-12">
            <img class="img-fluid" src="images/profile.JPG" alt="Responsive image" id="profile" size="100px" >
          </div>
          <div class="col-12 col-sm-9 col-md-9 col-lg-12">
            <h3>My name is Jennifer Smith</h3>
            <p>
              I am a Full Stack Web Developer who is creative, organized, and seeking to combine past experience in marketing and nonprofit work with recently learned web development skills. I completed a certificate in full stack web development from UNC Chapel Hill with emphasis in JavaScript, CSS, React.js, and responsive web design. I am known as an energized, eager, big picture thinker with a collaborative nature looking to continually learn and develop skills. With each project in the program, my aim was to utilize technology to achieve the end goal. I enjoyed following the model of agile software development with a team to create an application that allowed users to search for flights as well as recent COVID-19 data to their desired destination. We creatively employed the use of several APIs to accomplish this. 
              I created an application utilizing MySQL, Node, Express, Handlebars and a homemade ORM, following the MVC design pattern that lets a user input the names of burgers they'd like to eat. During the development of these and many other projects I sought to always improve the product with the customer/end user in mind. I hope to utilize past expierence in non-profits and marketing in conjunction with web develepment. You will find my coding portfolio and ways to connect with me. </p>
          </div>
        </div>
    </section>
  </div>
  <!-- footer  -->
  <footer class="footer w-70 bg-dark text-white">
  </footer>
</body>
</html>