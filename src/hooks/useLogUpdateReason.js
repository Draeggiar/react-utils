import { useRef, useEffect } from 'react';

/**
 *  Hook for diagnostig purposes. Helps to determine what made component update. 
 *
 * @param {string} name - Component name.
 * @param {object} props - Component props.
 * @param {object} state - Component state. Can be composed from multiple state properties (i.e. `{ prop1: true, prop2: 'state' }`).
 */
export const useLogUpdateReason = (name, props, state = {}) => {
    const prevProps = useRef(props);
    const prevState = useRef(state);

    useEffect(() => {
        const changedProps = Object.entries(props).reduce((ps, [k, v]) => {
            if (prevProps.current[k] !== v) ps[k] = [prevProps.current[k], v];
            return ps;
        }, {});
        const changedState = Object.entries(state).reduce((ps, [k, v]) => {
            if (prevState.current[k] !== v) ps[k] = [prevState.current[k], v];
            return ps;
        }, {});

        if (Object.keys(changedProps).length > 0) console.log(`✨ ${name} props changed:`, changedProps);
        if (Object.keys(changedState).length > 0) console.log(`🎈 ${name} state changed:`, changedState);

        prevProps.current = props;
        prevState.current = state;
    });
};