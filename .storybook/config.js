import React from 'react'
import { configure, addDecorator, addParameters } from '@storybook/react'
import theme, { ThemeContext } from '~/theme'

const req = require.context('../src/', true, /.*\.stories\.tsx?$/)
function loadStories() {
  req.keys().forEach(filename => req(filename))
}

addDecorator(storyFn => (
  <ThemeContext.Provider value={theme}>
    {storyFn()}
  </ThemeContext.Provider>
))

configure(loadStories, module)
