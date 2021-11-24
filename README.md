![svackages logo](https://raw.githubusercontent.com/svackages/persitstant-store/main/logo.png)
# persistant typed store
This package allows you to persist your store through localstorage.

## basic usage
Typescript
```typescript
const myPersistantStore = persistantStore<SomeType>({
    key: 'fancyKey',
    initValue: null,
});
```

JavaScript
```javascript
const myPersistantStore = persistantStore({
    key: 'fancyKey',
    initValue: null,
});
```

## clear out localstorage
```javascript
// in .svelte
$myPersistantStore = null; // undefined will work as well

// in .ts/.js
myPersistantStore.set(null); // undefined will work as well
```

## optional params
you can hook into the read and write cycle to transform values.
```typescript
readHook?: (storage?: string) => T,
writeHook?: (storeValue: T) => string
```

