import React, { Component, Fragment } from 'react'
import dynamic from 'next/dynamic'
import RightComp from '@/commonComp/RightComp'
// import eventBus from '@/common/eventBus'
// import Link from 'next/Link'
// import Feedback from '@/components/Feedback'

const Feedback = dynamic(
  () => import('@/components/Feedback'),
  { ssr: false }
)

function TempComp () {
	return <Feedback></Feedback>
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
