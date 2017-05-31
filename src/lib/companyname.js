import _ from 'lodash'

const first = [
  'an',
  'ap',
  'big',
  'can',
  'dalt',
  'dam',
  'dan',
  'dento',
  'ding',
  'dom',
  'don',
  'dong',
  'fase',
  'fin',
  'trans',
  'ganz',
  'geo',
  'gogo',
  'hay',
  'indi',
  'jay',
  'kan',
  'kay',
  'key',
  'kin',
  'kon',
  'konk',
  'lam',
  'lat',
  'lexi',
  'lot',
  'mat',
  'med',
  'nam',
  'new',
  'nim',
  'onto',
  'ope',
  'open',
  'over',
  'ozer',
  'phys',
  'quad',
  'quo',
  'ran',
  'ran',
  're',
  'ron',
  'san',
  'san',
  'sao',
  'scot',
  'sil',
  'sol',
  'solo',
  'son',
  'span',
  'stan',
  'stat',
  'sub',
  'sum',
  'sun',
  'super',
  'tam',
  'tamp',
  'tan',
  'techi',
  'techno',
  'temp',
  'tin',
  'ton',
  'tough',
  'tran',
  'tres',
  'tripple',
  'tris',
  'una',
  'uni',
  'uno',
  'vaia',
  'vento',
  'via',
  'vila',
  'villa',
  'viva',
  'vol',
  'voya',
  'zan',
  'zam',
  'zath',
  'zen',
  'zer',
  'zim',
  'zon',
  'zot',
  'zum',
  'zumma',
  'zun',
]

const any = [
  'bam',
  'con',
  'cone',
  'fase',
  'fax',
  'in',
  'is',
  'it',
  'la',
  'lam',
  'zap',
  'zim',
  'an',
  'ap',
  'be',
  'bio',
  'can',
  'dam',
  'dan',
  'din',
  'do',
  'dom',
  'don',
  'dub',
  'fin',
  'geo',
  'go',
  'hat',
  'hot',
  'jay',
  'ji',
  'jo',
  'joy',
  'kay',
  'key',
  'lam',
  'lat',
  'lot',
  'mat',
  'med',
  'nam',
  'nim',
  'ot',
  'oze',
  'quad',
  'quo',
  'ran',
  'ran',
  'red',
  'rem',
  'ron',
  'run',
  'san',
  'sao',
  'sil',
  'sol',
  'solo',
  'son',
  'sun',
  'ta',
  'ta',
  'tam',
  'tan',
  'tin',
  'ton',
  'trax',
  'trip',
  'una',
  'uni',
  'uno',
  'via',
  'viva',
  'vol',
  'za',
  'zam',
  'zar',
  'zat',
  'zen',
  'zim',
  'zo',
  'zoo',
  'zoom',
  'zoz',
  'zum',
  'zun',
]

const end = [
  'dax',
  'dexon',
  'dox',
  'elec',
  'ing',
  'ity',
  'kix',
  'lax',
  'lex',
  'lux',
  'nix',
  'ron',
  'tam',
  'taxon',
  'tex',
  'texon',
  'tom',
  'tone',
  'trax',
  'trix',
]

// const syllables = [...first, ...any, ...end];

const words = [
  'ace',
  'alpha',
  'base',
  'beta',
  'bio',
  'black',
  'blue',
  'book',
  'books',
  'can',
  'cane',
  'care',
  'city',
  'clean',
  'code',
  'core',
  'data',
  'double',
  'drill',
  'drip',
  'duo',
  'ex',
  'exchange',
  'fan',
  'find',
  'fix',
  'flex',
  'free',
  'fresh',
  'fun',
  'ganja',
  'go',
  'gold',
  'golden',
  'good',
  'grave',
  'green',
  'groove',
  'hat',
  'hex',
  'high',
  'hot',
  'how',
  'ice',
  'ice',
  'inch',
  'indigo',
  'job',
  'jobs',
  'joy',
  'lab',
  'labs',
  'lane',
  'line',
  'math',
  'media',
  'more',
  'move',
  'phase',
  'planet',
  'plaza',
  'plus',
  'quote',
  'rank',
  'red',
  'round',
  'run',
  'sail',
  'salt',
  'silicon',
  'silver',
  'single',
  'spring',
  'stim',
  'street',
  'strong',
  'tax',
  'tech',
  'touch',
  'tree',
  'trio',
  'true',
  'trust',
  'volt',
  'way',
  'white',
  'year',
  'zone',
  'zoom',
]

const endWords = [
  'zoo',
  'com',
  'corp',
  'dex',
  'dom',
  'holding',
  'holdings',
  'house',
  'strip',
  'plex',
  'ware',
]


// (first, any, end)
// words
// endWords
// letters

// prefixes = first + any + words
// suffixes = (any + end) * 2 + words + Words + endWords + EndWords

// forms
// -----
// prefixsuffix
// prefix-suffix
// prefixanysuffix

// attach letter to name
// xName, x-name, x-Name

const prefixes = [...first, ...any, ...words]
const capitalize = (array) => _.map(array, _.capitalize)
const suffixes = [
  ...any,
  ...any,
  ...end,
  ...end,
  ...words,
  ...capitalize(words),
  ...endWords,
  ...capitalize(endWords)
]

const alphabet = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',
]
const letters = [...alphabet, ...capitalize(alphabet)]

const randomElem = (array) => array[_.random(array.length - 1)]

const generateForm = () => {
  const roll = _.random(100)
  const prefix = randomElem(prefixes)
  const suffix = randomElem(suffixes)

  if (roll < 80) {
    return `${prefix}${suffix}`
  } else if (roll < 90) {
    return `${prefix}-${suffix}`
  } else {
    const mid = randomElem(any)
    return `${prefix}${mid}${suffix}`
  }
}

const addPrePrefix = (form) => {
  const nextRoll = _.random(100)
  const letter = randomElem(letters)

  if (nextRoll < 66) {
    return _.capitalize(form)
  } else if (nextRoll < 88) {
    return form
  } else if (nextRoll < 92) {
    return `${_.lowerCase(letter)}${_.capitalize(form)}`
  } else if (nextRoll < 96) {
    return `${letter}-${form}`
  } else {
    return `${_.lowerCase(letter)}-${_.capitalize(form)}`
  }
}

export const generate = () => {
  const form = generateForm()
  const name = addPrePrefix(form)
  return name
}

const test = () => {
  console.log(_.map(_.range(100), generate))
}

window.generate = test;
