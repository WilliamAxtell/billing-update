import { queue } from "../controllers/billings.js";


const buildRows = () => {
    // queue.insert({ client: 'bill', billing: '100' });
    // queue.insert({ client: 'clam', billing: '200' });
    // queue.insert({ client: 'felt', billing: '300' });
    // queue.insert({ client: 'gumo', billing: '400' });
    // queue.insert({ client: 'replo', billing: '500' });
    
    let packagedRows = [];

    while (!queue.isEmpty()) {
        const rowData = queue.dequeue();
        const nextRow = [rowData.client, "", "", rowData.billing];
        packagedRows.push(nextRow);
    }

    // console.log(packagedRows);
    return packagedRows;
}

buildRows();
export { buildRows };