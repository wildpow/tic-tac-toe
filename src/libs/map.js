/* Create a square grid using Arrays that match "game map" */
export function createSquare(height) {
    const rows = height || 3; //defaut 3x3
    const columns = height || 3;
    const field = [];
    for (let x = 0; x < rows; x++) {
        let row = [];
        for (let y = 0; y < columns; y++) {
            // set the row/column info inside slot 
            let slot = {occupied: false, symbol: '', row: x, column: y};
            row.push(slot);
        }
        field.push(row)
    }
    return field;
}