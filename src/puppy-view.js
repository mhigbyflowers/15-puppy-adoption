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

    // console.log(this.currentPup);
    // console.log('am I rendering?');
    // console.log(this.currentPup);

this.element.querySelector('.name').value= this.currentPup.name;
this.element.querySelector('.age').value= this.currentPup.age;
this.element.querySelector('.url').value= this.currentPup.photoUrl;
this.element.querySelector('.card__pic').src = this.currentPup.photoUrl;
this.element.querySelector('.profile').value= this.currentPup.profile;

    // this.el.appendChild(this.element);

  }
}
