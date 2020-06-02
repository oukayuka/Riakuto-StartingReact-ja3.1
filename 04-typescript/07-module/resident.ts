type Species = 'rabbit' | 'bear' | 'fox' | 'dog';

class Resident {
  name = '';
  age = 0;
  species: Species | null = null;
}

export { Species, Resident };
