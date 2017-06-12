import React from 'react'
import { shallow } from 'enzyme'

import CompanyCard from './CompanyCard'

it("matches the snapshot", () => {
  expect(shallow(<CompanyCard />)).toMatchSnapshot()
})
