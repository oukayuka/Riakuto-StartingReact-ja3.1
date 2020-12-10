type Animal = 'cat' | 'dog' | 'rabbit';
type AnimalNote = Record<Animal, string>;

const animalKanji: AnimalNote = {
  cat: '猫',
  dog: '犬',
  rabbit: '兎',
};
