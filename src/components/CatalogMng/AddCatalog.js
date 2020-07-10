import React, { Component, Fragment } from 'react';
import {message, Modal, Button, Input } from 'antd';
// import { LOG_OVERDUE_CODE } from '@/common/constant'
// import './AddWebSite.scss';
import { addCatalog, getAllCatalog, dispatchCatalogList } from '@/store/actions'
import { connect } from 'react-redux'


class AddCatalog extends Component {
	
	constructor (props) {
		super(props);
		this.state = {
			visible: false,
			confirmLoading: false,
			name: '',
			
		};
	}
	

	showModal = () => {
		this.setState({
		  visible: true,
		});
		/*axios.get('/api/ip').then((res) => {
			console.log(res)
		})*/
	};
	
	
	handleOk = () => {
		// const that = this;
		const {name} = this.state;
		// const {handleOk} = this.props;

		this.setState({ confirmLoading: true })
		addCatalog({name}).then(res => {
			message.success('新增成功!')
			this.props.getAllCatalog()
			this.props.dispatchCatalogList()
			this.setState({ visible: false, confirmLoading: true, name: '' });
		})/*.catch(res => {
      if (res.resultCode === LOG_OVERDUE_CODE) {
        this.props.setUsername('')
      }
    })*/.catch(res => {
			this.setState({ confirmLoading: false });
		})
		
	};

	handleCancel = () => {
		this.setState({
			visible: false,
		});
	};
	

	nameChange = e => {
		this.setState({
			name: e.target.value
		})
	}
	
	
	render() {
	   const { visible, confirmLoading, name} = this.state;
	    // console.log(selectOptions)
	   return (
			<Fragment>
	    	<Button type="primary" onClick={() => {
	        this.showModal()
	      }}>新增分类</Button>
	       
        <Modal
        	width={700}
					title="新增分类"
					visible={visible}
					maskClosable={false}
					onOk={this.handleOk}
					confirmLoading={confirmLoading}
					onCancel={this.handleCancel}
					okText="提交"
					cancelText="取消"
        >
	        <div className="self-wrapper">
						<div className="self-line must">
							<label>分类名称</label><Input onChange={this.nameChange} value={name} />
						</div>
	        </div>
        	
        </Modal>
			</Fragment>
	  );
	}
}

/*const mapStateToProps = state => {
	const { catalogList } = state.siteMng
  return {
  	catalogList: catalogList.slice(1),
  };
};*/


const mapDispatchToProps = dispatch => {
  return {
  	getAllCatalog (params) {
			return dispatch(getAllCatalog(params))
  	},
  	dispatchCatalogList (params) {
			return dispatch(dispatchCatalogList(params))
  	},
  };
};
export default connect(null, mapDispatchToProps)(AddCatalog);;
