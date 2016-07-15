export default class PuppyView {
  constructor(currentPup, el) {
    this.currentPup = currentPup;

    this.el = document.querySelector('.main-app');
    this.element = document.createElement('li');
    this.element.classList = ('puppy-list__item');
    this.element.innerHTML = `<div class="card-container">
    <div class="card-contianer__inner">
      <div class="card">
        <div class="card__pic-frame">
        <img src="${this.currentPup.photoUrl}" alt="" class="card__pic">
    </div>
    <div class="card__info">
        <input class="card__info-item name" value="${this.currentPup.name}"  placeholder="name" type="text">
        <input class="card__info-item age" value="${this.currentPup.age}" placeholder="age" type="text" >
        <input class="card__info-item url" value="${this.currentPup.photoUrl}" placeholder="Photo URL" type="text" >
        <input class="card__info-item profile" value="${this.currentPup.profile}"  placeholder="Profile" type="text" >
        </div>
      </div>
    </div>

</div>`;

  }

  render() {

    // console.log(this.currentPup);
    console.log('am I rendering?');
    console.log(this.currentPup);


    // this.el.appendChild(this.element);
    // this.el.querySelector('.name').value = 'hello@!@@'
  }
}
