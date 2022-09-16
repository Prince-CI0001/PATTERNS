let display = document.querySelector(".display");
let points = 10;
function findPatterns() {
    let minimum = document.getElementById("minimum").value;
    let maximum = document.getElementById("maximum").value;
    display.innerText = stylesPattern(minimum, maximum);
}
function total(visitedArray, next, cur, reachNext) {
    if (reachNext <= 0) {
        if(reachNext==0)
        return 1;
        else 
        return 0;
    }
    let ways = 0;
    visitedArray[cur] = true;
    for (let i = 1; i < points; i++) 
    {
        if (!visitedArray[i] && (next[i][cur] == 0 || visitedArray[next[i][cur]]))
        {
            ways += total(visitedArray, next, i, reachNext - 1);
        }
    }
    visitedArray[cur] = false;

    return ways;
}


function stylesPattern(minimumDots, maximumDots) {
    let next = new Array(points);
    for (let i = 0; i < points; i++) {
        next[i] = new Array(points);
        for (let j = 0; j < points; j++) {
            next[i][j] = 0;
        }
    }
    next[1][3] = next[3][1] = 2;
    next[7][9] = next[9][7] = 8;
    next[1][7] = next[7][1] = 4;
    next[3][9] = next[9][3] = 6;
    next[1][9] = next[9][1] = next[2][8] = next[8][2] = next[3][7] = next[7][3] = next[4][6] = next[6][4] = 5;
    let visitedArray = new Array(points);
    let ways = 0;
    for (let i = minimumDots; i <= maximumDots; i++) {
        ways += 4 * total(visitedArray, next, 1, i - 1);
        ways += 4 * total(visitedArray, next, 2, i - 1);
        ways += total(visitedArray, next, 5, i - 1);
    }
    return ways;
}


