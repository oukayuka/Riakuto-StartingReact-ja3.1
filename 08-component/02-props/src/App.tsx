import React, { FC } from 'react';
import CharacterList, { Character } from './CharacterList';
import './App.css';

const App: FC = () => {
  const characters: Character[] = [
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
    },
    {
      id: 5,
      name: '赤木剛憲',
      grade: 3,
      height: 197,
    },
  ];

  return (
    <div className="container">
      <header>
        <h1>『SLAM DUNK』登場人物</h1>
      </header>
      <CharacterList school="湘北高校" characters={characters} />
    </div>
  );
};

export default App;
