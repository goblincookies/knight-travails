
class Knight {

    // A PRECOMPUTED ARRAY OF LEGAL MOVES;
    // THE X,Y COORDINATES ARE MERGED
    // TO A SINGLE DIGIT (1,3) >> 13
    // AND THEN USED AS THE INDEX
    // BOARD KEY BELOW:
    board = [];

    //  07  17  27  37  47  57  67  77
    //  06  16  26  36  46  56  66  76
    //  05  15  25  35  45  55  65  75
    //  04  14  24  34  44  54  64  74
    //  03  13  23  33  43  53  63  73
    //  02  12  22  32  42  52  62  72
    //  01  11  21  31  41  51  61  71
    //  00  10  20  30  40  50  60  70

    // ADDING ONE OF THESE TO ANY GIVEN
    // SQUARE WILL PRODUCE A LEGAL MOVE
    legalSteps = [-21, -19, -12, -8, 8, 12, 19, 21];

    // ON CREATION, PRECOMPUTE POSSIBLE MOVES
    constructor(){
        this.buildMoves( );
    };

    // PRECOMPUTE LEGAL MOVES
    buildMoves( ){
        // GENERATE BOARD X, Y
        for( let x = 0; x < 8 ; x++ ){
            for( let y = 0; y < 8; y++ ) {

                // TURN COORDINATES INTO SQUARE VALUE
                // (X,Y) >> xy
                // (4,6) >> 46
                let i = ( x * 10 ) + y;

                // CREATE A UNIQUE NODE FOR THIS SQUARE
                let node = new Node( i );

                // A LIST OF ALL LEGAL SQUARES YOU
                // CAN GET TO FROM THE SQUARE i
                let legalSquares = [];

                // COMPUTE EACH LEGAL STEP AND VERIFY THEY ARE IN BOUNDS
                for( let s = 0; s < this.legalSteps.length; s++ ) {
                    // THIS IS A CORRECT MOVE
                    // CHECK THAT IT IS ACTUALLY ON THE BOARD
                    const square = i + this.legalSteps[ s ];
                    
                    // CHECK THAT i IS IN RANGE ( 0 > N > 78 )
                    // AND THAT IT'S ONE'S DIGIT IS NOT 8 OR 9
                    if (( square > -1 && square < 78 ) && ( square % 10 < 8)) {
                        // SAVED 
                        legalSquares.push( square );
                    };
                };

                // SAVE THE LIST OF LEGAL MOVES
                node.moves = legalSquares;
                this.board[ i ] = node;
            };
        };
    };

    // SEARCHES AVAILABLE MOVES
    // RETURNS AN ARRAY OF BOARD INDECES
    // THAT WILL HAVE BEEN TOUCHED
    moveFromTo( from, goal ){
        // AN ARRAY OF PATH OPTIONS
        const searching = [ ];

        // KEEP TRACK OF ALREADY VISITED SQUARES
        // IF YOU ALREADY VISITED HERE, THEN YOU DID
        // SO MORE EFFECIENTLY, AND YOU ARE ALREADY
        // SEARCHING THE AREA
        const visited = new Set( );

        let listOfMoves;
        let legalMoves;
        let thisSquare;

        searching.push( [ from ] );
        visited.add( from );

        // WHILE THERE ARE STILL PATHS TO SEARCH THROUGH
        while( searching.length > 0 ){
            // GET FIRST LIST OF MOVES
            listOfMoves = searching.shift();

            // GET THE LAST SQUARE IN THIS LIST
            thisSquare = listOfMoves[ listOfMoves.length - 1 ];

            // IF IT'S THE GOAL: CELEBRATE!
            if( thisSquare == goal ) { return listOfMoves };

            // LOOK UP THE LEGAL MOVES FOR THE KNIGHT ON THIS SQUARE
            legalMoves = this.board[ thisSquare ].moves;

            // FOR EACH LEGAL MOVE,
            for ( const newMove of legalMoves ) {                
                
                // ALREADY VISITED SQUARES ARE A
                // WASTE OF TIME; MAKE SURE IT'S NEW
                if ( !visited.has( newMove ) ) {

                    // TRACK THAT IT'S VISITED
                    visited.add( newMove );

                    // CREATE A DUPLICATE ARRAY
                    let newListOfMoves = listOfMoves.slice();
                    newListOfMoves.push( newMove );

                    // ADD IT TO THE LIST FOR CONTINUED SEARCHING
                    searching.push( newListOfMoves );
                };
            };
        };
        // THIS MEANS WE HAVE VISITED ALL LEGAL
        // SQUARES AND NONE OF THEM ARE VALID 
        return [ from ];
    };

};

// DATA CLASS FOR KEEPING TRACK
// OF LEGAL MOVES
// VAL: IS THE SQUARE YOU ARE ON
// MOVES: AN ARRAY OF ALL THE SQUARES
// YOU CAN MOVE TO FROM THE VAL

class Node {
    // SAVING THE VAL IS PROBABLY UNECESSARY
    // SINCE IT IS ALSO THE INDEX OF THE BOARD
    // ARRAY BUT IT HELPS WITH DEBUGING
    val = 0;
    moves =[];
    constructor( v ){ this.val = v; };
}

export { Knight };