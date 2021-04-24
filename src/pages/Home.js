
import React from "react";

function Home() {
    return (
  <div className="container">
    <section id="main-bio">

      <div className="container mb-5">
        <h1>About Me</h1>
        <div className="row">
          
          <div className="col-12 col-sm-3 col-md-6 col-lg-12">
            <img className="img-fluid" src="images/profile.JPG" alt="Responsive" id="profile" size="100px" />
          </div>

          <div className="col-12 col-sm-9 col-md-9 col-lg-12">
            <h3>My name is Jennifer Smith</h3>
            <p>
              I am a Full Stack Web Developer who is creative, organized, and seeking to combine past experience in marketing and nonprofit work with recently learned web development skills. I completed a certificate in full stack web development from UNC Chapel Hill with emphasis in JavaScript, CSS, React.js, and responsive web design. I am known as an energized, eager, big picture thinker with a collaborative nature looking to continually learn and develop skills. With each project in the program, my aim was to utilize technology to achieve the end goal. I enjoyed following the model of agile software development with a team to create an application that allowed users to search for flights as well as recent COVID-19 data to their desired destination. We creatively employed the use of several APIs to accomplish this. 
              I created an application utilizing MySQL, Node, Express, Handlebars and a homemade ORM, following the MVC design pattern that lets a user input the names of burgers they'd like to eat. During the development of these and many other projects I sought to always improve the product with the customer/end user in mind. I hope to utilize past expierence in non-profits and marketing in conjunction with web develepment. You will find my coding portfolio and ways to connect with me. </p>
          </div>
       
        </div>
        </div>

    </section>
  </div>
  );
  }

  export default Home;