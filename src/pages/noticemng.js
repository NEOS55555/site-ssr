import React, { Component, Fragment } from 'react'
import dynamic from 'next/dynamic'
import RightComp from '@/commonComp/RightComp'
// import NoticeMng from '@/components/NoticeMng'

const NoticeMng = dynamic(
  () => import('@/components/NoticeMng'),
  { ssr: false }
)

function TempComp () {
	return <NoticeMng />
}

class HomePage extends Component {
  render () {
    return <Fragment>
     <TempComp />
     <RightComp />
    </Fragment>
  }
}

export default HomePage;
