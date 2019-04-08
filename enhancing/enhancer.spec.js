const enhancer = require( "./enhancer.js" );
// test away!

const testObject = {
    durability:  27,
    enhancement: 1,
    name:        "Iron Sword"
};

const enhancementObjectMaxed = {
    durability:  29,
    enhancement: 20,
    name:        "Wood Shield"
};

const blankTestObject = {};

describe( "enhancer.js", () => {
    
    describe( "repair", () => {
        it( "should return a new object with durability restored to 100",
            () => {
                
                expect( enhancer.repair( testObject ) ).
                    toEqual( { ...testObject, durability: 100 } );
            } );
        
        it( "should return the blank object with durability set to 100", () => {
            expect( enhancer.repair( blankTestObject ) ).
                toEqual( { durability: 100 } );
        } );
    } );
    
    describe( "succeed", () => {
        it( "should return a new object with enhancement plus one",
            () => {
                
                expect( enhancer.succeed( testObject ) ).
                    toEqual( {
                        ...testObject,
                        enhancement: testObject.enhancement + 1
                    } );
            } );
        
        it( "should return a new object with enhancement not changed and at" +
            " level 20 ", () => {
            expect( enhancer.succeed( enhancementObjectMaxed ) ).
                toEqual( enhancementObjectMaxed );
        } );
        
    } );
    
    describe( "fail", () => {
        it( "should return a new object with durability  decreased by 10 and" +
            " enhancement decreased by 1", () => {
            expect( enhancer.fail( enhancementObjectMaxed ) ).
                toEqual( {
                    ...enhancementObjectMaxed,
                    durability:  enhancementObjectMaxed.durability - 10,
                    enhancement: enhancementObjectMaxed.enhancement - 1
                } );
        } );
        
        it( "should return a new object with durability decreased by 5 and" +
            " enhancement the same.", () => {
            expect( enhancer.fail( testObject ) ).
                toEqual(
                    { ...testObject, durability: testObject.durability - 5 } );
        } );
        
        it( "should return a new object durability decreased by 10 and" +
            " enhancement decreased by 0", () => {
            expect( enhancer.fail( {
                durability:  20,
                enhancement: 15,
            } ) ).toEqual( { durability: 10, enhancement: 15 } );
        } );
        
        it( "should return a new object with durability equal to 0 and" +
            " enhancement equal to 0", () => {
            expect( enhancer.fail( blankTestObject ) ).
                toEqual( { durability: 0, enhancement: 0 } );
        } );
        
    } );
    
    describe( "get", () => {
        it( "should return the item with the enhancment number between" +
            " brackets then the name of the item.( [+5] item name )", () => {
            expect( enhancer.get( testObject ) ).
                toEqual( {
                    ...testObject,
                    name: `[+${ testObject.enhancement }] ${ testObject.name }`
                } );
        } );
        
        it( "should return the item as is with nothing changed because the" +
            " enhancment level is 0.", () => {
            expect( enhancer.get( {
                enhancement: 0,
                name:        "Iron Sword"
            } ) ).toEqual( {
                enhancement: 0,
                name:        "Iron Sword"
            } );
        } );
        
    } );
    
} );