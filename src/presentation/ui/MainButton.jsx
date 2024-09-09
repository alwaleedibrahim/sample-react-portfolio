import { Component } from 'react'
import { Button } from 'react-bootstrap'
import './MainButton.css'

export default class MainButton extends Component {
    constructor(props) {
        super(props)
        
    }
  render() {
    return (
      <>
        <Button variant='outline-secondary' id='main-btn'>{this.props.value}</Button>
      </>
    )
  }
}
