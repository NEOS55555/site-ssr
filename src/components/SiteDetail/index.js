import React, { Component } from 'react';
// import { Input, Button } from 'antd';
// import { withRouter } from "react-router";
import SiteItem from '@/commonComp/SiteItem'
import { collectSite } from '@/store/actions'
// import { LOG_OVERDUE_CODE } from '@/common/constant'
import './SiteDetail.scss'
// import CommentCtn from '@/commonComp/CommentCtn'
import RecomdList from './RecomdList'
import eventBus from '@/common/eventBus'
// import { withRouter } from "next/router";
import dynamic from 'next/dynamic'

const CommentCtn = dynamic(
  () => import('@/commonComp/CommentCtn'),
  { ssr: false }
)
// import BraftEditor from 'braft-editor'

class SiteDetail extends Component {
  constructor (props) {
    super(props)
    // console.log(this.props)
    this.state = {
      siteData: {},
      isCollected: props.data.isCollected,
      // commitContent: BraftEditor.createEditorState(''),
    }
  }
  
  getDerivedStateFromProps (props, state) {
    const { isCollected } = props.data;
    if (isCollected !== state.isCollected) {
      return {
        isCollected
      }
    }
  } 
 
  collectClick = () => {
    const { data: { _id } } = this.props
    
    // this.setState({ isCollecting: true })
    const { isCollected } = this.state;
    return collectSite({_id}).then(res => {
      // console.log(res)
      this.setState({
        isCollected: !isCollected
      })
    })
  }
	render() {
    // const { id } = this.props.router.query
    const { id, data: siteData={} } = this.props
    const { isCollected } = this.state;
    return (
      <div className="site-detail main-content site-wrapper">
        <div className="site-container">
          {
            !!siteData._id 
             ? <SiteItem 
                isSystem={false} 
                onlyShow={true}
                data={siteData} 
                isCollected={isCollected}
                collectClick={this.collectClick}
              />
              : <p>非常抱歉，该网站已下架！</p>
          }
          <RecomdList siteId={id} catalog={(siteData.catalog || []).join(',')} />
          <h3 className="title" style={{marginTop: 15}} >评论</h3>
          <CommentCtn siteId={id} />
        </div>
      </div>
	  );
	}
}


export default (SiteDetail);
