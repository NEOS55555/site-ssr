import React, { Component, Fragment } from 'react'
import RightComp from '@/commonComp/RightComp'
import MessageMng from '@/components/MessageMng'

class HomePage extends Component {
  render () {
    return <Fragment>
     <MessageMng />
     <RightComp />
    </Fragment>
  }
}

export default HomePage;
