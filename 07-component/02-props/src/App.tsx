import React, { FC } from 'react';
import CharacterList, { Character } from './CharacterList';
import './App.css';

const App: FC = () => {
  const characters: Character[] = [
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
  ];

  return (
    <div className="container">
      <header>
        <h1>ハイキュー!! 登場人物</h1>
      </header>
      <CharacterList school="烏野高校" characters={characters} />
    </div>
  );
};

export default App;
