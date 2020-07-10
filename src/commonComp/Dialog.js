import React, {Component} from 'react';
import { Modal } from 'antd';
import ReactDOM from 'react-dom';
import eventBus from '@/common/eventBus'

class Dialog extends Component {
	state = {
		confirmLoading: false,
		visible: false,
		title: '',
		content: '',
	}
	componentDidMount () {
		eventBus.on('getDialog#dialog', () => {
			return this;
		})
	}
	open = (config={}) => {
		this.setState({
			visible: true,
			...config,
		})
	}
	showLoading = () => {
		this.setState({
			confirmLoading: true,
		})
	}
	hideLoading = () => {
		this.setState({
			confirmLoading: false,
		})
	}
	close = () => {
		this.setState({
			confirmLoading: false,
			visible: false,
			footer: undefined,
		})
	}
	render () {
		const {content} = this.state;
		return (
			<Modal
				{...this.state}
			  // title={title}
			  // footer={footer}
			  maskClosable={false}
			  // visible={visible}
			  // onOk={onOk}
			  // confirmLoading={confirmLoading}
			  okText="确定"
				cancelText="取消"
			  onCancel={this.close}
			>
			  <p>{content}</p>
			</Modal>
		)
	}

}

export default Dialog;