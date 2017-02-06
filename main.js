
import React from 'react';
import ReactDOM from 'react-dom';
import Dropzone from 'react-dropzone';
var DropzoneDemo = React.createClass({
    onDrop: function (files) {
      console.log('Received files: ', files);
    },

    render: function () {
     
      return (
     
            <div>
              <Dropzone onDrop={this.onDrop} width={150} height={100}>
                <div>Try dropping some files here, or click to select files to upload.</div>
              </Dropzone>
            </div>
      
      );
    }
});

ReactDOM.render(<DropzoneDemo />,document.getElementById('app'));
