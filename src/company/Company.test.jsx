import React from 'react'
import { shallow } from 'enzyme'

import { providerMuiMount } from '../testUtils'
import store from '../store'
import ConnectedCompany, { Company } from './Company'
import * as actions from 'actions'

let component

describe('Unconnected Company', () => {
  let props

  beforeEach(() => {
    props = {
      companies: []
    }
  })

  it('matches the snapshot', () => {
    component = shallow(<Company {...props} />)
    expect(component).toMatchSnapshot()
  })
})

describe('ConnectedCompany', () => {
  beforeEach(() => {
    store.dispatch(actions.addNewCompany({
      id: "abcd",
      name: "Umbrella Corp",
      interns: [],
      needs: { technical: 0, business: 0, design: 0 }
    }))
  })

  it('matches the snapshot', () => {
    component = shallow(<ConnectedCompany store={store}/>)
    expect(component).toMatchSnapshot()
  })

  it('renders a matched intern', () => {
    component = providerMuiMount(<ConnectedCompany />)
    store.dispatch(actions.populateInterns(1))
    const intern = store.getState().interns[0]
    const company = store.getState().companies[0]
    store.dispatch(actions.matchIntern(intern.id, company.id))
    expect(component.text()).toMatch(intern.name)
  })
})
