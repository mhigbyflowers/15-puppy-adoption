import PuppyView from 'puppy-view';
export default class ApplicationView {
  constructor(el) {
    this.el = el;

    this.data = [];

  }
  render(data) {
    this.el.innerHTML = " ";
    const components = this.data.map((item) => new PuppyView(item));

    components.forEach((card) => {
      this.el.appendChild(card.element);
      card.render();
    })


  }
  start() {
    return fetch(`http://tiny-tn.herokuapp.com/collections/ryan-puppy`)
      .then((res) => res.json())
      .then((data) => {
        this.data = data;
        this.render(data);

      });
  }
  add() {



  }
}
