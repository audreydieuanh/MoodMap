const header = document.querySelector('header');

const headerContainer = document.createElement('div');
headerContainer.className = 'header-container';

const headerLeft = document.createElement('div');
headerLeft.className = 'header-left';

const headerRight = document.createElement('div')
headerRight.className = 'header-right'

const headerLogo = document.createElement('img');
headerLogo.src = '../logo.jpg';

const headerTitle = document.createElement('h1');
headerTitle.textContent = 'Mood Map';

headerLeft.appendChild(headerLogo);
headerLeft.appendChild(headerTitle);

const headerButton = document.createElement('Home');
headerButton.textContent = 'Home';

headerButton.addEventListener('click', function handleClick(event) {
    window.location = '/';
})

headerRight.appendChild(headerButton);
headerContainer.appendChild(headerLeft);
headerContainer.appendChild(headerRight);
header.appendChild(headerContainer);