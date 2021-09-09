import './styles/style.scss';
import './styles/index.css';
// eslint-disable-next-line no-unused-vars
import homePage from './pages/home.html';
import doggosPage from './pages/doggos.html';
import aboutPage from './pages/about.html';

function openResponsiveMenu() {
  console.log('ich bin hier');
  // eslint-disable-next-line no-undef
  const x = document.getElementById('myTopnav');
  if (x.className === 'topnav') {
    x.className += ' responsive';
  } else {
    x.className = 'topnav';
  }
}

function onClickMenuItem(el) {
  console.log(homePage);
  // eslint-disable-next-line no-unused-vars,no-undef
  const navElements = document.getElementsByName('navlink');
  // eslint-disable-next-line no-param-reassign,no-return-assign
  navElements.forEach((element) => element.className = '');
  if (el.className === 'active') {
    // eslint-disable-next-line no-param-reassign
    el.className = '';
  } else {
    // eslint-disable-next-line no-param-reassign
    el.className += 'active';
  }

  // eslint-disable-next-line no-unused-vars,no-undef
  const app = document.getElementById('app');
  console.log(el.id);
  // this is the routing mechanism
  switch (el.id) {
    case 'home':
      app.innerHTML = homePage;
      break;
    case 'about':
      app.innerHTML = aboutPage;
      break;
    case 'doggos':
      app.innerHTML = doggosPage;
      break;
    default:
      app.innerHTML = homePage;
      break;
  }
}

// eslint-disable-next-line no-undef
window.openResponsiveMenu = openResponsiveMenu;
// eslint-disable-next-line no-undef
window.onClickMenuItem = onClickMenuItem;
