import React, { Component } from 'react';
import { getRecomdList } from '@/store/actions'
// import { Link } from "react-router-dom";
import Link from 'next/link'
import { imgUrl } from '@/common/url'
import routerMap from '@/common/router'

class RecomdList extends Component {
  state = {
    list: []
  }
  componentDidUpdate (prevProps) {
    const { catalog: prevCatalog } = prevProps;
    const { catalog } = this.props;
    if (prevCatalog !== catalog) {
      this.getRecomdList();
      // console.log(siteId, catalog)
    }
  }
  componentDidMount () {
    this.getRecomdList();
  }
  getRecomdList = () => {
    const { catalog } = this.props;
    getRecomdList({catalog}).then(res => {
      // console.log(res)
      this.setState({
        list: res.result.list
      })
    })
  }

	render() {
    const { list } = this.state;
    return (
      <div className="recomd-wrapper">
        <div className="title">相关推荐</div>
        <ul>
          {
            list.map(it => 
              <li key={it._id}>
                <Link href={routerMap.sitedetail+'?id='+it._id}>
                  <a title={`查看“${it.name}”详情`}>
                    <p>{it.name}</p>
                    <div className="img-ctn">
                      <img src={imgUrl+it.img} alt="图片"/>
                    </div>
                  </a>
                </Link>
              </li>
            )
          }
        </ul>

      </div>
	  );
	}
}


export default RecomdList;
