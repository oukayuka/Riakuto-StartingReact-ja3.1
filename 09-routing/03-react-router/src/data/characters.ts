export type Character = {
  id: number;
  name: string;
  age: number;
  height?: number;
};

export type CharactersData = {
  school: string;
  players: Character[];
};

export type CharacterDirectory = {
  [schoolCode: string]: CharactersData;
};

export const characterDirectory: CharacterDirectory = {
  karasuno: {
    school: '烏野高校',
    players: [
      {
        id: 1,
        name: '日向 翔陽',
        age: 16,
        height: 162.8,
      },
      {
        id: 2,
        name: '影山 飛雄',
        age: 16,
        height: 180.6,
      },
      {
        id: 3,
        name: '澤村 大地',
        age: 18,
        height: 176.6,
      },
      {
        id: 4,
        name: '西谷 夕',
        age: 17,
      },
    ],
  },
  shiratorizawa: {
    school: '白鳥沢学園高校',
    players: [
      {
        id: 1,
        name: '牛島 若利',
        age: 18,
        height: 189.5,
      },
      {
        id: 2,
        name: '大平 獅音',
        age: 18,
        height: 182.7,
      },
      {
        id: 3,
        name: '天童 覚',
        age: 18,
        height: 187.7,
      },
      {
        id: 4,
        name: '五色 工',
        age: 17,
        height: 181.5,
      },
    ],
  },
};
