import Chance from 'chance'
import uuidv4 from 'uuid/v4'

import { genders } from './data'
import generateSkills from './skills'
import randomIndex from './random'

const chance = Chance(Math.random)

const getName = (gender) => {
  switch(gender) {
    case 'M':
      return chance.name({ gender: 'Male' })
    case 'F':
    default:
      return chance.name({ gender: 'Female' })
  }
}

export const generateIntern = () => {
  const gender = randomIndex(genders) //assigning gender lol
  const id = uuidv4()
  const name = getName(gender)
  const skills = generateSkills()

  return {
    gender,
    id,
    name,
    skills,
  }
}

export default generateIntern
