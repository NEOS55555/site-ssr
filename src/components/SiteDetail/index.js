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
  
  /*static getDerivedStateFromProps (props, state) {
    const { isCollected } = props.data;
    if (isCollected !== state.isCollected) {
    console.log(props.data)
      return {
        isCollected
      }
    }
    return null
  }*/ 
 
 
	render() {
    const { id, data: siteData={} } = this.props
    // const { isCollected } = this.state;
    // console.log(isCollected)
    return (
      <div className="site-detail main-content site-wrapper">
        <div className="site-container">
          {
            !!siteData._id 
             ? <SiteItem 
                isSystem={false} 
                onlyShow={true}
                data={siteData} 
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


export default SiteDetail;
