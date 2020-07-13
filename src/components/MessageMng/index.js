import React, { Component } from 'react';
import { getReplyMeList, clearreplynum, setReplyNum } from '@/store/actions'
// import { withRouter } from "react-router";
import { Pagination } from 'antd'
import Link from 'next/link'
import { connect } from 'react-redux'
import { FEEDBACK_SITEID } from '@/common/constant'
import Empty from '@/commonComp/Empty'
import './MessageMng.scss'
import eventBus from '@/common/eventBus'
import routerMap from '@/common/router'


class MessageMng extends Component {
  constructor (props) {
    super(props)
    this.state = {
      list: [],
      total: 0,
      pageIndex: 1,
    }
  }
  
  componentDidMount () {
    this.getReplyMeList({pageIndex: 1, isTotal: true})
    clearreplynum().then(res => this.props.setReplyNum(0))
  }
  getReplyMeList = (params) => {

    getReplyMeList(params).then(res => {
      const { list, total } = res.result
      this.setState({
        list
      })
      if (params.isTotal) {
        this.setState({
          total
        })
      }
    }).catch(res => {
      eventBus.emit('logout#toHome', res)
    })
  }
  onChange = (pageIndex) => {
    this.getReplyMeList({pageIndex})
    this.setState({pageIndex})
  }
	render() {
    // const { siteId } = this.props.match.params
    const { list, total, pageIndex } = this.state;

    return (
      <div className="message-wrapper main-content">
        {
          list.length === 0 ? <Empty /> : 
            <div className="message-container">
              <div className="message-list">
                <ul>
                  {
                    list.map(it => {
                      const isFeedback = it.site_id === FEEDBACK_SITEID;

                      const linkurl = isFeedback ? routerMap.feedback : (routerMap.sitedetail + '?id=' + it.site_id)

                      return <li key={it._id}>
                        <div className="rich-left">
                          <Link href={linkurl} >
                            <a className="rich-ctn">
                              <div className="message-user" >{it.user_name}：</div>
                              <div className="message-content" dangerouslySetInnerHTML={{__html: it.content}} ></div>
                            </a>
                          </Link>
                          <div className="resp-subject">
                            回复我的页面：<Link href={linkurl} ><a>{isFeedback ? '用户反馈' : it.site_name}</a></Link>
                          </div>
                        </div>
                        <div className="rich-right">
                          <span className="time">{it.create_time}</span>
                        </div>
                      </li>
                    })
                  }
                </ul>
              </div>
              <Pagination 
                total={total} current={pageIndex} pageSize={10}
                showQuickJumper 
                size="small" 
                onChange={this.onChange} 
              />
            </div>
        }
      </div>
	  );
	}
}


const mapDispatchToProps = dispatch => {
  return {
    setReplyNum (num) {
      return dispatch(setReplyNum(num))
    },
  };
};

export default connect(null, mapDispatchToProps)(MessageMng);

