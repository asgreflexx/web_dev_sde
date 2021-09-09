// eslint-disable-next-line no-unused-vars
async function fetchImagesByBreedName(name) {
  // eslint-disable-next-line no-undef
  const url = `https://dog.ceo/api/breed/${name}/images`;
  console.log(url);
  // eslint-disable-next-line no-undef
  const response = await fetch(url);
  const imageLinks = await response.json();
  return imageLinks;
}

function renderImageSearchResults(imageLinksArray) {
  console.log('render called');
  console.log(imageLinksArray);
  // eslint-disable-next-line no-undef
  const resultTable = document.getElementById('doggosSearchResult');
  console.log(resultTable);
  let resultDoggosHTML = '';

  imageLinksArray.forEach((element) => {
    resultDoggosHTML += `${'<tr>'
    + '<td><a href="'}${element}" target="_blank">${element}</a></td><td><img src="${element}" class="doggoImage"></td></tr>`;
  });

  resultTable.innerHTML = resultDoggosHTML;
}

// eslint-disable-next-line no-unused-vars
function doggosSearch() {
  console.log('search ....');
  // eslint-disable-next-line no-undef,no-unused-vars
  const searchText = document.getElementById('doggoSearch').value;
  console.log(searchText);
  // eslint-disable-next-line no-undef
  fetchImagesByBreedName(searchText).then((data) => {
    // eslint-disable-next-line no-use-before-define
    renderImageSearchResults(data.message);
  }).catch((error) => {
    console.error(error);
    // TODO render error message for user
  });
}

// eslint-disable-next-line no-undef
window.doggosSearch = doggosSearch;
