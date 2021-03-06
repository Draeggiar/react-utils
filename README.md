# react-utils

A simple package containing utilities useful with everyday react development.

[![npm (scoped)](https://img.shields.io/npm/v/@draeggiar/react-utils?color=blue)](https://www.npmjs.com/package/@draeggiar/react-utils)
[![npm bundle size (scoped)](https://img.shields.io/bundlephobia/min/@draeggiar/react-utils)]()
[![npm](https://img.shields.io/npm/dm/@draeggiar/react-utils)]()

## Installation

```
npm install --save @draeggiar/react-utils
```

## Package contents

### Hooks

- `useLogUpdateReason` - Hook for diagnostig purposes. Helps to determine what made component update.

```javascript
const MyComponent = props => {
    const [state, setState] = useState();

    useLogUpdateReason('MyComponent', props, { state });

    return ...
}
```

- ~~`useMemoCompare`~~ - TODO
- ~~`useCallbackCompare`~~ - TODO

## Contribution

See the [contribution guideliness](https://github.com/Draeggiar/react-utils/blob/master/.github/CONTRIBUTING.md) for this project.
