import FILMS from '../mocks/list1';

function getList(listId) {
    return FILMS;
}

function getItem(itemId) {
    return FILMS.filter( i => i.id === itemId)[0];
}

export default getList;
// export default getItem;