import type Map from 'ol/Map';
import { useEffect } from 'react';

export function useMapIdle(map: Map, delay: number, onIdle: () => void) {
  useEffect(() => {
    if (!map) return;

    let timeout: any;
    const handler = () => {
      clearTimeout(timeout);
      timeout = setTimeout(onIdle, delay);
    };

    map.on('moveend', handler);
    return () => {
      map.un('moveend', handler);
      clearTimeout(timeout);
    };
  }, [map, delay, onIdle]);
}
