import Reflux from 'reflux';
import Actions from '../actions';
import {twoCategories} from '../fixtures/data'


module.exports = Reflux.createStore({
  listenables: [Actions],
  init() {
    this.data = twoCategories;
    this.maxItemId = 5;
    this.maxCatId = 102;
  },
  getCat(cat_id) {
    return this.data.find(cat => cat.id == cat_id);
  },
  getItem(cat_id, id) {
    cat = this.getCat(cat_id);
    if (cat) {
      console.log('searching for item ', id);
      return cat.items.find(x => x.id == id);
    } else {
      console.log('found no cat ', cat_id, id);
      return cat;
    }
  },
  addCat(cat) {
    this.data.push({
      title: cat.title,
      id: ++this.maxCatId,
      items: []
    });
    this.triggerChange(nil);
  },
  addItem(cat_id, item) {
    cat = this.getCat(cat_id);
    if (cat) {
      cat.items.push({
        title: item.title,
        done: item.done,
        id: ++this.maxItemId
      });
      this.triggerChange(cat_id);
    } else {
      console.log('add to non-existant category', cat_id);
    }
  },
  clearDone(cat_id) {
    let cat = this.getCat(cat_id);
    if (cat) {
      console.log("filtering done for category", cat_id);
      cat.items = cat.items.filter(item => !item.done);
      this.triggerChange(cat_id);
    } else {
      console.log('add to non-existant category', cat_id);
    }
  },
  toggleItem(cat_id, id) {
    let match = this.getItem(cat_id, id);
    if (match) {
      match.done = !match.done;
      this.triggerChange(cat_id);
    }
  },
  refresh() {
    // TODO: check the server in the future, now just send the state
    this.triggerChange();
  },
  updateItem(cat_id, id, title) {
    let match = this.getItem(cat_id, id);
    if (match) {
      match.title = title;
      this.triggerChange(cat_id);
    }
  },
  updateCat(cat_id, title) {
    let cat = this.getCat(cat_id);
    if (cat) {
      cat.title = title;
      this.triggerChange(cat_id);
    }
  },
  triggerChange(cat_id) {
    if (cat_id) {
      this.trigger('change', cat_id, this.getCat(cat_id));
    } else {
      for (let cat of this.data) {
        this.trigger('change', cat.id, cat);
      }
    }
  }
});
