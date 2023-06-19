import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import news from "../../Assets/Projects/news.png";
import sv from "../../Assets/Projects/sv.png";
import blogg from "../../Assets/Projects/blogg.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={news}
              isBlog={false}
              title="DailyScoop News Websites"
              description="Dailyscoop is a news website created using HTML, CSS, and JavaScript, which aggregates the latest news stories from around the world using the News API. The website has been designed to provide an easy-to-use and visually appealing interface for users to access news stories quickly and efficiently."
              ghLink="https://github.com/vipulDudani/Daily-Scoop-News-Website"
              demoLink="#"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={blogg}
              isBlog={false}
              title="Blog Website"
              description="Welcome to my personal blog website, a digital space where I share my thoughts, experiences, and passions with the world. Using a combination of HTML, CSS, JS, EJS, Express.js, and MongoDB, I have created a visually appealing and user-friendly platform that reflects my unique personality and style."
              ghLink="https://github.com/vipulDudani/Blog-Website"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Sorting Visualizer"
              description="The Sorting Visualizer project is an interactive web application that visually demonstrates the process of sorting algorithms. Users can select from various sorting algorithms, such as Bubble Sort, Selection Sort, or Quick Sort, and observe how the algorithms rearrange elements in real-time."
              ghLink="https://github.com/VipulDudani123/Sorting-visualizer"
              demoLink=""              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Plant AI"
              description="Used the plant disease dataset from Kaggle and trained a image classifer model using 'PyTorch' framework using CNN and Transfer Learning with 38 classes of various plant leaves. The model was successfully able to detect diseased and healthy leaves of 14 unique plants. I was able to achieve an accuracy of 98% by using Resnet34 pretrained model."
              ghLink=""
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Ai For Social Good"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              ghLink=""
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink=""
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
