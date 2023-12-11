import {Layout} from "@/components/web"
import * as Homepage from "@/components/Homepage"
import {ThemeProvider} from "@mui/material/styles"
import "devicon/devicon.min.css"
import theme from "@/theme"

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <>
          {/*<AudioPlayer src={'/assets/audio/teaser.mp3'} title={'Listen to this page'}/>*/}
          <Homepage.HomepageIntro/>
          <Homepage.HomepageBio/>
          <Homepage.HomepagePortfolio/>
          <Homepage.HomepageCreative/>
          <Homepage.HomepageCollege/>
          <Homepage.HomepageEntryJob/>
          <Homepage.HomepageIntermediateJob/>
          <Homepage.HomepageSeniorJob/>
          <Homepage.HomepageWrapup/>
        </>
      </Layout>
    </ThemeProvider>
  )
}
