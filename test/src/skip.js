import test from 'ava' ;

import { fromString , skip } from '../../src' ;

/**
 * @test {tape#fromstring}
 * @test {tape#skip}
 */
test( 'can skip tokens from tape' , async t => {

	const input = '\n\n\n    1 ,\t22\n, 333\t,\n-44 ,\t-5 \t\n  \t' ;
	const tape = fromString( input ) ;
	t.deepEqual( await skip( tape , ' \t\n' ) , '1' ) ;
	t.deepEqual( await skip( tape , ' \t\n' ) , ',' ) ;
	t.deepEqual( await skip( tape , ' \t\n' ) , '2' ) ;
	t.deepEqual( await skip( tape , ' \t\n' ) , '2' ) ;
	t.deepEqual( await skip( tape , ' \t\n' ) , ',' ) ;
	t.deepEqual( await skip( tape , ' \t\n' ) , '3' ) ;
	t.deepEqual( await skip( tape , ' \t\n' ) , '3' ) ;
	t.deepEqual( await skip( tape , ' \t\n' ) , '3' ) ;
	t.deepEqual( await skip( tape , ' \t\n' ) , ',' ) ;
	t.deepEqual( await skip( tape , ' \t\n' ) , '-' ) ;
	t.deepEqual( await skip( tape , ' \t\n' ) , '4' ) ;
	t.deepEqual( await skip( tape , ' \t\n' ) , '4' ) ;
	t.deepEqual( await skip( tape , ' \t\n' ) , ',' ) ;
	t.deepEqual( await skip( tape , ' \t\n' ) , '-' ) ;
	t.deepEqual( await skip( tape , ' \t\n' ) , '5' ) ;
	t.deepEqual( await skip( tape , ' \t\n' ) , tape.eof ) ;

} ) ;