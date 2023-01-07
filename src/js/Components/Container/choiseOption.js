/**
 * @author: Vallejos Jose Luis.
 * @function: choiseOption
 * @name: choiseOption
 * @description: This function first remove the class 'isActive' from all the buttons and then add the class 'isActive' to the button that was clicked.
 * @param: none
 * @return: none
 */

const choiseOption = () => {

    /**
     * @name: allBtn
     * @description: This variable is a NodeList of all the buttons.
     * @type: NodeList
     */
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