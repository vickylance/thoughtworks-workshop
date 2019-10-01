interface IRule {
  [name: string]: number[];
}

const Rules: IRule = {
  "01": [3, -1],
  "10": [-1, 3],
  "00": [0, 0],
  "11": [2, 2]
};

export default Rules;
