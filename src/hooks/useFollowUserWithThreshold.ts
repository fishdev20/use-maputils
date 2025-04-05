import { fromLonLat } from 'ol/proj';
import { useEffect, useState } from 'react';

export function useFollowUserWithThreshold(threshold = 10) {
    const [position, setPosition] = useState<[number, number] | null>(null);

    useEffect(() => {
      let prev: [number, number] | null = null;
      const watchId = navigator.geolocation.watchPosition((pos) => {
        const curr: [number, number] = [pos.coords.longitude, pos.coords.latitude];
        if (!prev || distance(curr, prev) > threshold) {
          prev = curr;
          setPosition(fromLonLat(curr));
        }
      });
      return () => navigator.geolocation.clearWatch(watchId);
    }, [threshold]);

    return position;
  }

  function distance(a: [number, number], b: [number, number]) {
    const dx = a[0] - b[0];
    const dy = a[1] - b[1];
    return Math.sqrt(dx * dx + dy * dy);
  }
