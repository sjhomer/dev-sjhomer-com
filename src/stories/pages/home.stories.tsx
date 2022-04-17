import React from 'react'
import {ComponentMeta, ComponentStory} from '@storybook/react'
import IndexPage from "@src/pages"
import posts from './home.samples'

const Comp = IndexPage

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Pages/home', component: Comp, // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: {control: 'color'},
  },
} as ComponentMeta<typeof Comp>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Comp> = (args) => <Comp {...args} />

export const home = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
home.args = {
  data: {
    allMarkdownRemark: {
      nodes: posts
    }
  }
}