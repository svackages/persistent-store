![svackages logo](https://raw.githubusercontent.com/svackages/persistent-store/main/logo.png)

![npm version](https://img.shields.io/npm/v/@svackages/persistent-store)
![license](https://img.shields.io/github/license/svackages/persistent-store)
# persistent typed store
This package allows you to persist your store through localstorage.

## basic usage
Typescript
```typescript
const myPersistentStore = persistentStore<SomeType>({
    key: 'fancyKey',
    initValue: null,
});
```

JavaScript
```javascript
const myPersistentStore = persistentStore({
    key: 'fancyKey',
    initValue: null,
});
```

## clear out localstorage
```javascript
// in .svelte
$myPersistentStore = null; // undefined will work as well

// in .ts/.js
myPersistentStore.set(null); // undefined will work as well
```

## optional params
you can hook into the read and write cycle to transform values.
```typescript
readHook?: (storage?: string) => T,
writeHook?: (storeValue: T) => string
```

