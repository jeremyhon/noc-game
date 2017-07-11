import React from 'react'
import { shallow } from 'enzyme'
import { Provider } from 'react-redux'

import generateCompany from 'lib/company'
import { muiMount, muiShallow, simulateTouchTap } from '../testUtils'
import { startStore } from '../store'
import ConnectedDrawer, { Drawer } from './Drawer'

let component

describe('Unconnected Drawer', () => {
  let props

  beforeEach(() => {
    props = {
      companies: [generateCompany()],
      deselectIntern: jest.fn(),
      selectedInternId: ""
    }
  })

  it("matches the snapshot", () => {
    component = shallow(<Drawer {...props} />)
    expect(component).toMatchSnapshot()
  })

  it("closes the drawer", () => {
    component = muiMount(<Drawer {...props} />)
    component.instance().changeDrawerState(false, 'swipe')
    expect(props.deselectIntern).toHaveBeenCalled()
  })
})

describe('ConnectedDrawer', () => {
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
