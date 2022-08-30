import React, { Component } from 'react';
import './ChatInput.scss';

class ChatInput extends Component {
  
  render() {
    return (
      <div className='ChatInput'>
        <input type="text" onKeyDown={this.props.send} placeholder="Press Enter to Send"/>
      </div>
    );
  };

}

export default ChatInput;
