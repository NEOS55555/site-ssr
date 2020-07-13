import React, { Component } from 'react';
import { getRecomdList } from '@/store/actions'
import imgurl from '@/common/url'
// import { Link } from "react-router-dom";
import Link from 'next/link'

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
  /*componentDidMount () {
    // this.getRecomdList();
  }*/
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
        <div className="title">相关推荐∵</div>
        <ul>
          {
            list.map(it => 
              <li key={it._id}>
                <Link href={'/sitedetail/'+it._id}>
                  <a>
                    <p>{it.name}</p>
                    <div className="img-ctn">
                      <img src={imgurl+it.img} alt="图片"/>
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
