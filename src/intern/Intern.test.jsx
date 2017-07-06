import React from 'react'
import { shallow, mount } from 'enzyme'
import { Provider } from 'react-redux'

import { muiMount, muiShallow, simulateTouchTap } from '../testUtils'
import { startStore } from '../store'
import ConnectedIntern, { Intern } from './Intern'

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

  it("matches the snapshot", () => {
    component = shallow(<Intern {...props} />)
    expect(component).toMatchSnapshot()
  })

  it("generates new interns on startup", () => {
    component = muiMount(<Intern {...props} />)
    expect(props.populateInterns).toHaveBeenCalled()
  })

  it("closes the drawer", () => {
    component = muiMount(<Intern {...props} />)
    component.instance().changeDrawerState(false, 'swipe')
    expect(props.deselectIntern).toHaveBeenCalled()
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

    it("generates new interns on startup", () => {
      expect(store.dispatch).toHaveBeenCalledWith({
        type: 'POPULATE_INTERNS',
        payload: expect.anything(),
      })
      expect(component.find('.intern-card')).toBePresent()
    })

    it("opens the drawer", () => {
      const button = component.find('.intern-card').first().find('.match-button')
      simulateTouchTap(button)
      expect(store.dispatch).toHaveBeenCalledWith({
        type: 'SELECT_INTERN',
        payload: expect.anything(),
      })
    })
  })
})
