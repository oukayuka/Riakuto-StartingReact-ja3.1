interface Status {
  level: number;
  maxHP: number;
  maxMP: number;
  [additional: string]: number | string;
}

const myStatus: Status = {
  level: 99,
  job: 'Sage',
  maxHP: 999,
  maxMP: 999,
  attack: 999,
  diffence: 999,
};

console.log(myStatus);
