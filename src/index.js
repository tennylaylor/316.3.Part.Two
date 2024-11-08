
var menuLinks = [
    {text: 'about', href: '/about'},
    {text: 'catalog', href: '#', subLinks: [
      {text: 'all', href: '/catalog/all'},
      {text: 'top selling', href: '/catalog/top'},
      {text: 'search', href: '/catalog/search'},
    ]},
    {text: 'orders', href: '#' , subLinks: [
      {text: 'new', href: '/orders/new'},
      {text: 'pending', href: '/orders/pending'},
      {text: 'history', href: '/orders/history'},
    ]},
    {text: 'account', href: '#', subLinks: [
      {text: 'profile', href: '/account/profile'},
      {text: 'sign out', href: '/account/signout'},
    ]},
  ];


const mainEl = document.querySelector('main');


mainEl.style.backgroundColor = 'var(--main-bg)';


mainEl.innerHTML = '<h1>DOM Manipulation</h1>';

// Step 4: Add a class of flex-ctr to mainEl.
mainEl.classList.add('flex-ctr');

// New code for the <nav> element manipulation
const topMenuEl = document.getElementById('top-menu');
topMenuEl.style.height = '100%';
topMenuEl.style.backgroundColor = 'var(--top-menu-bg)';
topMenuEl.classList.add('flex-around');


const topMenuLinks = topMenuEl.querySelectorAll('a');

topMenuEl.addEventListener('click', function(evt) {
  evt.preventDefault();
  if (evt.target.tagName !== 'A') return;
  console.log(evt.target.textContent);

  //==================================================
  topMenuLinks.forEach(link => {  //go through each list one at time and remove active
    link.classList.remove('active');
  });
  if (!evt.target.classList.contains('active')) {
    evt.target.classList.add('active');
  } else {
    evt.target.classList.remove('active');
  }
});

//===========================================================


const subMenuEl =document.getElementById('sub-menu'); 
subMenuEl.style.height = '100%';
subMenuEl.style.backgroundColor= 'var(--sub-menu-bg)';
subMenuEl.classList.add ('flex-around');

 



  