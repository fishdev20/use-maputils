# @minhng/use-maputils

A collection of reusable React hooks for working with OpenLayers maps.

## ✨ Features
- `useFitBounds`
- `useFollowUserWithThreshold`
- `usePolygonArea`
- `useMapIdle`
- `useNearbyPoints`

## 📦 Install
```bash
npm install @minhng/use-maputils ol
```

## 🔧 Usage
```tsx
import { useFitBounds, useFollowUserWithThreshold } from '@minhng/use-maputils';

const bounds = useFitBounds([[lon1, lat1], [lon2, lat2]]);
const userPos = useFollowUserWithThreshold(20);
```

## 📚 Hooks

### `useFitBounds(coords: [number, number][])`
Returns an extent that fits the provided coordinates.

### `useFollowUserWithThreshold(threshold?: number)`
Watches user location and updates only when moved beyond the threshold.

### `usePolygonArea(coords: [number, number][])`
Computes the area of a polygon.

### `useMapIdle(map: Map, delay: number, onIdle: () => void)`
Calls a function when the map becomes idle.

### `useNearbyPoints(center, points, radius)`
Returns a list of points within a radius from a center point.

## 🧪 Local Development
```bash
npm install
npm run dev
```

## 🚀 Publish
```bash
npm login
npm publish --access public
```

## License
MIT © Minh Nguyen
