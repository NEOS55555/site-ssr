import React, { Component } from 'react';
import { AutoComplete } from 'antd';

const { Option } = AutoComplete;

class Email extends Component {
  state = {
    result: []
  }
  handleSearch = value => {
    let res = [];
    this.props.onSelect(value);
    if (!value || value.indexOf('@') >= 0) {
      res = [];
    } else {
      res = ['qq.com', '163.com', 'foxmail.com', 'gmail.com'].map(domain => `${value}@${domain}`);
    }

    this.setState({
      result: res
    })
  };

  render () {

    const { result } = this.state;

    return (
      <AutoComplete
        style={{
          width: 200,
        }}
        onBlur={this.props.onBlur}
        onSearch={this.handleSearch}
        {...this.props}
      >
        {result.map(email => (
          <Option key={email} value={email}>
            {email}
          </Option>
        ))}
      </AutoComplete>
    );
  }
}


export default Email;