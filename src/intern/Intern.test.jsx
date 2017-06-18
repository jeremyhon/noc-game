import React from 'react'
import { shallow, mount } from 'enzyme'

import { muiMount } from '../testUtils'
import store from '../store'
import ConnectedIntern, { Intern } from './Intern'

let component

describe('Unconnected Intern', () => {
  let props

  beforeEach(() => {
    props = {
      interns: [],
      populateInterns: jest.fn()
    }
  })

  it("matches the snapshot", () => {
    component = shallow(<Intern {...props} />)
    expect(component).toMatchSnapshot()
  })

  it("generates new interns on startup", () => {
    component = mount(<Intern {...props} />)
    expect(props.populateInterns).toHaveBeenCalled()
  })
})

describe('ConnectedIntern', () => {
  beforeEach(() => {

  })

  it("matches the snapshot", () => {
    component = shallow(<ConnectedIntern store={store}/>)
    expect(component).toMatchSnapshot()
  })

  fit("generates new interns on startup", () => {
    jest.spyOn(store, 'dispatch')
    component = muiMount(<ConnectedIntern store={store} />)
    expect(store.dispatch).toHaveBeenCalledWith({
      type: 'POPULATE_INTERNS',
      payload: expect.anything(),
    })
    expect(component.find('InternCard')).toBePresent()
  })
})
