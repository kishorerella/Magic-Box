/* To Generate a  Magic Square with simple Logic
 
* A magic square of 3 is a 3*3 grid of numbers where every row,
  column and diagonal add up to the same total */
/**
 *  Suffling the numbers from 0-9 by using random to form grid format
 * @param {*} array 
 * */
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));

          //Interchanging the elements in an array
          let k =  array[j]; 
          array[j] = array[i];
          array[i] = k;
    }
}
/**
 * Create an array of digits from 1 to 9
 */
function randomGrid() {
    let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    shuffleArray(nums);
    // mapping elements into an array
    let grid = Array(3).fill().map(() => Array(3).fill());
    nums.forEach((num, i) => {
        grid[Math.floor(i/3)][i%3] = num;
    });
  
    return grid;
}

/**
 * @param {*} grid  A 2D array which represents the magic square
 * @returns  returns the sum of the elements in each line of the grid
 */
function isMagicSquare(grid) {
    let rowSum = Array(3).fill(0),
        colSum = Array(3).fill(0),
        diagonalSum = Array(2).fill(0);

// To Check Rows , Columns and Diagonal elements of the grid
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            rowSum[i] += grid[i][j];
            colSum[j] += grid[i][j];
            if (i == j) diagonalSum[0] += grid[i][j];
            if (i + j == 2) diagonalSum[1] += grid[i][j];
        }
    }
    let sum = rowSum.concat(colSum, diagonalSum);
    return sum.every(val => val === sum[0]);
}
/** 
 * @param {*} grid The function to print the grid square format
 * 
 */
function printSquare(grid) 
{
  console.log("-------------")
	for (let i = 0; i < grid.length; i++) 
  {
		let row = grid[i] , rowString = ""
		for (let j = 0; j < row.length; j++) 
    {
			rowString += ("| " + row[j]	+ " ")
		}
		console.log(rowString + "|")
		if (i == (grid.length-1)) 
    {
			console.log("-------------")
		} 
    else 
    {
			console.log("----+---+----")
		}
	}
}

/**
 * To check the sum of rows,columns and diagonals of the grid and count the iterations
 */
let counter = 0, grid = randomGrid();
while (!isMagicSquare(grid)) {
    counter++;
    grid = randomGrid();
}

// Calling Function to print the Random 3x3 magic square 
printSquare(grid);

// To Print the number of iterations done in the Magic Square
console.log(`Magic square found on iteration ${counter}`);
