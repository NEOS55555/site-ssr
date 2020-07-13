import React, { Component, Fragment } from 'react';
import Link from 'next/link'
// import defaultFace from '@/assets/images/face.png'
// import { Link } from "react-router-dom";
import { dateForNow } from '@/common/common'
// import { imgUrl } from '@/common/url'
import routerMap from '@/common/router'
import './Comment.scss'

const defaultFace = '/static/images/face.png'
class Comment extends Component {
 
  render() {
    const { data, children, notOnlyShow } = this.props;
    const { user_face, user_name, to_user_name, content, create_time, site_id } = data;

    const contentDiv = <div className="comment-content-detail" >{content}</div>
    return (
      <div className="comment-item">
        <div className="comment-box">
          <div className="comment-avatar">
            <img src={user_face ? user_face : defaultFace} alt="头像"/>
          </div>
          <div className="comment-rich">
            <div className="comment-content-author">
              <span>{user_name}</span>
              {to_user_name && <Fragment><b>回复:</b><span>{to_user_name}</span></Fragment>}
              <span className="comment-content-author-time">{notOnlyShow ? dateForNow(create_time) : create_time}</span>
            </div>
            {
              notOnlyShow ? <Link href={routerMap.sitedetail + '?id='+site_id} ><a className="underline">{contentDiv}</a></Link> : contentDiv
            }
            
            {children}
          </div>
        </div>
      </div>
    );
  }
}


export default Comment;
