interface Foo {
  hoge?: number;
  fuga: string;
}
interface Bar {
  hoge: number;
}
interface Buz {
  piyo: string;
}

type FooBar1 = Foo & Bar;
type FooBar2 = Foo | Bar;
type FooBuz1 = Foo & Buz;
type FooBuz2 = Foo | Buz;
type BarFooBuz = Bar & (Foo | Buz); 
