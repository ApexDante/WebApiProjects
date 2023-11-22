window.onload = function () {
    initPascal(10);
};

var initPascal = function (n) {
    for (var sor = 0; sor < 10; sor++) {

        var újDiv = document.createElement('div');

        újDiv.classList.add('sor');

        document.getElementById('pascal').appendChild(újDiv);

        for (var oszlop = 0; oszlop <= sor; oszlop++) {

            var újDivszámol = document.createElement('div');

            újDivszámol.classList.add('elem');

            újDivszámol.innerHTML = faktoriális(sor) / (faktoriális(oszlop) * faktoriális(sor - oszlop));



            újDiv.appendChild(újDivszámol);

        }
    }
}

var faktoriális = function (n) {
    let er = 1;
    for (let i = 2; i <= n; i++) {
        er = er * i;
    }
    return er;
};
