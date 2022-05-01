import * as React from 'react'
import {useTheme} from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import {Separators} from '@web/components/grids'
import Box from '@mui/material/Box'
import {useGatsbyImage} from '@src/hooks'

export default function HomepageIntro() {
  const theme = useTheme()

  const portrait = useGatsbyImage({
    src: '/assets/images/sjhomer-portrait.jpg',
    alt: 'Portrait of SJ Homer',
  })

  return (
    <Box className={'homepage-bio'}>
      <Grid
        container sx={{
        mb: 4,
      }}
      >
        <Grid item xs={12} sx={{mb: 2}}>
          <Separators.PortraitSeparator />
        </Grid>
        <Grid item xs={12}>
          <Grid
            container sx={{
            textAlign: 'justify',
            mb: 4,
          }} spacing={{
            xs: 3,
            md: 8,
          }}
          >
            <Grid item xs={12} md={6}>
              <Typography variant="h5" component="div" gutterBottom>
                {`Hi, I’m Homer. Being in Web Development for almost two decades, I’ve specialized in Frontend for over half my career, and transitioned into leading teams for the past four years.`}
              </Typography>
              <Typography
                variant="subtitle1"
                gutterBottom
                marginTop={2}
                dangerouslySetInnerHTML={{__html: `<strong>Over the past six years</strong>, I have been fully remote, working with distributed teams across Canada, Europe, and India. 🌎 It has been a privilege to work with such a diverse group on many client projects, both large and small across many industries, leveraging a wide range of technologies.`}}
              />
              <Typography variant="body1" gutterBottom>
                {`While I've mastered JS, the Web never sleeps; if you blink, you might miss the mark and be playing catch up. Thankfully, I was fortunate enough to be immersed in the rising tide of Jamstack (even before it was called such), and having recently led the builds of three enterprise sites, and an application, with Gatsby.`}
              </Typography>
              <Typography variant="body1" gutterBottom>
                {`I’ve seen how freeing and flexible tools like this allow for radical approaches to consuming data and produce solutions in new and exciting ways. With my out of the box approach to data architecting, I help guide teams to get the most out of what these systems can do.`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={6} alignSelf={'center'}>
              {portrait}
            </Grid>
          </Grid>
          <Grid container>
            <Grid item xs={12}>
              <Typography variant="h5" component="h3" gutterBottom>
                Key Development Skills
              </Typography>
            </Grid>
            <Grid
              item xs={12} sx={{
              mb: 4,
              display: 'flex',
              justifyContent: 'space-around',
              flexWrap: 'wrap',
              i: {
                flex: '0 0 auto',
                fontSize: 64,
              },
            }}
            >
              Languages
              <i className="devicon-html5-plain"></i>
              <i className="devicon-css3-plain"></i>
              <i className="devicon-sass-plain"></i>
              <i className="devicon-javascript-plain"></i>
              <i className="devicon-typescript-plain"></i>
              <i className="devicon-nodejs-plain"></i>
              <i className="devicon-php-plain"></i>
              <i className="devicon-bash-plain"></i>
              Libraries/Frameworks
              <i className="devicon-jamstack-plain"></i>
              <i className="devicon-react-original"></i>
              <i className="devicon-gatsby-plain"></i>
              <i className="devicon-redux-original"></i>
              <i className="devicon-handlebars-plain"></i>
              <i className="devicon-gulp-plain"></i>
              VSCs
              <i className="devicon-bitbucket-plain"></i>
              <i className="devicon-github-plain"></i>
              DBs
              <i className="devicon-graphql-plain"></i>
              <i className="devicon-mongodb-plain"></i>
              <i className="devicon-mysql-plain"></i>
              <i className="devicon-postgresql-plain"></i>
              IDEs
              <i className="devicon-phpstorm-plain"></i>
              <i className="devicon-webstorm-plain"></i>
              <i className="devicon-atom-plain"></i>
              <i className="devicon-vscode-plain"></i>
              CMS
              <i className="devicon-drupal-plain"></i>
              <i className="devicon-wordpress-plain"></i>
              Tooling
              <i className="devicon-npm-original-wordmark"></i>
              <i className="devicon-yarn-plaink"></i>
              <i className="devicon-eslint-plain"></i>
              <i className="devicon-jest-plain"></i>
              Hosting/Cloud/Serverless
              <i className="devicon-docker-plain"></i>
              <i className="devicon-amazonwebservices-plain"></i>
              <i className="devicon-firebase-plain"></i>
              <i className="devicon-digitalocean-plain"></i>
              <i className="devicon-ssh-plain"></i>
              Design systems
              <i className="devicon-materialui-plain"></i>
              <i className="devicon-bootstrap-plain"></i>
              <i className="devicon-foundation-plain"></i>
              Design tools
              <i className="devicon-figma-plain"></i>
              <i className="devicon-storybook-plain"></i>
              <i className="devicon-gimp-plain"></i>
              Writing/Documentation
              <i className="devicon-confluence-plain"></i>
              <i className="devicon-markdown-plain"></i>
              Project Management
              <i className="devicon-jira-plain"></i>
              <i className="devicon-trello-plain"></i>
              <i className="devicon-slack-plain"></i>
              OSs
              <i className="devicon-ubuntu-plain"></i>
              <i className="devicon-apple-plain"></i>
              <i className="devicon-windows8-plain"></i>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h5" component="h3" gutterBottom>
                Career Journey
              </Typography>
              <Typography variant="body1">
                {`Before getting ahead of where I am in my career today, how one has grown to where they are is just as important as what they’ve achieved. The challenges and struggles that I’ve overcome show why rising to the occasion and pushing beyond have kept me moving always upwards in my journey through development.`}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  )
}