import { boundingExtent } from 'ol/extent';
import { useMemo } from 'react';

export function useFitBounds(coords: [number, number][]) {
  return useMemo(() => boundingExtent(coords), [coords]);
}
