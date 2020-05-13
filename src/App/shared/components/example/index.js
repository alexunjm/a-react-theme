import React from 'react'

import Content from '../content';
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
      <Content>
        <AlertStack />
        <h1>Lorem ipsum</h1>
        <h2>Dolor sit amet</h2>
        <h3>Consectetur adipiscing elit</h3>
        <h4>Sed do eiusmod</h4>
        <p>{this.state.loremIpsum}</p>
        <ButtonGroup />
        <ButtonGroup outline />
      </Content>
    )
  }
}
export {ButtonGroup, Example}