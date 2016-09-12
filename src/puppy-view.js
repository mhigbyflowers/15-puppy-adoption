'use strict';
export default class PuppyView {
  constructor(currentPup, app) {
    this.currentPup = currentPup;
    this.app = app;
    this.element = document.createElement('li');

    this.setupElement();
    this.deletePuppy();
    this.update();
    this.render();
  }

  setupElement() {
    this.element.classList = ('puppy-list__item');

    this.element.innerHTML = `
<form class="pupform">
    <div class="card-container">
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

</div>
</form>`;
  }

  render() {
    this.element.querySelector('.name').value = this.currentPup.name;
    this.element.querySelector('.age').value = this.currentPup.age;
    this.element.querySelector('.url').value = this.currentPup.photourl;
    this.element.querySelector('.card__pic').src = this.currentPup.photourl;
    this.element.querySelector('.profile').value = this.currentPup.profile;

    // this.el.appendChild(this.element);
  }

  update() {
    this.element.querySelector('.pupform').addEventListener('submit', (ev) => {
      ev.preventDefault();
      fetch(`http://tiny-tn.herokuapp.com/collections/mhf-puppy/${this.currentPup._id}`, {
        method: 'PUT',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          _id: this.currentPup._id,
          name: this.element.querySelector('.name').value,
          age: this.element.querySelector('.age').value,
          url: this.element.querySelector('.url').value,
          profile: this.element.querySelector('.profile').value,
        }),
      }).then((res) => res.json())
          .then((data) => {
            alert('puppy has been changed!');
            // this.app.updatePuppy(data);
            this.curentPup = data;
            this.render();
          });
    });
  }
    //
  deletePuppy() {
    this.element.querySelector('.delete-btn').addEventListener('click', (ev) => {
      ev.preventDefault();

      fetch(`http://tiny-tn.herokuapp.com/collections/mhf-puppy/${this.currentPup._id}`, {
        method: 'DELETE',
        body: JSON.stringify(this.element),
      }).then((res) => res.json())
        .then(() => {
          alert('Item deleted');
          this.app.removePuppy(this.currentPup);
        });
    });
  }


}
