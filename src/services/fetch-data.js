<<<<<<< HEAD
import FILMS from '../mocks/list1';
import BOOKS from '../mocks/list2';

function getList(listId) {
    if (listId === 1){
        return FILMS;
    } else if (listId === 2) {
        return BOOKS;
    }
    
=======
import {LISTS} from '../mocks/list1';

export function getListData(listId = 1, pageNumber = 1, itemsPerPage = 3) {
    let listRequested = LISTS.filter(i => i.id === listId)[0];

    let itemsTotal = listRequested.data.length;
    let pagesTotal = Math.ceil(itemsTotal / itemsPerPage);

    let startItemId = (pageNumber * itemsPerPage) - itemsPerPage;
    let endItemId = pageNumber * itemsPerPage;

    return {
        listData: {listId: listRequested.id, listTitle: listRequested.title},
        page: pageNumber,
        data: listRequested.data.slice(startItemId, endItemId),
        itemsTotal: itemsTotal,
        pagesTotal: pagesTotal,
    };
>>>>>>> a314b2fec1db587fca1e489b15fef15cf5fd9d60
}

export function getItem(listId, itemId) {
    let listDataRequested = LISTS.filter(i => i.id === listId)[0].data;
    return listDataRequested.filter(i => i.id === itemId)[0];
}

