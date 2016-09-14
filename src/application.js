import PuppyView from 'puppy-view';
import CreateFormView from 'create-form';
export default class ApplicationView {
  constructor(el) {
    this.el = el;

    this.data = [];
    this.el.querySelector('.top-nav__top-btn').addEventListener('click', () => {
      this.el.querySelector('.form-container').classList.toggle('form-container--active');
    });
  }
  render() {
    this.el.querySelector('.main-app').innerHTML = '';
    const components = this.data.map((item) => new PuppyView(item, this));

    components.forEach((card) => {
      this.el.querySelector('.main-app').appendChild(card.element);
      card.render();
    });
  }


  start() {
    const formView = new CreateFormView(this.el);
    return fetch('http://tiny-tn.herokuapp.com/collections/mhf-puppy')
      .then((res) => res.json())
      .then((data) => {
        this.data = data;
        this.render(data);
      });
  }

  removePuppy(puppy) {
    this.data = this.data.filter((x) => x !== puppy);
    this.render();
  }


  addPuppyData(puppy) {
    this.data = [puppy, ...this.data];
    console.log(puppy);
    this.render();
  }
  // updatePuppy(newPup) {
  //   this.data = this.data.map((d) => {
  //     if (d._id === newPup._id) {
  //       return newPup;
  //     }
  //     return d;
  //   });
  // }

}
