import generateIntern from 'lib/intern'
import generateCompany from 'lib/company'

export const newIntern = () => ({
  type: 'NEW_INTERN',
  payload: { intern: generateIntern() },
})

export const newCompany = () => ({
  type: 'NEW_COMPANY',
  payload: { company: generateCompany() },
})

export const engineTick = (time) => ({
  type: 'ENGINE_TICK',
  payload: { time: time / window.gameDayInMilliseconds },
})
