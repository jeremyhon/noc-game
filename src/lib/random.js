import random from 'lodash/random'

const randomIndex = (array) => array[random(array.length - 1)]

export default randomIndex
