import { useEffect, useRef } from "react";

/**
 * Function used to compare dependencies.
 *
 * @callback compareFunc
 * @param {*} prevDeps Previous dependencies.
 * @param {*} nextDeps Current dependencies.
 * @returns {boolean} `true` if dependencies are the same, `false` otherwise.
 */

/**
 *  Used to memoize function based on dependencies.
 *  Similar to `useCallback`, but provides option to specify custom equality function to compare dependencies.
 *  @see https://reactjs.org/docs/hooks-reference.html#usecallback
 *
 * @param {function} next Function to memoize.
 * @param {*} dependencies Dependencies to compare.
 * @param {compareFunc} compareFunction Custom equality function, used to compare dependencies.
 * @returns Same callback if `compareFunction` returned `true`. New one otherwise.
 */
export const useCallbackCompare = (next, dependencies, compareFunction) => {
	const prevValueRef = useRef(next);
	const prevDepsRef = useRef(dependencies);

	useEffect(() => {
		if (!compareFunction(prevDepsRef.current, dependencies)) {
			prevValueRef.current = next;
			prevDepsRef.current = dependencies;
		}
	});

	return prevDepsRef.current;
};
