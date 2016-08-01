'use strict'
export default class PuppyView {
  constructor(currentPup, app) {

    this.currentPup = currentPup;
this.app=app;
    this.element = document.createElement('li');

    this.setupElement();
    this.deletePuppy();

  }

  setupElement(){
    this.element.classList = ('puppy-list__item');

    this.element.innerHTML = `<div class="card-container">
    <div class="card-contianer__inner">
      <div class="card">
        <div class="card__pic-frame">
        <img src="" alt="" class="card__pic">
    </div>
    <div class="card__info">
        <input class="card__info-item name"   placeholder="name" type="text">
        <input class="card__info-item age"  placeholder="age" type="text" >
        <input class="card__info-item url"  placeholder="Photo URL" type="text" >
        <input class="card__info-item profile"   placeholder="Profile" type="text" >
    <div class = "btn-container">
        <button class="update-btn btn">update</button>
        <button class="delete-btn btn">delete</button>
    </div>
        </div>
      </div>
    </div>

</div>`;

  }

  render() {



this.element.querySelector('.name').value= this.currentPup.name;
this.element.querySelector('.age').value= this.currentPup.age;
this.element.querySelector('.url').value= this.currentPup.url;
this.element.querySelector('.card__pic').src = this.currentPup.url;
this.element.querySelector('.profile').value= this.currentPup.profile;

    // this.el.appendChild(this.element);

  }

    deletePuppy() {
      this.element.querySelector(`.delete-btn`).addEventListener(`click`, (ev) => {
        ev.preventDefault();
      console.log(this.app);
        fetch(`http://tiny-tn.herokuapp.com/collections/mhf-puppies/${this.currentPup._id}`, {
          method: `DELETE`,
          body: JSON.stringify(this.element),
        }).then((res) => res.json())
      .then(() => {
        alert(`Item deleted`);
        this.app.removePuppy(this.currentPup._id);
      });
      });
    }

}
