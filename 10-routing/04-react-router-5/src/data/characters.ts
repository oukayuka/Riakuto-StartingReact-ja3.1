export type Character = {
  id: number;
  name: string;
  grade: number;
  height?: number;
};

type SchoolPlayers = {
  school: string;
  players: Character[];
};

export type CharactersData = {
  [schoolCode: string]: SchoolPlayers;
};

export const charactersData: CharactersData = {
  shohoku: {
    school: '湘北高校',
    players: [
      {
        id: 1,
        name: '桜木花道',
        grade: 1,
        height: 189.2,
      },
      {
        id: 2,
        name: '流川 楓',
        grade: 1,
        height: 187,
      },
      {
        id: 3,
        name: '宮城リョータ',
        grade: 2,
        height: 168,
      },
      {
        id: 4,
        name: '三井 寿',
        grade: 3,
        height: 184,
      },
      {
        id: 5,
        name: '赤木剛憲',
        grade: 3,
        height: 197,
      },
    ],
  },
  ryonan: {
    school: '陵南高校',
    players: [
      {
        id: 6,
        name: '仙道 彰',
        grade: 2,
        height: 190,
      },
      {
        id: 7,
        name: '魚住 純',
        grade: 3,
        height: 202,
      },
      {
        id: 8,
        name: '福田吉兆',
        grade: 2,
        height: 188,
      },
      {
        id: 9,
        name: '池上亮二',
        grade: 3,
        height: 183,
      },
      {
        id: 10,
        name: '越野宏明',
        grade: 2,
        height: 174,
      },
    ],
  },
  kainan: {
    school: '海南大附属高校',
    players: [
      {
        id: 11,
        name: '牧 紳一',
        grade: 3,
        height: 184,
      },
      {
        id: 12,
        name: '清田信長',
        grade: 3,
        height: 178,
      },
      {
        id: 13,
        name: '神 宗一郎',
        grade: 2,
        height: 189,
      },
      {
        id: 14,
        name: '高砂一馬',
        grade: 3,
        height: 191,
      },
      {
        id: 15,
        name: '武藤 正',
        grade: 3,
        height: 184,
      },
    ],
  },
};
