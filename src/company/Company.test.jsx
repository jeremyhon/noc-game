import React from 'react'
import { shallow, mount } from 'enzyme'

import ConnectedCompany, { Company } from './Company'

let props
let component

beforeEach(() => {
  props = {
    companies: [],
    newCompany: jest.fn()
  }
})

it("matches the snapshot", () => {
  component = shallow(<Company {...props} />)
  expect(component).toMatchSnapshot()
})

it("generates new companies on startup", () => {
  component = mount(<Company {...props} />)
  expect(props.newCompany).toHaveBeenCalledTimes(3)
})
