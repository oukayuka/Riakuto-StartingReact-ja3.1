type ScaleType = 'length' | 'speed' | 'time' | 'volume' | 'weight';

type Scale = {
  figure: number;
  unit: string;
  scaleType: ScaleType;
};

type AnotherScale = Scale;
