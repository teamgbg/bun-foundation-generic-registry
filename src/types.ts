/**
 * @system generic-registry
 * @status handwritten
 * @edit edit directly
 *
 * Type definitions for the generic registry primitive.
 */

export interface RegistryStats {
	name: string;
	size: number;
	enabled: boolean;
	keys: string[];
}
