/**
 * @system generic-registry
 * @status handwritten
 * @edit edit directly
 *
 * Factory function for creating typed string-keyed registries.
 * Follows the same pattern as createCache, createRateLimiter, createWatchdog:
 * name, auto-registration, central visibility.
 */

import { genericRegistryIndex } from "./registry.ts";

export interface Registry<V> {
	readonly name: string;
	register(key: string, value: V): void;
	get(key: string): V | undefined;
	has(key: string): boolean;
	delete(key: string): boolean;
	keys(): string[];
	readonly size: number;
	clear(): void;
}

export function createRegistry<V>(name: string): Registry<V> {
	const store = new Map<string, V>();

	const reg: Registry<V> = {
		name,

		register(key: string, value: V): void {
			store.set(key, value);
		},

		get(key: string): V | undefined {
			return store.get(key);
		},

		has(key: string): boolean {
			return store.has(key);
		},

		delete(key: string): boolean {
			return store.delete(key);
		},

		keys(): string[] {
			return [...store.keys()];
		},

		get size(): number {
			return store.size;
		},

		clear(): void {
			store.clear();
		},
	};

	genericRegistryIndex.register(
		reg as unknown as Parameters<typeof genericRegistryIndex.register>[0],
	);
	return reg;
}
