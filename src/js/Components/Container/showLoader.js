/**
 * @author: Vallejos Jose Luis.
 * @function: showLoader
 * @name: showLoader
 * @description: This function show the loader in the container.
 * @param: none
 * @return: none
 */

export const showLoader = () => {
  /**
   * @name: loader
   * @description: This variable is the structure html.
   * @type: html string
   */
  const loader = `
    <div class="Loader">
        <div class="Loader-circle"></div>
        <span class="Loader-message">Loading...</span>
    </div>
    `;

  /**
   * @name: container
   * @description: This variable is the Container of the card.
   * @type: HTMLElement
   */
  const container = document.querySelector(".Card");

  container.innerHTML = loader;
};
