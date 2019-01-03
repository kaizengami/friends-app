import { friendsData } from './Data.js';

const filtersHtml = () => {
    return `<div class="filters-container">
                <input id="search" autocomplete="off" placeholder="Search...">
                <div class="sorting-buttons">
                    <button id="age" value="age">age</button>
                    <button id="reset" value="reset">reset</button>
                    <button id="name" value="name">a-z/z-a</button>
                </div>
            </div>`;
}

const addClickEvent = () => {
    const sorting_buttons = document.getElementsByClassName("sorting-buttons")[0];
    sorting_buttons.onclick = (e) => {
        switch (e.target.value) {
            case 'age':
                console.log(e.target.value);
                sortAge();
                updateDom();
                break;
            case 'reset':
                console.log(e.target.value);
                console.log(friendsData);
                break;
            case 'name':
                console.log(e.target.value);
                console.log(friendsData);
                break;
        }
    }
}

const sortAge = () => {
    friendsData.sort((a, b) => {
        return a.age - b.age;
    }); 
}

const updateDom = () => {
    const items_in_row = 7;
    let margin_left = 0;
    let margin_top = -180;
    for (let i = 0; i < friendsData.length; i++) {
        if (i % items_in_row === 0) {
          margin_top += 180;
          margin_left = 0;
        }
        else margin_left += 150;
        const friend_node = document.getElementById(friendsData[i].id);
        friend_node.style.marginLeft = `${margin_left}px`;
        friend_node.style.marginTop = `${margin_top}px`;
        console.log(friend_node);
    }
}

const render = () => {
    const container = document.getElementById('container');
    container.insertAdjacentHTML('beforeend', filtersHtml());
    addClickEvent();
}

export default render;