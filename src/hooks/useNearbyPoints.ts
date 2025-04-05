import { useMemo } from 'react';

export function useNearbyPoints(
  center: [number, number],
  points: [number, number][],
  radius: number
) {
  return useMemo(() => {
    return points.filter((point) => distance(center, point) <= radius);
  }, [center, points, radius]);
}

function distance(a: [number, number], b: [number, number]) {
  const dx = a[0] - b[0];
  const dy = a[1] - b[1];
  return Math.sqrt(dx * dx + dy * dy);
}
