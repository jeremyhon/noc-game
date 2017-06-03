import generateIntern from 'lib/intern'

export const addIntern = () => ({
  type: 'NEW_INTERN',
  payload: { intern: generateIntern() },
})
