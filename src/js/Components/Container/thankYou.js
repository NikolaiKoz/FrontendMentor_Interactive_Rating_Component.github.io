import { cleanContainer } from "./cleanContainer";
/**
 * @author: Vallejos Jose Luis.
 * @function: thankYou
 * @name: thankYou
 * @description: This function show the message of thank you and show the rating.
 * @param {number} choise
 * @return: none
 */
export const thankYou = (choise) => {
  /**
   * @name: choiseValue
   * @description: This variable is the structure html of the message of thank you and another message if the user don't select an option.
   * @type: html string
   */
  let choiseValue = "";

  if (choise) {
    choiseValue = choise;
    choiseValue = `
        <section class="Thanks">
        <figure class="Thanks-imgContainer">
          <img class="Thanks-imgContainer-img"
          src="./assets/icons/illustration-thank-you.svg" alt="Thank you img">
          <figcaption class="Thanks-titleImg">You selected ${choise} out of 5</figcaption>
        </figure>
        <h2 class="Thanks-title">Thank you!</h2>
        <p class="Thanks-text">  We appreciate you taking the time to give a rating. If you ever need more support,
          don’t hesitate to get in touch!</p>
      </section>
    </section>
        `;
  } else {
    choiseValue = `
    <p class="Card-errorMessage">You must select an option!</p>
    `;
  }

  /**
   * @name: sumbitBtn
   * @description: This variable is the button of submit.
   * @type: HTMLElement
   */
  const sumbitBtn = document.querySelector(".Card-submitBtn");

  sumbitBtn.addEventListener("click", () => {
    cleanContainer();

    setTimeout(() => {
      document.querySelector(".Card").innerHTML = choiseValue;
      setTimeout(cleanContainer, 3000);
    }, 1000);

    setTimeout(() => {
      window.location.reload();
    }, 7000);
  });
};
