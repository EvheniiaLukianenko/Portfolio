import {LISTS} from '../mocks/lists';

export function getListData(listId = 1, pageNumber = 1, itemsPerPage = 3) {
    console.log('getListData', listId, pageNumber)
    let listRequested = LISTS.filter(i => i.id === listId)[0];
    console.log('listRequested', listRequested)

    let itemsTotal = listRequested.data.length;
    let pagesTotal = Math.ceil(itemsTotal / itemsPerPage);

    let startItemId = (pageNumber * itemsPerPage) - itemsPerPage;
    let endItemId = pageNumber * itemsPerPage;

    let returnedObj = {
        listId: listRequested.id,
        listTitle: listRequested.title,
        page: pageNumber,
        data: listRequested.data.slice(startItemId, endItemId),
        itemsTotal: itemsTotal,
        pagesTotal: pagesTotal,
    };
    console.log('returnedObj', returnedObj);
    return returnedObj;
}

export function getItem(listId, itemId) {
    let listDataRequested = LISTS.filter(i => i.id === listId)[0].data;
    return listDataRequested.filter(i => i.id === itemId)[0];
}

