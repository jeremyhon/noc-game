import React from 'react'
import { shallow } from 'enzyme'

import SkillsContainer from './SkillsContainer'

it("matches the snapshot", () => {
  const skills = {
    business: 1,
    design: 1,
    technical: 1,
    lulz: 1,
  }
  const wrapper = shallow(<SkillsContainer skills={skills} subtitle="Skills" />)
  expect(wrapper).toMatchSnapshot()
  expect(wrapper).not.toIncludeText('Lulz')
})
