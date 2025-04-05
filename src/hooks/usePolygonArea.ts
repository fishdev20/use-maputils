import { Polygon } from 'ol/geom';
import { useMemo } from 'react';

export function usePolygonArea(coords: [number, number][]) {
  return useMemo(() => {
    const poly = new Polygon([[...coords, coords[0]]]);
    return poly.getArea();
  }, [coords]);
}
