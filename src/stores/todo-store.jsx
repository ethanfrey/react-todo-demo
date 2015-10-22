var Reflux = require('reflux');
var Actions = require('../actions');


let baseItems = [
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


module.exports = Reflux.createStore({
  listenables: [Actions],
  init() {
    this.data = baseItems;
    this.maxId = 3;
  },
  addItem(item) {
    this.data.push({
      title: item.title,
      done: item.done,
      id: ++this.maxId
    });
    this.triggerChange();
  },
  clearDone() {
    this.data = this.data.filter(item => !item.done);
    this.triggerChange();
  },
  toggleItem(id) {
    let match = this.data.find(x => x.id === id)
    if (match) {
      match.done = !match.done;
      this.triggerChange();
    }
  },
  refresh() {
    // TODO: check the server in the future, now just send the state
    this.triggerChange();
  },
  updateItem(id, title) {
    let match = this.data.find(x => x.id === id)
    if (match) {
      match.title = title;
      this.triggerChange();
    }
  },
  triggerChange() {
    this.trigger('change', this.data);
  }
});
