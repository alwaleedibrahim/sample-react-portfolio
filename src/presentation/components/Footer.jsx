import { Component } from "react";
import "./Footer.css";
export default class Footer extends Component {
  render() {
    return (
      <footer className="d-flex justify-content-between align-items-center">
        <p className="text-grey">
          &copy; 2021 <span className="text-white">Lendex</span> Made with{" "}
          <span className="text-white">&hearts;</span> by{" "}
          <span className="text-white">Alwaleed</span>
        </p>
        <div>
          <img src="/src/assets/brand.png" />
        </div>
      </footer>
    );
  }
}
