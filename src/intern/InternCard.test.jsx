import React from 'react'
import { shallow } from 'enzyme'

import ConnectedInternCard, { InternCard } from './InternCard'

it("matches the snapshot", () => {
  const props = {
    id: "abc",
    name: "Harry Potter",
    gender: "M",
    skills: {
      technical: 3,
      design: 2,
      business: 4,
    }
  }
  expect(shallow(<InternCard {...props} />)).toMatchSnapshot()
})

it("selects an intern")
