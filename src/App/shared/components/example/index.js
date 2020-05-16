import React from 'react'

import Container from '../container';
import AlertStack from './AlertStack/AlertStack';
import ButtonGroup from './ButtonGroups/ButtonGroups';
import {SampleTextGenerator} from '../../helpers';

class Example extends React.Component {

  state = {
    loremIpsum: ''
  }
  
  componentDidMount() {
    SampleTextGenerator.get()
    .then(text  => {
      // console.log({text, now: Date.now()});
      this.updateLoremIpsum(text)
    })
  }

  updateLoremIpsum(loremIpsum) {
    this.setState({loremIpsum})
  }

  render() {
    return (
      <Container>
        <AlertStack />
        <section>
          <h1>Lorem ipsum</h1>
          <p>{this.state.loremIpsum}</p>
          <h2>Dolor sit amet</h2>
          <p>{this.state.loremIpsum}</p>
          <h3>Consectetur adipiscing elit</h3>
          <p>{this.state.loremIpsum}</p>
          <h4>Sed do eiusmod</h4>
          <p>{this.state.loremIpsum}</p>
          <h5>Buttons</h5>
          <ButtonGroup />
          {/* <h6>Buttons outline</h6> */}
          <ButtonGroup outline />
        </section>
      </Container>
    )
  }
}
export {ButtonGroup, Example}