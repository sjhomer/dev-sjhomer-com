import React from 'react'
import {ComponentMeta, ComponentStory} from '@storybook/react'
import Article from "@src/templates/Article"
import articleData from "./article.samples"

const Comp = Article

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Pages/article',
  component: Comp, // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: {control: 'color'},
  },
} as ComponentMeta<typeof Comp>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Comp> = (args) => <Comp {...args} />

export const article = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
article.args = {
  // @ts-ignore
  data: articleData
}