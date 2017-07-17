import React from 'react'
import { shallow } from 'enzyme'
import { Provider } from 'react-redux'

import { muiMount, muiShallow, simulateTouchTap } from '../testUtils'
import { startStore } from '../store'
import ConnectedIntern, { Intern } from './Intern'
import * as actions from 'actions'

let component

describe('Unconnected Intern', () => {
  let props

  beforeEach(() => {
    props = {
      deselectIntern: jest.fn(),
      interns: [],
      populateInterns: jest.fn(),
    }
  })

  it('matches the snapshot', () => {
    component = shallow(<Intern {...props} />)
    expect(component).toMatchSnapshot()
  })
})

describe('ConnectedIntern', () => {
  let store;
  beforeEach(() => {
    store = startStore()
  })

  it('matches the snapshot', () => {
    component = muiShallow(<ConnectedIntern store={store}/>)
    expect(component).toMatchSnapshot()
  })

  describe('with provider', () => {
    beforeEach(() => {
      jest.spyOn(store, 'dispatch')
      component = muiMount(
        <Provider store={store}>
          <ConnectedIntern/>
        </Provider>
      )
      store.dispatch(actions.populateInterns(3))
    })

    it('opens the drawer', () => {
      const intern = store.getState().interns[0]
      const button = component.find('.intern-card').first().find('.match-button')
      simulateTouchTap(button)
      expect(store.dispatch).toHaveBeenCalledWith(actions.selectIntern(intern.id))
    })

    it('matches the intern correctly', () => {
      const intern = store.getState().interns[0]
      store.dispatch(actions.populateCompanies(1))
      const company = store.getState().companies[0]
      store.dispatch(actions.selectIntern(intern.id))
      const button = component.find('.drawer-card').first().find('.match-button')

      simulateTouchTap(button)

      expect(store.dispatch).toHaveBeenCalledWith(actions.matchIntern(intern.id, company.id))
      expect(component.find('.drawer-card')).not.toBePresent()
      expect(component.find('.intern-card').length).toBe(2)
    })
  })
})
