class Knight {

    moves = [];
    steps = [-21, -19, -12, -8, 8, 12,19, 21];

    constructor(){
        this.moves = new Array( 64 );
        this.buildMoves( );
        // console.log( '0', this.moves[ 0 ].moves );
        // console.log( '33', this.moves[ 33 ].moves );
    };


    buildMoves( ){
        for( let i = 0; i < this.moves.length; i++ ){
            let node = new Node( i );
            let legalSquares = [];
            for( let s = 0; s < this.steps.length; s++ ) {
                const square = i + this.steps[ s ];
                // console.log( 'square i:', i, square)
                if (( square > -1 && square < 78 ) && ( square%10 < 8)) {
                    legalSquares.push( square );
                };
            };
            // console.log( `square: ${ i } legalSquares: ${legalSquares}` );
            node.moves = legalSquares;
            this.moves[ i ] = node;
        };
    };

    availableMoves( s ){ return this.moves[ s ] };
};

class Node {
    val = 0;
    moves =[];
    constructor( v ){ this.val = v; };
}

export { Knight };