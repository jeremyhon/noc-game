import { firstNames, lastNames } from './names'
import _ from 'lodash'

const genders = ['M', 'F']

const skills = ['technical', 'business', 'design']

//max is exclusive
const getRandomInt = (min, max) => {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min)) + min
}

const randomElem = (array) => {
  return array[getRandomInt(0, array.length)]
}

const generateSkills = () => {
  return _.zipObject(skills, skills.map(() => getRandomInt(0, 11)))
}

export const generate = () => {
  const firstName = randomElem(firstNames)
  const lastName = randomElem(lastNames)
  const gender = randomElem(genders) //assigning gender lol
  const skills = generateSkills()

  return {
    name: `${firstName} ${lastName}`,
    gender,
    skills,
  }
}
