import React, { useState } from "react";

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import NavBar from '../../components/NavBar';
import Banner from '../../components/Banner';
import Footer from '../../components/Footer';
import ProjectCard from '../../components/ProjectCard';

const siteTitle = `Code Samples`;
const siteDescription = `Here are some of the coding projects I have done in classes or just for fun!`;

const CodeSamplesPage = () => {
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
                title="Tiny Search Engine"
                img={require("../../static/images/code-samples/search-engine.png")}
                description="This Tiny Search Engine is a program written in C which crawls internet pages to satisfy queries and ranks them according to relevance."
                link="https://github.com/lizziehv/tiny-search-engine"
              />
              <ProjectCard
                title="Huffman Encoding"
                img={require("../../static/images/code-samples/huffman.png")}
                description="A Java library to compress and decompress text files and images using bit writer and reader"
                link="https://github.com/lizziehv/huffman-encoding"
              />
              <ProjectCard
                title="Doodle It!"
                img={require("../../static/images/code-samples/doodles.png")}
                description={`This is a multiplayer "Pictionary" game where users connect to a server, one player draws, and all others guess. The game is written in Java and uses networking principles like multi-threaded servers, clients, and sockets.`}
                link="https://github.com/lizziehv/doodle-game"
              />
              <ProjectCard
                title="Viterbi"
                img={require("../../static/images/code-samples/markov.png")}
                description="This is a Java program which uses a Viterbi algorithm to determine the parts of speech of each word in a given sentence."
                link="https://github.com/lizziehv/viterbi"
              />
              <ProjectCard
                title="Matrix Labyrinth"
                img={require("../../static/images/code-samples/labyrinth.png")}
                description="Game based on concepts in linear algebra, developed using Javascript"
                link="https://github.com/lizziehv/linear-games"
              />
              <ProjectCard
                title="PacMan"
                img={require("../../static/images/code-samples/pacman.png")}
                description="A simple PacMan game written in Python"
                link="https://github.com/lizziehv/py-pacman"
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

export default CodeSamplesPage;
