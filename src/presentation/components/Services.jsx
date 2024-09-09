import { Component } from "react";
import ServiceCard from "../ui/ServiceCard";
import { Container, Row } from "react-bootstrap";
import "./Services.css";
export default class Services extends Component {
  render() {
    return (
      <Container className="services-container">
        <h2 className="my-5">My Services</h2>
        <Row className="d-flex justify-content-between services-row">
          <ServiceCard
            service={{
              title: "UI/UX Design",
              items: [
                "Landing Pages",
                "User Flow",
                "Wireframing",
                "Prototyping",
                "Mobile App Design",
              ],
              img: "service-icon-3.png",
            }}
          />
          <ServiceCard
            service={{
              title: "Development",
              items: [
                "HTML/CSS",
                "JavaScript",
                "Animation",
                "WordPress",
                "React",
              ],
              img: "service-icon-1.png",
            }}
          />
          <ServiceCard
            service={{
              title: "Illustration",
              items: [
                "Character Design",
                "Icon Set",
                "Illustration Guide",
                "Illustration Set",
                "Motion Graphic",
              ],
              img: "service-icon-2.png",
            }}
          />
        </Row>
      </Container>
    );
  }
}
