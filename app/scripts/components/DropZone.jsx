import React, { Component } from 'react'
import Dropzone from 'react-dropzone'
import { create } from 'apisauce'

const api = create({
  baseURL: 'http://localhost:1337',
  headers: {
    'Accept': '*',
    'Access-Control-Allow-Origin': '*'
  }
})

class DropZone extends Component {
  constructor(props) {
    super(props);
    this.state = {
      files: []
    }
  }

  onDrop(files) {
    this.setState({
      files: files
    });
  }

  upload(object) {
    console.log(object);
    api.post('/images', object, { headers: { 'Access-Control-Allow-Origin': '*' } }).then((response) => console.log(response));
  }

  render() {
    return (
      <div>
        <Dropzone ref={(node) => { this.dropzone = node; }} className="dropzone" activeClassName="dropzoneactive" onDrop={(file) => this.onDrop(file)} accept="image/*" >
          <div>Try dropping some files here, or click to select files to upload.</div>
        </Dropzone>
        {this.state.files.length > 0 ? <div>
          <h5>{this.state.files.length} file(s) selected</h5>
          <div>
            {this.state.files.map((file) => <img className="imagepreview" key={file.name} src={file.preview} alt="" />)}
          </div>
        </div> : null}
        <br />
        <div>
          <button onClick={(e) => {
            e.preventDefault();
            this.upload(this.state.files[0])
          }}>
            Upload
          </button>
        </div>
        <br />
      </div>
    )
  }
}

export default DropZone