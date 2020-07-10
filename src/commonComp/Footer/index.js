import React, { Component } from 'react';
import './Footer.scss'

class Footer extends Component {

	render() {
    const year = new Date().getFullYear();
    return (
      <div className="footer">
        <div className="max-container">
          ©{year} 渝ICP备20007869号
        </div>
        
      </div>
	  );
	}
}


export default Footer;
