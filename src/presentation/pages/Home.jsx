import { Component } from "react";
import { Container, Row } from "react-bootstrap";
import Overview from "../components/Overview";
import './Home.css'
import CustomNav from "../components/CustomNav";
import Footer from "../components/Footer";
import Services from "../components/Services";

export default class Home extends Component {
  render() {
    return (
      <>
        <Container fluid className="home">
          <Row className="bg-2"><CustomNav /></Row>
          <Row className="bg-2">
            <Overview />
          </Row>
          <Row className="bg-1"><Services /></Row>
          <Row className="bg-2"><Footer /></Row>
        </Container>
      </>
    );
  }
}
