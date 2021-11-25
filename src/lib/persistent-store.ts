import { browser } from '$app/env';
import type { Writable } from 'svelte/store';
import { writable } from 'svelte/store';

const storage = <T>({
    key,
    initValue,
    readHook,
    writeHook
}: {
    key: string,
    initValue: T,
    readHook?: (storage?: string) => T,
    writeHook?: (storeValue: T) => string
}): Writable<T> => {
	const store = writable(initValue);
	if (!browser) return store;

    const _read = () => {
        let localValue: T;
        const storedValueStr = localStorage.getItem(key);
        if (typeof readHook === 'function') {
            localValue = readHook(storedValueStr);
        } else {
            if (storedValueStr == null) return;
            localValue = JSON.parse(storedValueStr);
        }
		store.set(localValue);
    };

	_read();

	store.subscribe((val) => {
		if ([null, undefined].includes(val)) {
			localStorage.removeItem(key);
		} else {
			const toWrite = typeof writeHook === 'function'
                ? writeHook(val)
                : JSON.stringify(val)
            localStorage.setItem(key, toWrite);
		}
	});

	window.addEventListener('storage', () => _read());

	return store;
};

export default storage;
