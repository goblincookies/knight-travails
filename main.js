import { Knight } from './chess.js'

console.log( 'hello!' );
const knight = new Knight();

console.log( knight.availableMoves( 0 ), knight.availableMoves( 0 ).moves );
console.log( knight.availableMoves( 7 ), knight.availableMoves( 7 ).moves );
console.log( knight.availableMoves( 26 ), knight.availableMoves( 26 ).moves );

