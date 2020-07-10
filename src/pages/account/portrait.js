import React, { Component, Fragment } from 'react'
import RightComp from '@/commonComp/RightComp'
import Portrait from '@/components/AccountSetting/Portrait'

class HomePage extends Component {
  render () {
    return <Fragment>
     <Portrait />
     <RightComp isAccount />
    </Fragment>
  }
}

export default HomePage;
