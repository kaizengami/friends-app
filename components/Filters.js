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
    const friends = document.querySelectorAll('.friend');
    friends.forEach( friend => {
        console.log(friend);
    });
}

const render = () => {
    const container = document.getElementById('container');
    container.insertAdjacentHTML('beforeend', filtersHtml());
    addClickEvent();
}

export default render;