import Typography from '@mui/material/Typography'
import {List} from '@web/components/grids'
import ImportantDevicesTwoToneIcon from '@mui/icons-material/ImportantDevicesTwoTone'
import MilitaryTechTwoToneIcon from '@mui/icons-material/MilitaryTechTwoTone'
import * as React from 'react'

const projectDrupalPortals = {
  title: 'Drupal + React Portals Theme',
  description: <>
    <Typography gutterBottom>
      {`Support the team in architecting and guiding them on alternative ways to leverage React within Drupal’s more ridged theme system.`}
    </Typography>
    <List
      items={[
        {
          label: 'Tech',
          caption: 'Twig, React, Redux, NodeJs, Drupal, Storybook, JSONAPI',
          icon: <ImportantDevicesTwoToneIcon />,
        },
        {
          label: 'Skills & Services',
          caption: 'Technical Architecture, Mentorship',
          icon: <MilitaryTechTwoToneIcon />,
        },
      ]}
    />
  </>
  ,
  modalContent: <>
    <Typography gutterBottom>
      {`Drupal theming, while improved vastly from 7 in Drupal 8 & 9 (good buy SQL in templates, yup!), it still has a “Drupal” way to go about things. While they’ve officially dropped the requirement for jQuery to be used in your front-end themes (which, still enables if viewing as an admin user because of behaviours for such things), out of the box the theme’s don’t have a simple way to just roll your own JS framework alongside what Drupal offer. `}
    </Typography><Typography gutterBottom>
    {`There are valiant attempts with Drupal modules, or dedicated opinionated themes like Emulsify, which break the mold, but they can be a lot to leverage and maintain.`}
  </Typography><Typography gutterBottom>
    {`Not having a clean way to “just use React” in basing off communities themes, we decided we need a more direct avenue. As Portals stabilized and have been working well in React for some time, we ventured to establish the means to integrate this into Drupal in as seamless as possible. With the nature of Portals, it gives us the opportunity to bind a React App to the root of Drupal pages, then spawn React on specific elements across the DOM. To keep the Drupal side simple as well, we opted to make use of Drupal’s Block system to help place what unique React elements we want to make use of.`}
  </Typography><Typography gutterBottom>
    {`From anything as small as a menu section, or part of a page, to full SPAs sometimes, we could establish our desired goals reasonably. And the bonus having the root level App is we can strap on a shared state service like Redux to talk between our portals effortlessly.`}
  </Typography><Typography gutterBottom>
    {`The key to making this successful is separation of concerns, and keeping React container focuses while being as data agnostic as possible. This way, each Block can call on a full fledged portal component that houses everything that section handles. Wiring these up into Storybook allows us to craft these sections in isolation, and then through the theme layer, can we connect these through Blocks, and to Drupal’s JSONAPI to add meaningful interactivity. Having an established in house Drupal theme running in tandem, the portal approach is now a worth viable alternative when the situation arises for it. 👌🏻`}
  </Typography>
  </>,
}

export default projectDrupalPortals