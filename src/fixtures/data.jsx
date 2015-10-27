let oneList = [
  {
    title: "Sleep",
    done: true,
    id: 1
  },
  {
    title: "Eat",
    done: false,
    id: 2
  },
  {
    title: "Have Fun",
    done: false,
    id: 3
  }
];

let twoList = [
  {
    title: "Program",
    done: false,
    id: 4
  },
  {
    title: "Get Paid",
    done: false,
    id: 5
  },
];

let twoCategories = [
  {
    title: 'Home',
    items: oneList,
    id: 1
  },
  {
    title: 'Work',
    items: twoList,
    id: 2
  }
];


export {oneList, twoList, twoCategories}
