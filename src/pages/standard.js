import React, { Component, Fragment } from 'react'
import RightComp from '@/commonComp/RightComp'
import Standard from '@/components/Standard'

class HomePage extends Component {
  render () {
    return <Fragment>
     <Standard />
     <RightComp />
    </Fragment>
  }
}

export default HomePage;
