import { friendsData } from './Data.js';

const generateFriendsHtml = () => {
    const FRIENDS_LIST = friendsData;
    const items_in_row = 7;
    let margin_left = 0;
    let margin_top = -180;
    console.log(FRIENDS_LIST);
    let html_string = '<div class="friends-list">';
    for (let i = 0; i < FRIENDS_LIST.length; i++) {
      if (i % items_in_row === 0) {
        margin_top += 180;
        margin_left = 0;
      }
      else margin_left += 150;
      html_string += `<div class="friend" id="${FRIENDS_LIST[i].id}" style="margin-left: ${margin_left}px; margin-top: ${margin_top}px">
                         <div class="photo" style="background-image: url('${FRIENDS_LIST[i].photo}')"></div>
                         <div class="name">${FRIENDS_LIST[i].name}</div>
                         <div class="age">${FRIENDS_LIST[i].age}</div>
                         <div class="phone">${FRIENDS_LIST[i].phone}</div>
                      </div>`;
    }
    return html_string + '</div>';
  }

const render = () => {
    const FRIENDS_LIST = generateFriendsHtml()
    const container = document.getElementById('container');
    container.insertAdjacentHTML('beforeend', FRIENDS_LIST);
}

export default render;