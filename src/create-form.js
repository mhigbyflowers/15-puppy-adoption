export default class CreateFormView {
  constructor(el) {
    this.el = el;

this.form();


}

form(){
    this.el.querySelector('.form-container__inner').addEventListener('submit', (ev) => {
      // ev.preventDefault();
      const puppyData = {
        name: this.el.querySelector('.top-nav__form-name').value,
        age: this.el.querySelector('.top-nav__form-age').value,
        url: this.el.querySelector('.top-nav__form-url').value,
        profile: this.el.querySelector('.top-nav__form-profile').value
      }

      fetch(`http://tiny-tn.herokuapp.com/collections/mhf-puppy`, {
          method: 'post',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(puppyData)
        }).then((res) => res.json())
        .then((data) => {

          this.el.querySelector('.top-nav__form-name').value = '';
          this.el.querySelector('.top-nav__form-age').value = '';
          this.el.querySelector('.top-nav__form-url').value = '';
          this.el.querySelector('.top-nav__form-profile').value = '';
          this.el.querySelector('.form-container').classList.toggle('form-container--active');


        });

    })

  }

  deletePuppy() {
    this.el.querySelector(`.delete-btn`).addEventListener(`click`, () => {
    console.log('hello');
    });
  }
}
