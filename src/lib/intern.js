import { maleNames, femaleNames, lastNames, genders } from './data'
import generateSkills from './skills'
import randomIndex from './random'

const getFirstName = (gender) => {
  let firstNames;
  switch(gender) {
    case 'M':
      firstNames = maleNames
      break;
    case 'F':
    default:
      firstNames = femaleNames
  }
  return randomIndex(firstNames)
}


const generateIntern = () => {
  const gender = randomIndex(genders) //assigning gender lol
  const firstName = getFirstName(gender)
  const lastName = randomIndex(lastNames)
  const skills = generateSkills()

  return {
    name: `${firstName} ${lastName}`,
    gender,
    skills,
  }
}

export default generateIntern
