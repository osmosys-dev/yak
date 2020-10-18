// exporting list of collections
export const CONVERSATIONS = {
  1:{
    id: 1,
    flashcardId:10,
    seqNo:1,
    sentence:'Ki to p cui ?',
    translated: 'What are you cooking ?'
  },
  2:{
    id: 2,
    flashcardId:7,
    seqNo:2,
    sentence:'Comment allez vous?',
    translated: 'How are you doing sir/madam?'
  },
  3:{
    id: 3,
    flashcardId:4,
    seqNo:3,
    sentence:'Ile kosztuje ?',
    translated: 'How much it costs ?'
  },
  4:{
    id: 4,
    flashcardId:1,
    seqNo:4,
    sentence:'Czego pan nie ma ?',
    translated: 'What dont you have sir ?'
  },
}
export const FLASHCARDS = {
  //Polski
  1: {
    id: 1,
    languageId: 1,
    seqNo: 1,
    category: 'CONVERSATION',
    confident: false,
    dateAdded:'Sat 14-03-2020',
  },
  2: {
    id: 2,
    languageId: 1,
    seqNo: 2,
    category: 'VERB',
    confident: false,
    dateAdded:'Sat 14-03-2020',
  },
  3: {
    id: 3,
    languageId: 1,
    seqNo: 3,
    category: 'VOCABULARY',
    confident: false,
    dateAdded:'Sat 4-03-2020',
  },
  4: {
    id: 4,
    languageId: 1,
    seqNo: 4,
    category: 'CONVERSATION',
    confident: false,
    dateAdded:'Sat 4-03-2020',
  },

  // Francais
  5: {
    id: 5,
    languageId: 2,
    seqNo: 1,
    category: 'VERB',
    confident: false,
    dateAdded:'Sat 14-03-2020',
  },
  6: {
    id: 6,
    languageId: 2,
    seqNo: 2,
    category: 'VOCABULARY',
    confident: false,
    dateAdded:'Sat 14-03-2020',
  },
  7: {
    id: 7,
    languageId: 2,
    seqNo: 3,
    category: 'CONVERSATION',
    confident: false,
    dateAdded:'Sat 14-03-2020',
  },

  // Kreol
  8: {
    id: 8,
    languageId: 3,
    seqNo: 1,
    category: 'VERB',
    confident: false,
    dateAdded:'Sat 14-03-2020',
  },
  9: {
    id: 9,
    languageId: 3,
    seqNo: 2,
    category: 'VOCABULARY',
    confident: false,
    dateAdded:'Sat 14-03-2020',
  },
  10: {
    id: 10,
    languageId: 3,
    seqNo: 3,
    category: 'CONVERSATION',
    confident: false,
    dateAdded:'Sat 14-03-2020',
  },
  
};
export const LANGUAGES: any= {
  1: {
    id: 1,
    name: 'Polski',
    conversation: 10,
    vocabulary: 20,
    verb: 12,
    lastAdded: '2 days ago',
    url: 'polski',
    seqNo: 1,
    flashcardsCount: 4,
  },
  2: {
    id: 2,
    name: 'Francais',
    conversation: 33,
    vocabulary: 45,
    verb: 24,
    lastAdded: '4 days ago',
    url: 'francais',
    seqNo: 2,
    flashcardsCount: 3,
  },
  3: {
    id: 3,
    name: 'Kreol',
    conversation: 56,
    vocabulary: 12,
    verb: 48,
    lastAdded: '6 days ago',
    url: 'kreol',
    seqNo: 3,
    flashcardsCount: 3,
  },

};
export const MEDIA = {
  1:{
  id: 1,
  flashcardId:1,
  seqNo:2,
  recording:true,
  recordingFile:'local file or url for dummy and svg for empty',
  images:true,
  imagesCollection:['local file #1 or url for dummy and svg for empty', 
  'local file #2 or url for dummy','local file #3 or url for dummy'],
  },
  2:{
  id: 2,
  flashcardId:2,
  seqNo:2,
  recording:true,
  recordingFile:'local file or url for dummy and svg for empty',
  images:true,
  imagesCollection:['local file #1 or url for dummy and svg for empty', 
  'local file #2 or url for dummy','local file #3 or url for dummy'],
  },
}
export const USERS = {
  1: {
    id: 1,
    email: 'user1@yak.io',
    password: 'password',
    roles: ['USER']
  },
  2: {
    id: 2,
    email: 'user2@yak.io',
    password: 'password',
    roles: ['USER']
  }
};
export const VERBS = {
  1:{
    id: 1,
    flashcardId:8,
    seqNo:1,
    verb:'Manzer',
    translated: 'To eat',
    pastTense:['Mo ti p manz', 'To ti p manz', 'Li ti p manz', 'Nou ti p manz', 'Zot ti p manz' ],
    pastSentence: 'To ti p manz boulet lot zour la !',
    presentTense:['Mo manz', 'To manz', 'Li manz', 'Nou manz', 'Zot manz' ],
    presentSentence:'Nou manz diri tou le zour.',
    futureTense:['Mo pou manz', 'To pou manz', 'Li pou manz', 'Nou pou manz', 'Zot pou manz' ],
    futureSentence:'Li pou manz pom taler.'
  },
  2:{
    id: 2,
    flashcardId:5,
    seqNo:2,
    verb:'Partir',
    translated: 'To go',
    pastTense:['Je partais', 'Tu partais', 'Il partait', 'Elle partait', 'Nous partions', 'Vous partiez', 'Ils partaient', 'Elles partaient' ],
    pastSentence: 'Autrefois, je partais a la montagne.',
    presentTense:['Je pars', 'Tu pars', 'Il part', 'Elle part', 'Nous partons', 'Vous partez', 'Ils partent', 'Elles partent'  ],
    presentSentence:'Elles partent souvent a la messe.',
    futureTense:['Je partirais', 'Tu partiras', 'Il partira', 'Elle partira', 'Nous partirons', 'Vous partirez', 'Ils partiront', 'Elles partiront' ],
    futureSentence:'Vous partirez tres tot demain matin.'
  },
  3:{
    id: 3,
    flashcardId:2,
    seqNo:3,
    verb:'Kupić',
    translated: 'To buy',
    pastTense:['Ja kupię', 'Ty kupisz', 'On kupi', 'Ona kupi', 'Ono kupi', 'My kupimy', 'Wy kupicie', 'Oni kupią','One kupią'],
    pastSentence: 'Czy Pan kupi to owoc?',
    presentTense:['Ja kupię', 'Ty kupisz', 'On kupi', 'Ona kupi', 'Ono kupi', 'My kupimy', 'Wy kupicie', 'Oni kupią','One kupią'],
    presentSentence:'Czy Pan kupi to owoc?',
    futureTense:['Ja kupię', 'Ty kupisz', 'On kupi', 'Ona kupi', 'Ono kupi', 'My kupimy', 'Wy kupicie', 'Oni kupią','One kupią'],
    futureSentence:'Czy Pan kupi to owoc?'
  },

}
export const VOCABULARIES = {
  1:{
    id: 1,
    flashcardId:9,
    seqNo:1,
    word:'Sime',
    translated: 'Road/Roads',
    plural: 'Simes',
    sentence:'Sa sime la al laba mem',
    synonyms:['koltar','chemin'],
    declination:[null],
  },
  2:{
    id: 2,
    flashcardId:6,
    seqNo:2,
    word:'Gaspillage',
    translated: 'Waste',
    plural: 'Gaspillages',
    sentence:'Il ne faut pas faire du gaspillage',
    synonyms:['Inutile','Inefficient'],
    declination:[null],
  },
  3:{
    id: 3,
    flashcardId:3,
    seqNo:3,
    word:'Owoc',
    translated: 'Fruit',
    plural: 'Owoce',
    sentence:'Ten owoc jest bardzo pyszny',
    synonyms:[null],
    declination:['Owoców'],
  },
}
