// eslint-disable-next-line no-unused-vars
async function fetchBreedList() {
  // eslint-disable-next-line no-undef
  const response = await fetch('https://dog.ceo/api/breeds/list/all');
  const breeds = await response.json();
  return breeds;
}

// eslint-disable-next-line no-unused-vars
function removeFromFavouriteList(key) {
  // eslint-disable-next-line no-undef
  const favouriteRow = document.getElementById(key);
  // eslint-disable-next-line no-unused-vars
  const favouriteColumn1HTML = favouriteRow.children[0];
  const favouriteColumn2HTML = favouriteRow.children[1];
  // eslint-disable-next-line no-undef
  const elem = document.querySelector(`#${key}`);
  elem.parentNode.removeChild(elem);
  // eslint-disable-next-line no-undef
  const allBreedsTable = document.getElementById('breedsTable');
  const resultHTML = `<tr id="${key}"><td>${favouriteColumn1HTML.innerHTML}</td><td>${favouriteColumn2HTML.innerHTML}</td><td>
    <button onclick="addToFavouriteList('${key}')"><span class="material-icons">favorite_border</span></button>
    </td></tr>`;
  allBreedsTable.innerHTML += resultHTML;
}

// eslint-disable-next-line no-unused-vars
function addToFavouriteList(key) {
  // eslint-disable-next-line no-undef
  const favouriteRow = document.getElementById(key);
  // eslint-disable-next-line no-unused-vars
  const favouriteColumn1HTML = favouriteRow.children[0];
  const favouriteColumn2HTML = favouriteRow.children[1];
  // eslint-disable-next-line no-undef
  const elem = document.querySelector(`#${key}`);
  // eslint-disable-next-line no-undef
  elem.parentNode.removeChild(elem);
  // eslint-disable-next-line no-undef
  const favouriteTable = document.getElementById('favouriteBreeds');
  // eslint-disable-next-line no-unused-vars
  const resultHTML = `<tr id="${key}"><td>${favouriteColumn1HTML.innerHTML}</td><td>${favouriteColumn2HTML.innerHTML}</td><td>
    <button onclick="removeFromFavouriteList('${key}')"><span class="material-icons">favorite</span></button>
    </td></tr>`;
  favouriteTable.innerHTML += resultHTML;
}

function renderBreedList(breedList) {
  // eslint-disable-next-line no-undef,no-unused-vars
  const resultTable = document.getElementById('breedsTable');
  // eslint-disable-next-line no-unused-vars
  let resultHTML = '';

  // eslint-disable-next-line no-restricted-syntax
  for (const key of Object.keys(breedList)) {
    resultHTML += `<tr id="${key}"><td>${key}</td><td>`;
    if (Array.isArray(breedList[key])) {
      // eslint-disable-next-line no-loop-func
      breedList[key].forEach((element) => {
        resultHTML += `${element}<br>`;
      });
    }
    resultHTML += `</td><td> <button onclick="addToFavouriteList('${key}')"><span class="material-icons">favorite_border</span></button></td></tr>`;
  }
  resultTable.innerHTML = resultHTML;
}

// eslint-disable-next-line no-unused-vars
function getBreedList() {
  // eslint-disable-next-line no-undef
  fetchBreedList().then((data) => {
    // eslint-disable-next-line no-use-before-define
    renderBreedList(data.message);
  }).catch((error) => {
    console.error(error);
    // TODO render error message for user
  });
}

// eslint-disable-next-line no-undef
window.getBreedList = getBreedList;
// eslint-disable-next-line no-undef
window.addToFavouriteList = addToFavouriteList;
// eslint-disable-next-line no-undef
window.removeFromFavouriteList = removeFromFavouriteList;
