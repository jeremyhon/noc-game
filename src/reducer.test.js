import reducer, { defaultState } from './reducer'

it('should reduce ENGINE_TICK', () => {
  const action = {
    type: 'ENGINE_TICK',
    payload: { time: 1 }
  }
  const newState = reducer(defaultState, action)
  expect(newState).toEqual({ ...defaultState, time: 1})
})

it('should reduce ADD_INTERN', () => {
  const action = {
    type: 'ADD_INTERN',
    payload: { intern: "intern 1" }
  }
  const newState = reducer(defaultState, action)
  expect(newState).toEqual({ ...defaultState, interns:["intern 1"]})
})

it('should prepend interns', () => {
  const action = {
    type: 'ADD_INTERN',
    payload: { intern: "intern 2" }
  }
  const expectedState = {
    ...defaultState,
    interns: ["intern 2", "intern 1"],
  }
  const newState = reducer({ ...defaultState, interns:["intern 1"]}, action)
  expect(newState).toEqual(expectedState)
})

it('should reduce ADD_COMPANY', () => {
  const action = {
    type: 'ADD_COMPANY',
    payload: { company: "company 1" }
  }
  const newState = reducer(defaultState, action)
  expect(newState).toEqual({ ...defaultState, companies:["company 1"]})
})

it('should prepend companies', () => {
  const action = {
    type: 'ADD_COMPANY',
    payload: { company: "company 2" }
  }
  const expectedState = {
    ...defaultState,
    companies: ["company 2", "company 1"],
  }
  const newState = reducer({ ...defaultState, companies:["company 1"]}, action)
  expect(newState).toEqual(expectedState)
})
