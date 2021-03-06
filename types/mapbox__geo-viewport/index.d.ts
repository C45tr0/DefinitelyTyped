// Type definitions for @mapbox/geo-viewport 0.3
// Project: https://github.com/mapbox/geo-viewport
// Definitions by: Fabio Berta <https://github.com/fnberta>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export interface GeoViewport {
    center: [number, number];
    zoom: number;
}

export type BoundingBox = [number, number, number, number];

export function viewport(bounds: BoundingBox, dimensions: [number, number], minzoom?: number, maxzoom?: number, tileSize?: number): GeoViewport;

export function bounds(viewport: { lon: number; lat: number }, zoom: number, dimensions: [number, number], tileSize?: number): BoundingBox;
