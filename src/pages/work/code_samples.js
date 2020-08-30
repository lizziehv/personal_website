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
                description="This tiny search engine is a program written in C which crawls internet pages to satisfy users' queries and ranks them according to relevance."
                link="https://github.com/lizziehv/tiny-search-engine"
              />
              <ProjectCard
                title="Huffman Encoding"
                img={require("../../static/images/code-samples/huffman.png")}
                description="This Java library utilizes Huffman coding algorithm to compress and decompress text files and images. It is implemented using i/o streams for compressed data storage."
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
                description="The Part of Speech Tagger is a Java program and interface which uses a Viterbi algorithm to determine the parts of speech of each word in a given sentence."
                link="https://github.com/lizziehv/viterbi"
              />
              <ProjectCard
                title="Matrix Labyrinth"
                img={require("../../static/images/code-samples/labyrinth.png")}
                description="Matrix Lanyrinth is a game based on concepts in linear algebra, developed using Javascript, and designed to teach matrix multiplication."
                link="https://github.com/lizziehv/linear-games"
              />
              <ProjectCard
                title="PacMan"
                img={require("../../static/images/code-samples/pacman.png")}
                description="This is a simple PacMan game written in Python."
                link="https://github.com/lizziehv/py-pacman"
              />
            </Row>
            <div className="citations">
              <h2>Honors/Citations</h2>
              <p>
                "The real measure of enthusiasm of a student to learn the material is the energy they put into doing extra credit. The quality of work that Lizzie has done for extra credit is <span>awe inspiring</span>. In the three terms that I have taught this course I have not seen work that is as good as Lizzie’s work in <span>quality</span>." ~ Dartmouth Faculty
              </p>
            </div>
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
