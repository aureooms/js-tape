/**
 * Utility function to apply a sync callable to each item of an async iterable.
 *
 * @private
 * @param {Callable} callable - the callable to apply
 * @param {AsyncIterable} iterable - the iterable to process
 * @returns {AsyncIterable}
 */
export default async function* asyncIterableMap ( callable , iterable ) {
	// should the callable also be async ?
	for await ( const item of iterable ) yield callable(item) ;
}