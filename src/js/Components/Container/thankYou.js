const thankYou = (choise) => {

    let choiseValue = '';

    if(choise){
        choiseValue = choise;
        console.log(choise);
    }

    const sumbitBtn = document.querySelector('.Card-submitBtn');

    sumbitBtn.addEventListener('click', () => {

        cleanContainer();

        setTimeout(() => {
            console.log("choiseValue:" + choiseValue);
        }, 2500);


    });





};

thankYou();