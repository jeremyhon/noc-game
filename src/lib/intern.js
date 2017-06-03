import Chance from 'chance'

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

const generateIntern = () => {
  const gender = randomIndex(genders) //assigning gender lol
  const name = getName(gender)
  const skills = generateSkills()

  return {
    name,
    gender,
    skills,
  }
}

export default generateIntern
