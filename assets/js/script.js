const sectionHowDid = document.querySelector('.how-did');

const cardBtn = document.querySelectorAll('.card-btn');

const submitBtn = document.querySelector('.submit-btn');

const sectionSelected = document.querySelector('.selected');

let valueSelected = null;

cardBtn.forEach(buttons => {

    buttons.addEventListener('click', () => {

        console.log(buttons.value);

        valueSelected = buttons.value;

    });

});

submitBtn.addEventListener('click', () => {

    const numberSelected = document.querySelector('.value-selected');

    if (valueSelected != null) {
        
        sectionHowDid.style.display = "none";
    
        sectionSelected.style.display = "flex";

        numberSelected.innerHTML = `${valueSelected}`;

    } 

});
