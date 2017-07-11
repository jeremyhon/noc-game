import React from 'react'
import { shallow } from 'enzyme'
import { Provider } from 'react-redux'

import { muiMount, muiShallow, simulateTouchTap } from '../testUtils'
import { startStore } from '../store'
import generateIntern from '../lib/intern'
import ConnectedIntern, { Intern } from './Intern'

let component
let store

describe('Unconnected Intern', () => {
  let props

  beforeEach(() => {
    props = {
      deselectIntern: jest.fn(),
      interns: [],
      populateInterns: jest.fn(),
    }
  })

  it("matches the snapshot", () => {
    component = shallow(<Intern {...props} />)
    expect(component).toMatchSnapshot()
  })
})

describe('ConnectedIntern', () => {
  let store;
  beforeEach(() => {
    store = startStore()
  })

  it("matches the snapshot", () => {
    component = muiShallow(<ConnectedIntern store={store}/>)
    expect(component).toMatchSnapshot()
  })

  describe("with provider", () => {
    beforeEach(() => {
      jest.spyOn(store, 'dispatch')
      component = muiMount(
        <Provider store={store}>
          <ConnectedIntern/>
        </Provider>
      )
    })

    it("opens the drawer", () => {
      store.dispatch({type: 'POPULATE_INTERNS', payload: { interns: [generateIntern()] }})
      const button = component.find('.intern-card').first().find('.match-button')
      simulateTouchTap(button)
      expect(store.dispatch).toHaveBeenCalledWith({
        type: 'SELECT_INTERN',
        payload: expect.anything(),
      })
    })
  })
})
