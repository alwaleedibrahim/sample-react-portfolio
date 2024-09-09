import { Component } from "react";
import { Card } from "react-bootstrap";
import "./ServiceCard.css";

export default class ServiceCard extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Card style={{ width: "370px" }}>
        <Card.Img
          variant="top"
          src={`/src/assets/${this.props.service.img}`}
          style={{ width: "56px" }}
        />
        <Card.Body>
          <Card.Title className="fs-3 my-4" >{this.props.service.title}</Card.Title>
          <Card.Text className="fs-5">
            <ul style={{listStyle: 'none'}}>
              {this.props.service.items.map((item, index) => {
                return (
                  <>
                    <li key={index} className="my-2">{item}</li>
                  </>
                );
              })}
            </ul>
          </Card.Text>
        </Card.Body>
      </Card>
    );
  }
}
