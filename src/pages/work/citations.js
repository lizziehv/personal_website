import React from "react";

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import NavBar from '../../components/NavBar';
import Banner from '../../components/Banner';
import Footer from '../../components/Footer';

const siteTitle = `Citations`;
const siteDescription = `Citations are statements by faculty members to highlight students' meritorious characteristics. Here's what others have to say.`;

const ProjectsPage = () => {

  return (
      <Container fluid className="no-padding">
      <Row>
        <NavBar active="Work" />
        <Col xs={12} sm={8} >
          <Banner siteTitle={siteTitle} siteDescription={siteDescription} />
          <Col xs={12}>
            <div className="citations">
              <p>
                "Ms. Hernandez Videa's performance was <span>outstanding</span>! In addition to combinatorics, in Math 28 students learn to collaborate with others, to write rigorous mathematics and to present their ideas to others. She volunteered to present solutions on the board. She was always <span>enthusiastic</span> and willing to work with others. I really enjoyed reading her solutions to the homework and exams. Her writing was <span>original</span> and concise."
              </p>
            </div>
            <hr />
            <div className="citations">
              <p>
                "The real measure of enthusiasm of a student to learn the material is the energy they put into doing extra credit. The quality of work that Lizzie has done for extra credit is <span>awe inspiring</span>. In the three terms that I have taught this course I have not seen work that is as good as Lizzie’s work in quality."
              </p>
            </div>
            <hr />
            <div className="citations">
              <p>
                "It is a pleasure to teach a student like Lizzie. In addition to being the <span>best</span> in the class in terms of grades she is very committed to learning the material thoroughly."
              </p>
            </div>
            <hr />
            <div className="citations">
              <p>
                "Lizzie's performance in both Writing 2 and Writing 3 was outstanding. She was always punctual and well-prepared for both class and TA sessions, she made <span>thoughtful</span> contributions in class discussions, and she worked well with her classmates. She exhibited a strong work ethic and managed her time well, investing time and effort into all her written and multimodal assignments and demonstrating an ability to transfer course content (both course readings and aspects of writing) into her work at a <span>meaningful</span> level. Lizzie's focus and drive to improve herself is clear and will serve her and society well in the future."
              </p>
            </div>
            <hr />
            <div className="citations">
              <p>
                "<span>Excellent</span> work! Went well above and beyond expectations on problem sets."
              </p>
            </div>
            <hr />
            <div className="citations">
              <p>
                "Lizzie obtained the highest points in the class. Much more impressively, she solved all extra credit problems. It was my great pleasure to have her as a student!"
              </p>
            </div>
            <hr />
            <div className="citations">
              <p>
                "Lizzie Hernandez Videa '22 is commended for excellence in Studio Art 15, Drawing I. Her drawings were of consistently <span>high quality</span> both in conception and execution. Lizzie has a remarkable ability to transform drawing media into unique surfaces, lights, and forms. Her final series of drawings were large
                  portraits of her friends who are international students. Lizzie shows <span>great potential</span> as an artist."
              </p>
            </div>
            <hr />
          </Col>
          <Row>
            <Footer />
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default ProjectsPage;
