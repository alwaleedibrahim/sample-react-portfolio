import { Component } from "react";
import { Container, Image, Row } from "react-bootstrap";
import MainButton from "../ui/MainButton";
import "./Overview.css";

export default class Overview extends Component {
  render() {
    return (
      <>
        <Container className="overview-container">
          <Row>
            <div className="col-12 col-lg-5 d-flex flex-column">
              <div>
                <h2>Hello! I&apos;m</h2>
                <h1>Alwaleed</h1>
                <p className="font-sans text-grey fs-5">
                  Web developer specializing in back-end development with an
                  experience in front-end website development
                </p>
              </div>
              <div className="my-5">
                <MainButton value="Get Resume" />
                <div className="watch-video my-5">
                  <a>
                    <span>&#9658;</span>
                  </a>
                  <p>
                    <span>Watch Video</span>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-7 d-flex justify-content-center">
              <Image src="/src/assets/profile.png" />
            </div>
          </Row>
        </Container>
      </>
    );
  }
}
