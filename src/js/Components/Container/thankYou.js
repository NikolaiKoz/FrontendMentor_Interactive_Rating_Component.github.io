const thankYou = () => {

    const sumbitBtn = document.querySelector('.Card-submitBtn');

    sumbitBtn.addEventListener('click', () => {

        cleanContainer();

        setTimeout(() => {
            console.log('hola');
        }, 5000);

    });





};

thankYou();