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

  it("generates new companies on startup", () => {
    component = mount(<Company {...props} />)
    expect(props.populateCompanies).toHaveBeenCalled()
  })
})

describe('ConnectedCompany', () => {
  beforeEach(() => {

  })

  it("matches the snapshot", () => {
    component = shallow(<ConnectedCompany store={store}/>)
    expect(component).toMatchSnapshot()
  })

  it("generates new companies on startup", () => {
    jest.spyOn(store, 'dispatch')
    component = muiMount(<ConnectedCompany store={store} />)
    expect(store.dispatch).toHaveBeenCalledWith({
      type: 'POPULATE_COMPANIES',
      payload: expect.anything(),
    })
    expect(component.find('CompanyCard')).toBePresent()
  })
})
