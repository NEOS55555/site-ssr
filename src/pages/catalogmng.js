import React, { Component, Fragment } from 'react'
import RightComp from '@/commonComp/RightComp'
import CatalogMng from '@/components/CatalogMng'

class HomePage extends Component {
  render () {
    return <Fragment>
     <CatalogMng />
     <RightComp />
    </Fragment>
  }
}

export default HomePage;
