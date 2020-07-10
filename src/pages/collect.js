import React, { Component, Fragment } from 'react'
import RightComp from '@/commonComp/RightComp'
import MyCollections from '@/components/MyCollections'

class HomePage extends Component {
  render () {
    return <Fragment>
     <MyCollections />
     <RightComp isCollect />
    </Fragment>
  }
}

export default HomePage;
