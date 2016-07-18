export default class CreateFormView {
  constructor(el) {
    this.el = el;
    console.log(this.name);



    this.el.querySelector('.form-container__inner').addEventListener('submit', () => {
      const puppyData = {
        name: this.el.querySelector('.top-nav__form-name').value,
        age: this.el.querySelector('.top-nav__form-age').value,
        url: this.el.querySelector('.top-nav__form-url').value,
        profile: this.el.querySelector('.top-nav__form-profile').value
      }
      event.preventDefault();

      fetch(`http://tiny-tn.herokuapp.com/collections/mhf-puppy`, {
          method: 'post',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(puppyData)
        }).then((res) => res.json())
        .then((data) => {
          console.log(data);
          this.el.querySelector('.top-nav__form-name').value = '';
          this.el.querySelector('.top-nav__form-age').value = '';
          this.el.querySelector('.top-nav__form-url').value = '';
          this.el.querySelector('.top-nav__form-profile').value = '';


        });

    })

  }
}
