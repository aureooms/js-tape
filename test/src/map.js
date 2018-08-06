import test from 'ava' ;

import stream from '../../src' ;

/**
 * @test {stream#map}
 */
test( 'can use map' , async t => {

	const input = 'ababbaab' ;
	const mystream1 = stream.fromString( input ) ;
	const mystream2 = stream.map( x => x === 'a' ? 0 : 1, mystream1) ;
	const expected = input.replace(/a/g, '0').replace(/b/g, '1');
	t.deepEqual(await stream.toString( mystream2 ), expected ) ;

} ) ;
