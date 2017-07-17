import reducer, { defaultState } from 'reducer'

import * as actions from 'actions'
import { generateIntern, generateCompany } from 'lib'

it('should reduce ENGINE_TICK', () => {
  const action = {
    type: 'ENGINE_TICK',
    payload: { time: 1 }
  }
  const newState = reducer(defaultState, action)
  expect(newState).toEqual({ ...defaultState, time: 1})
})

it('should reduce ADD_NEW_INTERN', () => {
  const action = {
    type: 'ADD_NEW_INTERN',
    payload: { intern: 'intern 1' }
  }
  const newState = reducer(defaultState, action)
  expect(newState).toEqual({ ...defaultState, interns:['intern 1']})
})

it('should prepend interns', () => {
  const action = {
    type: 'ADD_NEW_INTERN',
    payload: { intern: 'intern 2' }
  }
  const expectedState = {
    ...defaultState,
    interns: ['intern 2', 'intern 1'],
  }
  const newState = reducer({ ...defaultState, interns:['intern 1']}, action)
  expect(newState).toEqual(expectedState)
})

it('should reduce ADD_NEW_COMPANY', () => {
  const action = {
    type: 'ADD_NEW_COMPANY',
    payload: { company: 'company 1' }
  }
  const newState = reducer(defaultState, action)
  expect(newState).toEqual({ ...defaultState, companies:['company 1']})
})

it('should prepend companies', () => {
  const action = {
    type: 'ADD_NEW_COMPANY',
    payload: { company: 'company 2' }
  }
  const expectedState = {
    ...defaultState,
    companies: ['company 2', 'company 1'],
  }
  const newState = reducer({ ...defaultState, companies:['company 1']}, action)
  expect(newState).toEqual(expectedState)
})

it('should match intern', () => {
  const action = actions.matchIntern('12ab', '34cd')
  const initialState = {
    ...defaultState,
    selectedInternId: '12ab',
    interns: [{...generateIntern(), id: '12ab'}],
    companies: [{...generateCompany(), id: '34cd'}]
  }
  const expectedState = {
    ...initialState,
    selectedInternId: '',
    interns: [{...initialState.interns[0], matched: true}],
    companies: [{...initialState.companies[0], interns: ['12ab']}],
  }
  const actualState = reducer(initialState, action)
  expect(actualState).toEqual(expectedState)
})
