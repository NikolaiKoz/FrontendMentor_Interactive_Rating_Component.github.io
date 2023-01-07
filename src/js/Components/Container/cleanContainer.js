/**
 * @author: Vallejos Jose Luis.
 * @function: cleanContainer
 * @name: cleanContainer
 * @description: This function aplly the class 'isDesappear' to the container and then remove the innerHTML of the container.
 * @param: none
 * @return: none
 */

const cleanContainer = () => {
  /**
   * @name: container
   * @description: This variable is the Container of the card.
   * @type: HTMLElement
   */
  const container = document.getElementsByClassName("Container")[0];

  container.classList.add("isDesappear");

  setTimeout(() => {
    container.innerHTML = "";
  }, 500);
};
