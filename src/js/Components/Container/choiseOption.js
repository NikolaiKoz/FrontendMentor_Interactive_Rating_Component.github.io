/**
 * @author: Vallejos Jose Luis.
 * @function: choiseOption
 * @name: choiseOption
 * @description: This function first remove the class 'isActive' from all the buttons and then add the class 'isActive' to the button that was clicked.
 * @param: none
 * @return: none
 */

import { thankYou } from "./thankYou";

export const choiseOption = () => {
  /**
   * @name: allBtn
   * @description: This variable is a NodeList of all the buttons.
   * @type: NodeList
   */
  const allBtn = document.querySelectorAll(".Card-ratio-btn");

  let choise = "";

  allBtn.forEach((btn) => {
    btn.addEventListener("click", () => {
      allBtn.forEach((btn) => {
        btn.classList.remove("isActive");
      });
      btn.classList.add("isActive");
      /**
       * @name: choise
       * @description: This variable is the value of the button that was clicked and is converted to a number.
       * @type: number
       * @example: 1, 2, 3, 4, 5
       * @default: ''
       * @see: thankYou.js
       */
      choise = parseInt(btn.children[0].textContent);
      thankYou(choise);
    });
  });
};
