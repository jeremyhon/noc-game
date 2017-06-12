import React from 'react'
import { shallow } from 'enzyme'

import SkillsContainer from './SkillsContainer'

it("matches the snapshot", () => {
  expect(shallow(<SkillsContainer />)).toMatchSnapshot()
})
