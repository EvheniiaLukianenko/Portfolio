import FILMS from '../mocks/list1';
import BOOKS from '../mocks/list2';

function getList(listId) {
    if (listId === 1){
        return FILMS;
    } else if (listId === 2) {
        return BOOKS;
    }
    
}

function getItem(itemId) {
    return FILMS.filter( i => i.id === itemId)[0];
}

export default getList;
// export default getItem;