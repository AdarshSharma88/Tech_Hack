import React from "react";
import vg from "../assets/2.webp";
import {AiFillLinkedin,AiFillFacebook,AiFillYoutube,AiFillInstagram} from "react-icons/ai";



const Home = () => {
  return (
    <>
      <div className="home" id="home">
        <main>
          <h1>Technolnogy</h1>
          <p>Solution to all your problems</p>
        </main>
      </div>

      <div className="home2">
        <img src={vg} alt="Graphics" />

        <div>
          <p>
            We are your one and only solution to the tech problems you face
            every day. We are leading tech company whose aim is to increase the
            problem solving ability in children.
          </p>
        </div>
      </div>

      <div className="home3" id="about">
        <div>
          <h1>Who I am?</h1>
          <p>
          I am Adarsh Sharma. I did my schooling at Genius Public School with Math. I choose Math because Math is all about problem-solving. It works on real-world applications. I am pursuing my Bachelor of Technology from Amity University and specializing in Computer Science and Engineering. My technical skills in programming languages such as C, C++, Java, and Python. To make any website in frontend role such as HTML, CSS, Angular JS and in backend role such as PHP, Node JS, works on Database SQL. I made the project on Machine Learning which is ‘Real and Fake Face detection using Machine Learning ‘it predicts the accuracy of the face, but it gives me less accuracy. Then I used the deep learning concept with TensorFlow and OpenCV library in my project which give me better results and accuracy. I worked on the project ‘Application Automator’. This is a team project. The scope of this project is that in real-time, many parents and students take the help of Google for writing applications. So, this project helps to generate applications automatically. I have a backend role for this project. The process of this project is to generate Applications automatically according to user requirements. I use PHP and Database SQL for storing data.

          </p>
        </div>
      </div>
      <div className="home4" id ="brands">
        <div>
          <h1>Connect With Me On</h1>
          <article>
            <div style={{
              animationDelay:"0.3s",
            }}  >
            <a href="https://www.linkedin.com/in/adarsh-sharma-a32bb022a/"  target ={"blank"}>
            <AiFillLinkedin/>
            
            <p>LinkeDin</p>
            </a>
            
            </div>

            <div style={{
              animationDelay:"0.5s",
            }}  >
            <a href="https://www.facebook.com/adarsh.dandotiya/" target={"blank"}>
            <AiFillFacebook/>

            
            <p>FaceBook</p>
            </a>
            </div>
            <div style={{
              animationDelay:"0.7s",
            }}  >
            <a href="https://www.youtube.com/channel/UC7i4c7cxRBtB0ELHG7t6Eqg" target = {"blank"}>
            <AiFillYoutube/>

            <p>Youtube</p>
            </a>
            </div>
            <div style={{
              animationDelay:"1s",
            }}  >
            <a href="https://www.instagram.com/adarshdandotiya/" target ={"blank"}>
            <AiFillInstagram/>
            <p>Instagram</p>
            </a>
            </div>
          </article>
        </div>
      </div>

    
    </>
  );
};

export default Home;