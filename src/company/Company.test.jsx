import React from 'react'
import { shallow, mount } from 'enzyme'

import ConnectedCompany, { Company } from './Company'

let props
let component

beforeEach(() => {
  props = {
    companies: [],
    addCompany: jest.fn()
  }
})

it("matches the snapshot", () => {
  component = shallow(<Company {...props} />)
  expect(component).toMatchSnapshot()
})

it("generates new companies on startup", () => {
  component = mount(<Company {...props} />)
  expect(props.addCompany).toHaveBeenCalledTimes(3)
})
