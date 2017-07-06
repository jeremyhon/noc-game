import React from 'react'
import { shallow } from 'enzyme'

import Card from './Card'

it("matches the snapshot", () => {
  const component = (
    <Card title="hello"
      subtitle="world"
      skills={{ business: 1, design: 2, technical: 3 }}
    />
  )
  expect(shallow(component)).toMatchSnapshot()
})
