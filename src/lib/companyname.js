import _ from 'lodash'
import { prefixes, suffixes, letters, any } from './data'
import randomIndex from './random'

const rollStandardForm = (prefix, suffix) => {
  const midRoll = _.random(100)
  const form = `${prefix}${suffix}`
  if (midRoll < 30 && form.length < 8) {
    const mid = randomIndex(any)
    return `${prefix}${mid}${suffix}`
  }
  return form
}

const rollBaseForm = () => {
  const roll = _.random(100)
  const prefix = randomIndex(prefixes)
  const suffix = randomIndex(suffixes)

  if (roll < 95) {
    return rollStandardForm(prefix, suffix)
  } else {
    return `${prefix}-${suffix}`
  }
}

const rollCapitalization = (form) => {
  const capitalizeRoll = _.random(100)
  if (capitalizeRoll < 80) {
    return _.capitalize(form)
  }
  return form
}

const rollPrependLetter = (form) => {
  const letterFormRoll = _.random(100)
  const letter = randomIndex(letters)
  if (letterFormRoll < 33) {
    return `${_.toLower(letter)}${_.capitalize(form)}`
  } else if (letterFormRoll < 66) {
    return `${letter}-${form}`
  } else {
    return `${letter}-${_.capitalize(form)}`
  }
}

const rollStartingForm = (form) => {
  const preprefixRoll = _.random(100)

  if (preprefixRoll < 90 || _.includes(form, '-')) {
    return rollCapitalization(form)
  }
  return rollPrependLetter(form)
}

export const generateCompanyName = () => {
  const form = rollBaseForm()
  const name = rollStartingForm(form)
  return name
}

const test = () => {
  console.log(_.map(_.range(100), generateCompanyName))
}

window.generate = test;
