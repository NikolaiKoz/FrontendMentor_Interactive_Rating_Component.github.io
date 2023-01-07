const cleanContainer = () => {

    document.getElementsByClassName('Container')[0].classList.add('isDesappear');

    setTimeout(() => {
        document.getElementsByClassName('Container')[0].innerHTML = '';
    }, 500);


};