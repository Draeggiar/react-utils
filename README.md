# react-utils

A simple package containing utilities useful with everyday react development.

[![npm (scoped)](https://img.shields.io/npm/v/@draeggiar/react-utils?color=blue)](https://www.npmjs.com/package/@draeggiar/react-utils)
[![npm bundle size (scoped)](https://img.shields.io/bundlephobia/min/@draeggiar/react-utils)](https://www.npmjs.com/package/@draeggiar/react-utils)
[![npm](https://img.shields.io/npm/dm/@draeggiar/react-utils)](https://www.npmjs.com/package/@draeggiar/react-utils)
[![Build status](https://github.com/Draeggiar/react-utils/actions/workflows/CI.yml/badge.svg?branch=master)](https://github.com/Draeggiar/react-utils)

## Installation

```
npm install --save @draeggiar/react-utils
```

## Package contents

### Hooks

-   `useLogUpdateReason` - Hook for diagnostig purposes. Helps to determine what made component update.

```javascript
import { useLogUpdateReason } from '@draeggiar/react-utils'

const MyComponent = props => {
    const [state, setState] = useState();

    useLogUpdateReason('MyComponent', props, { state });

    return ...
}
```

-   `useMemoCompare` - Used to memoize value based on dependencies. Similar to `useMemo`, but provides option to specify custom equality function to compare dependencies.

```javascript
import { useMemoCompare } from '@draeggiar/react-utils';
import isEqual from 'lodash/isEqual';

const MyComponent = props => {
    const memoizedValue = useMemoCompare(() => "some value", [dep1, dep2], isEqual);

    return ...
}
```

In this example dependencies are deep compared using lodash `isEqual`, insted of default `useMemo` shallow comparison.

-   `useCallbackCompare` - Used to memoize function based on dependencies. Similar to `useCallback`, but provides option to specify custom equality function to compare dependencies.

```javascript
import { useCallbackCompare } from '@draeggiar/react-utils';
import isEqual from 'lodash/isEqual';

const MyComponent = props => {
	const memoizedCallback = useCallbackCompare(
		args => {
			...
		},
		[dep1, dep2],
		isEqual
	);

    return ...
}
```

## Contribution

See the [contribution guideliness](https://github.com/Draeggiar/react-utils/blob/master/.github/CONTRIBUTING.md) for this project.
