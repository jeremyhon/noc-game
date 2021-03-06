import _ from 'lodash'

export const genders = ['M', 'F']

export const skills = [
  'business',
  'design',
  'technical',
]

export const needs = skills

export const femaleNames = [
  "Adrienne",
  "Alma",
  "Ana",
  "Angel",
  "Ann",
  "Ashley",
  "Cathy",
  "Cecelia",
  "Dawn",
  "Deanna",
  "Dianna",
  "Eloise",
  "Elsa",
  "Faye",
  "Freda",
  "Geraldine",
  "Gertrude",
  "Jackie",
  "Jodi",
  "Josephine",
  "Julia",
  "June",
  "Karen",
  "Kate",
  "Kimberly",
  "Kristi",
  "Leigh",
  "Lila",
  "Linda",
  "Lindsey",
  "Lora",
  "Lynn",
  "Madeline",
  "Margaret",
  "Mildred",
  "Natalie",
  "Nichole",
  "Nora",
  "Paula",
  "Raquel",
  "Rita",
  "Roberta",
  "Robin",
  "Robyn",
  "Ruth",
  "Stacy",
  "Stephanie",
  "Tina",
  "Traci",
  "Wendy",
]

export const maleNames = [
  "Adam",
  "Alberto",
  "Alexander",
  "Amos",
  "Anthony",
  "Barry",
  "Bernard",
  "Boyd",
  "Brendan",
  "Brian",
  "Byron",
  "Carlton",
  "Corey",
  "Elias",
  "Ernest",
  "Francis",
  "Gilberto",
  "Harvey",
  "Jay",
  "Jeremy",
  "Jerry",
  "Jessie",
  "Jody",
  "Johnathan",
  "Johnnie",
  "Johnny",
  "Jordan",
  "Josh",
  "Leslie",
  "Luke",
  "Luther",
  "Marcus",
  "Milton",
  "Orlando",
  "Ramiro",
  "Randall",
  "Ricardo",
  "Rudy",
  "Sammy",
  "Shannon",
  "Shaun",
  "Shawn",
  "Sidney",
  "Sylvester",
  "Taylor",
  "Terrell",
  "Theodore",
  "Tomas",
  "Troy",
  "Will",
]

export const lastNames = [
  "Abdallah",
  "Abril",
  "Acoff",
  "Alverez",
  "Battey",
  "Beattie",
  "Bernardo",
  "Bosak",
  "Bruhn",
  "Captain",
  "Cartledge",
  "Chewning",
  "Dee",
  "Dolphin",
  "Dunkerson",
  "Dupree",
  "Gault",
  "Gregg",
  "Gurney",
  "Harries",
  "Iglesias",
  "Ladue",
  "Lee",
  "Licea",
  "Liebig",
  "Macey",
  "Marcil",
  "Mcclanahan",
  "Mcgarity",
  "Michaelsen",
  "Niles",
  "Normandeau",
  "Nutt",
  "Palau",
  "Pointer",
  "Pridemore",
  "Principato",
  "Redner",
  "Reller",
  "Rodas",
  "Said",
  "Stenson",
  "Stotts",
  "Switalski",
  "Tipping",
  "Trainer",
  "Violette",
  "Winkler",
  "Wong",
  "Wooldridge",
  "Zamzow",
  "Zhang",
]

export const first = [
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

export const any = [
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

export const end = [
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

export const words = [
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

export const endWords = [
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


export const alphabet = [
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

export const prefixes = [...first, ...any, ...words]

const capitalize = (array) => _.map(array, _.capitalize)

export const suffixes = [
  ...any,
  ...any,
  ...end,
  ...end,
  ...words,
  ...capitalize(words),
  ...endWords,
  ...capitalize(endWords)
]

export const letters = [...alphabet, ...capitalize(alphabet)]
