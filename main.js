import { Knight } from './chess.js';


const knight = new Knight();

// THE X,Y COORDINATES ARE MERGED
// TO A SINGLE DIGIT:
// (X,Y) >> xy
// (4,6) >> 46
// AND THEN USED AS THE INDEX
// BOARD KEY BELOW:

//  07  17  27  37  47  57  67  77
//  06  16  26  36  46  56  66  76
//  05  15  25  35  45  55  65  75
//  04  14  24  34  44  54  64  74
//  03  13  23  33  43  53  63  73
//  02  12  22  32  42  52  62  72
//  01  11  21  31  41  51  61  71
//  00  10  20  30  40  50  60  70

console.log('00 >> 33');
console.log( knight.moveFromTo( 0, 0 ) );

console.log('33 >> 43');
console.log( knight.moveFromTo( 33, 43 ) );

console.log('00 >> 77');
console.log( knight.moveFromTo( 0, 77 ) );