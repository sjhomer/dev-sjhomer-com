import * as React from 'react'
import {PageProps} from 'gatsby'
import {Layout} from '@web/components/layout'
import {Homepage} from '@src/page'
// import {AudioPlayer} from "@web/components/media"

// markup
export default function IndexPage({data, location}: PageProps) {
  // console.log('posts', posts)

  return (<Layout title={'dev.sjhomer.com'}>
    <>
      {/*<AudioPlayer src={'/assets/audio/teaser.mp3'} title={'Listen to this page'}/>*/}
      <Homepage.HomepageIntro/>
      <Homepage.HomepageCollege/>
      <Homepage.HomepageEntryJob/>
      <Homepage.HomepageIntermediateJob/>
      <Homepage.HomepageSeniorJob/>
      <Homepage.HomepageWrapup/>
    </>
  </Layout>)
}
