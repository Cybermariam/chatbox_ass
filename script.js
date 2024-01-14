// let conversation = document.querySelector('.chat-container');
// let displaySection = document.querySelector('.right-section');
// let hideContent = document.querySelector('.slider');
// let showContent = document.querySelector('.slider2');

// hideContent.addEventListener('click', function () {
//   conversation.style.display = 'none';
//   document.querySelector('body').style.backgroundColor = 'white';
// });

// showContent.addEventListener('click', function () {
//   // Toggle between 'block' and 'none' on each click
//   conversation.style.display =
//     conversation.style.display === 'none' ? 'block' : 'none';
//   if (conversation.style.display === 'none') {
//     showContent.src = 'img/arrowdown.svg';
//   } else {
//     showContent.src = 'img/arrowUp.svg';
//     displaySection.appendChild(conversation);
//     conversation.style.right = '20px';
//     conversation.style.bottom = '50px';
//   }
// });

let displayContent = document.querySelector('.slider');
let conversation = document.querySelector('.chat-container');
let rightSection = document.querySelector('.right-section');

displayContent.addEventListener('click', function () {
  if (conversation.style.display === 'none') {
    conversation.style.display = 'block';
    rightSection.appendChild(conversation);
    conversation.style.right = '20px';
    conversation.style.bottom = '60px';
    conversation.style.top = '10px';
  } else {
    conversation.style.display = 'none';
  }
});
