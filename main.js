const fourthPage = document.querySelector('.fourth-page');

function startEraseGame() {
  $('#elem').wScratchPad({
    size: 35,          // The size of the brush/scratch.
    bg: './images/jm-bg.png',  // Background (image path or hex color).
    fg: './images/jm-fg.png',  // Foreground (image path or hex color).
    realtime: true,       // Calculates percentage in realitime.
    // scratchMove: move,
    cursor: 'initial' // Set cursor.
  });
}
startEraseGame();


let detect = new MobileDetect(window.navigator.userAgent);

function getRandomText() {
  if (Math.random() < 0.5) {
    return `
      Вы становитесь счастливым обладателем кофемашины и набора капсул!
          <br><br>
      Покажите это сообщение нашему менеджеру на локации и заберите свой подарок.
    `;
  }
  else {
    return `
      Вы становитесь счастливым обладателем запаса кофейных зёрен!
        <br><br>
      Покажите это сообщение нашему менеджеру на локации и заберите свой подарок.
    `;
  }
}
document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('.fourth-page').style.opacity = '1';
  setTimeout(() => {
    document.querySelector('.elem__subtitle').innerHTML = getRandomText();
  }, 700)
});
function parseQuery(queryString) {
  let query = {};
  let pairs = (queryString[0] === '?' ? queryString.substr(1) : queryString).split('&');
  for (let i = 0; i < pairs.length; i++) {
      let pair = pairs[i].split('=');
      query[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1] || '');
  }
  return query;
}

let userData;
let userChatId = '';
window.addEventListener('DOMContentLoaded', () => {
  let app = window.Telegram.WebApp;
  let query = app.initData;
  let user_data_str = parseQuery(query).user;
  let user_data = JSON.parse(user_data_str);
  userData = user_data;
  app.disableVerticalSwipes();
  app.expand();
  app.ready();
  userChatId = user_data["id"];
});