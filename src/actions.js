import generateIntern from 'lib/intern'
import generateCompany from 'lib/company'

const boilerPlateAction = (type, payload) => ({ type, payload })

export const newIntern = () => boilerPlateAction(
  'NEW_INTERN',
  { intern: generateIntern() }
)

export const newCompany = () => boilerPlateAction(
  'NEW_COMPANY',
  { company: generateCompany() },
)

export const engineTick = (time) => boilerPlateAction(
  'ENGINE_TICK',
  { time: time / window.gameDayInMilliseconds },
)
