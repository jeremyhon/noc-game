import React from 'react'
import { shallow } from 'enzyme'

import InternCard from './InternCard'

it("matches the snapshot", () => {
  expect(shallow(<InternCard />)).toMatchSnapshot()
})
