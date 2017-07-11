import React from 'react'
import { shallow, mount } from 'enzyme'

import { muiMount } from '../testUtils'
import store from '../store'
import ConnectedCompany, { Company } from './Company'

let component

describe('Unconnected Company', () => {
  let props

  beforeEach(() => {
    props = {
      companies: [],
      populateCompanies: jest.fn()
    }
  })

  it("matches the snapshot", () => {
    component = shallow(<Company {...props} />)
    expect(component).toMatchSnapshot()
  })
})

describe('ConnectedCompany', () => {
  beforeEach(() => {

  })

  it("matches the snapshot", () => {
    component = shallow(<ConnectedCompany store={store}/>)
    expect(component).toMatchSnapshot()
  })
})
