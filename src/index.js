
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
//=======================================================
const subMenuEl =document.getElementById('sub-menu'); 
subMenuEl.style.height = '100%';
subMenuEl.style.backgroundColor= 'var(--sub-menu-bg)';
subMenuEl.classList.add ('flex-around');
//====================================================

menuLinks.forEach(link=>{
  const linkElement= document.createElement ('a');
  linkElement.href =link.href;
  linkElement.textContent =link.text;
  topMenuEl.appendChild(linkElement);
});
function buildSubmenu(subLinks){
  subMenuEl.innerHTML ='';

  subLinks.forEach(subLink => {
    const subLinkEl = document.createElement('a');
    subLinkEl.href = subLink.href;
    subLinkEl.textContent = subLink.text;
    subMenuEl.appendChild(subLinkEl);
  });
}


//=======================================================

const topMenuLinks = topMenuEl.querySelectorAll('a');

topMenuEl.addEventListener('click', function(evt) {
  evt.preventDefault();
  if (evt.target.tagName !== 'A') return;
  console.log(evt.target.textContent);

  //==================================================
  //topMenuLinks.forEach(link => {  //go through each list one at time and remove active
   //     ^^^^^^^^^///                                      //
  document.querySelectorAll('#top-menu a').forEach(link => {
    link.classList.remove('active');
  });
  if (!evt.target.classList.contains('active')) {
    evt.target.classList.add('active');
  } else {
    evt.target.classList.remove('active');
    subMenuEl.styles.top =0;
    return;
  }


//===========================================================

const clickedLink = menuLinks.find(link => link.text === evt.target.textContent );
if (clikedLink && clickedLink.subLinks){
  subMenuEl.style.top = '100%';
  buildSubmenu(clickedLink.subLinks);
  } else {
    subMenuEl.style.top = '0';
  }
});

  