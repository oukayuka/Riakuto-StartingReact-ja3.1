class Bird {
  constructor(name) {
    this.name = name;
  }

  chirp() {
    console.log(`${this.name}が鳴きました`);
  }

  static explain(name) {
    console.log(`${name}は翼があって卵を生みます`);
  }
}

class FlyableBird extends Bird {
  constructor(name) {
    super(name);
  }

  fly() {
    console.log(`${this.name}が飛びました`);
  }
}

const bd1 = new Bird('ペンギン');
bd1.chirp();               // ペンギンが鳴きました
Bird.explain('カラス');    // カラスは翼があって卵を生みます

const bd2 = new FlyableBird('スズメ');    // スズメが飛びました
bd2.fly();

