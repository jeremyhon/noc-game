import { skills } from './data'
import { zipObject, map, random } from 'lodash'

const generateSkills = () => zipObject(skills, map(skills, () => random(10)))

export default generateSkills
