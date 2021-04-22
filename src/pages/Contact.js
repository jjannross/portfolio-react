import React from "react";

function Contact() {
    return (

    <div className="container" style="margin-top: 50px">
      <h1>I'd love to connect!</h1>
      <h4>You can find me:</h4>

      
        <i className="bi bi-phone fa-10x"> (815) 529 - 0964</i>
        <br />
        <br>
        <i className="bi bi-envelope"> jjannross@gmail.com</i>
       
      
      <br></br>
  
        <i className="bi bi-linkedin"
          ><a
            href="www.linkedin.com/in/jennifersmithnc"
            target="_blank"
            className="btn btn-light"
            >LinkedIn Profile</a
          ></i
        >
        <br></br>
        <i className="bi-github" role="img" aria-label="GitHub"
          ><a
            href="https://github.com/jjannross/jjannross.github.io"
            target="_blank"
            className="btn btn-light"
            >GitHub Profile</a
          ></i
        >
        <br></br>
        <i className="bi bi-file-person"><a href="https://drive.google.com/file/d/1ec9XOzwx0qx18xKZGSMqRs5-VwjMObwP/view?usp=sharing" target="_blank" className="btn btn-light btn-sm">Click here for full resume</a></i>      
      </div>
    </div>
    </div>
    );
}

    
    export default Contact;