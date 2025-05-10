let disabledButtons         = document.getElementsByClassName('button--disabled');
let avatar                  = document.getElementsByClassName('avatar');
let avatarActive            = document.getElementsByClassName('avatar--active');
let menuActive              = document.getElementsByClassName('menu__link--active');
let hideBtn                 = document.getElementById('hide-btn');
let main                    = document.getElementById('main');
let menuBurger              = document.querySelector('.menu-burger');
let menu                    = document.querySelector('.menu');
let menuList                = document.getElementById('menu-list');
let usersBlock              = document.querySelector('.users');
let originalElementDeposit  = document.getElementById('deposit');

function clonedElementDeposit() {
  if(originalElementDeposit) {
    let elementDepositParent    = document.createElement('li');
    elementDepositParent.classList.add('menu__item');
    elementDepositParent.classList.add('menu__item--deposit');
    let clonedElementDeposit = originalElementDeposit.cloneNode(true);
    elementDepositParent.appendChild(clonedElementDeposit);
    menuList.appendChild(elementDepositParent);
  }
}

clonedElementDeposit();

function disabledClick(el) {
  for (var i = 0; i < el.length; i++) {
    el[i].addEventListener('click', function(event) {
      event.preventDefault();
    });
  }
}

function removeAvatarActive(el) {
  for (var i = 0; i < el.length; i++) {
    el[i].classList.remove('avatar--active');
  }
}

disabledClick(disabledButtons);
disabledClick(avatarActive);
disabledClick(menuActive);

if(hideBtn) {
  hideBtn.addEventListener('click', function() {
    main.classList.add('main--users');
    main.classList.remove('main--users-inner');
    removeAvatarActive(avatar);
    usersBlock.remove();
  });
}


if(menuBurger) {
  menuBurger.addEventListener('click', function() {
    menu.classList.toggle('menu--opened');
  });
}