class PhotographerView {
  constructor() {

    this.main = document.getElementById("main");

    this.heading = document.querySelector(".photograph-header")
    this.headingTitle = document.querySelector(".heading-name");
    this.headingText = document.querySelector('.heading-text');
    this.headingSubText = document.querySelector('.heading-sub');
    this.headingImg = document.querySelector(".heading-image");
  
    this.inputLabel = document.createElement('label');
    this.inputLabel.setAttribute('for', 'select');

    this.inputSelect = document.createElement('select');
    this.inputOption1 = document.createElement('option');
    this.inputOption2 = document.createElement('option');
    this.inputOption3 = document.createElement('option');


    // this.headerTitle.innerText = "Photographer";
    // this.heading.addEventListener("click", controller);
  }

  displayPhotographerInfo(photographer) {
    console.log(photographer);
    this.headingTitle.innerText = photographer.name
    this.headingText.innerText = photographer.city + ", " + photographer.country
    this.headingSubText.innerText = photographer.tagline
  
    this.headingImg.setAttribute('src', `../../assets/photographers/${photographer.portrait}`)
    this.headingImg.setAttribute('alt', photographer.name)
    this.headingImg.classList.add('photographer-img')

    this.inputLabel.innerText = "Sort by"
    this.inputOption1.innerText = "Popoularité"
    this.inputOption2.innerText = "Date"
    this.inputOption3.innerText = "Prix"
    this.inputSelect.appendChild(this.inputOption1)
    this.inputSelect.appendChild(this.inputOption2)
    this.inputSelect.appendChild(this.inputOption3)
    this.inputSelect.addEventListener("change", function (e) {
      console.log(e.target.value);
    }
    )


    this.heading.appendChild(this.headingTitle);
    this.heading.appendChild(this.headingText);
    this.heading.appendChild(this.headingSubText);
    this.heading.appendChild(this.headingImg);
    this.heading.appendChild(this.inputLabel);
    this.heading.appendChild(this.inputSelect);
    this.inputSelect.appendChild(this.inputOption);
  }

}

export default PhotographerView;
