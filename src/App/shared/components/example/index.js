import React from 'react'

import Content from '../content';
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
      <Content>
        <h1>Lorem Ipsum</h1>
        <p>{this.state.loremIpsum}</p>
        <ButtonGroup />
        <ButtonGroup outline />
      </Content>
    )
  }
}
export {ButtonGroup, Example}