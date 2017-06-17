import React from 'react'
import { shallow } from 'enzyme'

import ConnectedIntern, { Intern } from './Intern'

it("matches the snapshot", () => {
  expect(shallow(<Intern />)).toMatchSnapshot()
})
