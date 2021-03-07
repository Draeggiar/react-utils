import { useMemo } from "react";
import { useCallbackCompare } from "./useCallbackCompare";

/**
 *	Used to memoize value based on dependencies.
 *  Similar to `useMemo`, but provides option to specify custom equality function to compare dependencies.
 * 	@see https://reactjs.org/docs/hooks-reference.html#usememo
 *
 * @param {function} next Function that returns value to memoize.
 * @param {*} dependencies Dependencies to compare.
 * @param {compareFunc} compareFunction Custom equality function, used to compare dependencies.
 * @returns Same value if `compareFunction` returned `true`. New one otherwise.
 */
export const useMemoCompare = (next, dependencies, compareFunction) => {
	const createValueCallback = useCallbackCompare(next, dependencies, compareFunction);

	return useMemo(next, [createValueCallback]);
};
