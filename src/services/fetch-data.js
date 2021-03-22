import ITEMS from '../mocks/list1';

function getList(listId) {
    return ITEMS;
}

function getItem(itemId) {
    return ITEMS.filter( i => i.id === itemId)[0];
}

export default getList;
// export default getItem;