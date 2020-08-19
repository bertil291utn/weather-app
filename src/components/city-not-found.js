const cityNotFoundComponent = (() => {
  const cityNotFoundRenderPage = () => `
  <div class="city-not-found d-none">
    <div class="city-not-found-container">
      <div class="city-not-found-content">
        <h3 class="title">This city was not founded</h3>
        <p>Check again with another name, maybe is misspelled</p>
        <button class="btn primary">Check another</button>
      </div>
    </div>
  </div>
`;

  const afterRender = () => {
    const checkAnotherButton = document.querySelector('button.btn');
    const cityPage = document.querySelector('.city-not-found');
    const cardContainer = document.querySelector('.card-container');

    checkAnotherButton.addEventListener('click', () => {
      cityPage.classList.add('d-none');
      cardContainer.classList.remove('d-none');
    });
  };
  return { cityNotFoundRenderPage, afterRender };
})();

export default cityNotFoundComponent;
