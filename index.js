"use strict";
var rowColDiv = document.getElementById('rowColDiv');
var composerDiv = document.getElementById('composerDiv');
var colInp = document.getElementById('colInput');
var rowInp = document.getElementById('rowInput');
var createBtn = document.getElementById('createBtn');
var matrixTbl = document.getElementById('matrixTbl');
var rowNum;
var colNum;
createBtn.addEventListener('click', function () {
    // Get the input
    rowNum = parseInt(rowInp.value);
    colNum = parseInt(colInp.value);
    // Hide the form and show the matrix population dic
    rowColDiv.hidden = true;
    composerDiv.hidden = false;
    composeMatrix(colNum, rowNum);
});
var composeMatrix = function (rowNum, colNum) {
    for (var row = 0; row < rowNum; row++) {
        var rowElem = matrixTbl.appendChild(document.createElement('tr'));
        for (var col = 0; col < colNum; col++) {
            var cellElem = rowElem.appendChild(document.createElement('td'));
            var inputElem = cellElem.appendChild(document.createElement('input'));
            inputElem.id = row + '+' + col;
        }
    }
};
