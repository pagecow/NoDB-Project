import React, { Component } from 'react';

// Components
import EditToggle from './EditToggle';
import ColorChanger from './ColorChanger';
import SizeChanger from './SizeChanger';
import FamilyChanger from './FamilyChanger';
import TextContainer from './TextContainer';

class AppFromDev extends Component {
  // constructor
  constructor(){
    super();
    this.state = {
      fontColor: 'black',
      fontSize: 12,
      fontFamily: 'monospace',
      allowEdit: 'true',
    }
  }

  // updateColor
  updateColor = (val) => {
    this.setState({
      fontColor: val
    })
  }

  // updateSize
  updateSize = (val) => {
    this.setState({
      fontSize: val
    })
  }

  // updateFamily
  updateFamily = (val) => {
    this.setState({
      fontFamily: val
    })
  }

  // updateEditStatus
  updateEditStatus = (val) => {
    this.setState({
      allowEdit: val
    })
  }

  render() {
    
    return (
      <div>
        <div className="headerBar">
          <EditToggle update={this.updateEditStatus}/>
          <ColorChanger 
            update={this.updateColor}
            allowEdit={this.state.allowEdit}/>
          <SizeChanger 
            update={this.updateSize}
            allowEdit={this.state.allowEdit}/>
          <FamilyChanger 
            update={this.updateFamily}
            allowEdit={this.state.allowEdit}/>
        </div>
        <div className="textArea">
          <TextContainer
            fontColor={this.state.fontColor}
            fontSize={this.state.fontSize}
            fontFamily={this.state.fontFamily}/>
        </div>
      </div>
    );
  }
}

export default AppFromDev;
