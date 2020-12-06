const rowColDiv: HTMLElement = document.getElementById('rowColDiv') as HTMLElement;
const composerDiv: HTMLElement = document.getElementById('composerDiv') as HTMLElement;
const colInp: HTMLInputElement = document.getElementById('colInput') as HTMLInputElement;
const rowInp: HTMLInputElement = document.getElementById('rowInput') as HTMLInputElement;
const createBtn: HTMLElement = document.getElementById('createBtn') as HTMLElement;
const matrixTbl: HTMLTableElement = document.getElementById('matrixTbl') as HTMLTableElement;


let rowNum: number;
let colNum: number;

createBtn.addEventListener('click', () => {
    // Get the input
    rowNum = parseInt(rowInp.value);
    colNum = parseInt(colInp.value);
    
    // Hide the form and show the matrix population dic
    rowColDiv.hidden = true;
    composerDiv.hidden = false;
    
    composeMatrix(colNum, rowNum);
});

const composeMatrix = (rowNum: number, colNum: number) => {
    
    for (let row = 0; row < rowNum; row++) {
        const rowElem = matrixTbl.appendChild(document.createElement('tr'));
        for (let col = 0; col < colNum; col++) {
            const cellElem = rowElem.appendChild(document.createElement('td'));
            const inputElem = cellElem.appendChild(document.createElement('input'));
            inputElem.id = row + '+' + col;
        }
    }
};