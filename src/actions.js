const boilerPlateAction = (type, payload) => ({ type, payload })

export const addIntern = (intern) => boilerPlateAction(
  'ADD_INTERN',
  {intern}
)

export const addCompany = (company) => boilerPlateAction(
  'ADD_COMPANY',
  {company},
)

export const engineTick = (time) => boilerPlateAction(
  'ENGINE_TICK',
  { time: time / window.gameDayInMilliseconds },
)
