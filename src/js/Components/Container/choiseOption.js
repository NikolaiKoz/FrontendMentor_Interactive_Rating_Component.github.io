const choiseOption = () => {

    const allBtn = document.querySelectorAll('.Container-ratio-btn');

    allBtn.forEach((btn) => {
        btn.addEventListener('click', () => {
            allBtn.forEach((btn) => {
                btn.classList.remove('isActive');
            });
            btn.classList.add('isActive');
        });


    });

};

choiseOption();