import React from 'react'
import { shallow } from 'enzyme'

import CompanyCard from './CompanyCard'

it("matches the snapshot", () => {
  const props = {
    name: "EVE ONLINE",
    needs: {
      business: 1,
      technical: 1,
      design: 1,
    }
  }
  expect(shallow(<CompanyCard {...props} />)).toMatchSnapshot()
})
