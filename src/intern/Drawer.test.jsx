import React from 'react'
import { Provider } from 'react-redux'

import generateCompany from 'lib/company'
import { muiMount, muiShallow } from '../testUtils'
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
    component = muiShallow(<Drawer {...props} />)
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
    component = muiShallow(<ConnectedDrawer store={store}/>)
    expect(component).toMatchSnapshot()
  })

  describe("with provider", () => {
    beforeEach(() => {
      jest.spyOn(store, 'dispatch')
      component = muiMount(
        <Provider store={store}>
          <ConnectedDrawer />
        </Provider>
      )
    })

    it("opens the drawer", () => {
      expect(component.find("Drawer").at(1).props().open).toEqual(false)

      store.dispatch({type: 'SELECT_INTERN', payload: "abc"})

      expect(component.find("Drawer")).toBePresent()
      expect(component.find("Drawer").at(1).props().open).toEqual(true)
    })
  })
})
