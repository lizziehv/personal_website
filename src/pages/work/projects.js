import React, { useState } from "react";

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import NavBar from '../../components/NavBar';
import Banner from '../../components/Banner';
import Footer from '../../components/Footer';
import ProjectCard from '../../components/ProjectCard';

const siteTitle = `Projects`;
const siteDescription = `A few projects that I've collaborated on . . .`;

const ProjectsPage = () => {
  const [curtainDown, setCurtainDown] = useState(false);

  const toggleCurtainDown = () => {
    setCurtainDown((prev) => !prev)
  }

  return (
      <Container fluid className="no-padding">
      <Row>
        <NavBar active="Work" onCollapse={toggleCurtainDown}/>
        {!curtainDown &&
          <Col xs={12} sm={8} >
            <Banner siteTitle={siteTitle} siteDescription={siteDescription} />
            <Row>
              <ProjectCard
                title="Unmasked Project"
                img={require("../../static/images/projects/unmasked-logo.png")}
                description="Unmasked is an anonymous mental health app for students in 13 colleges with 3,000+ users. I work in the development team, using React Native and Redux."
                link="https://www.unmaskedproject.com"
              />
              <ProjectCard
                title="Linear Games"
                img={require("../../static/images/projects/linear-games.png")}
                description="I collaborated in the design and development of games based on concepts in linear algebra to teach students math in an interactive setting. I used HTML/CSS and JavaScript."
                link="http://linear-math-games.herokuapp.com"
              />
              <ProjectCard
                title="Mood Triggers App"
                img={require("../../static/images/projects/mood-triggers.png")}
                description="I am currently working on the development team of Mood Triggers, a mobile app for behavioral data analysis which collects data to provide an account of users' health behaviors. More to come soon!"
                link="http://www.nicholasjacobson.com/project/mood-triggers/"
              />
              <ProjectCard
                title="Sudoku/Samurai"
                img={require("../../static/images/projects/sudoku.png")}
                description="This is a program, written in C and using SDL, that creates and solves sudoku and samurai sudokus using a backtracking algorithm with some improvements in term of efficiency."
                link="https://github.com/lizziehv/cs50-sudoku/tree/master/extra-credit"
              />
            </Row>
            <Row>
              <Footer />
            </Row>
          </Col>
        }
      </Row>
    </Container>
  );
};

export default ProjectsPage;
