import React from 'react'
import Avatar from 'react-avatar-edit'
import logo from '../assets/logo.png';

class MyEditor extends React.Component {

  constructor(props) {
    super(props)
    const src = '../assets/logo.png'
    this.state = {
      preview: null,
      src
    }
    this.onCrop = this.onCrop.bind(this)
    this.onClose = this.onClose.bind(this)
    this.onBeforeFileLoad = this.onBeforeFileLoad.bind(this)
  }
  
  onClose() {
    this.setState({preview: null})
  }
  
  onCrop(preview) {
    this.setState({preview})
  }

  onBeforeFileLoad(elem) {
    if(elem.target.files[0].size > 71680){
      alert("File is too big!");
      elem.target.value = "";
    };
  }
  
  render () {
    return (
      <div>
        <Avatar
          width={390}
          height={295}
          onCrop={this.onCrop}
          onClose={this.onClose}
          onBeforeFileLoad={this.onBeforeFileLoad}
          src={this.state.src}
        />

        {
          console.log(this.state.preview),
          this.state.preview===null?<img width="100px" src={logo} alt="Preview" />:<img src={this.state.preview} alt="Preview" />

        }
      </div>
    )
  }
}

export default MyEditor;