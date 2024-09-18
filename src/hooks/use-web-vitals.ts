import { useEffect } from 'react';
import { onCLS, onFCP, onLCP, onTTFB } from 'web-vitals';

export function useWebVitals() {
  useEffect(() => {
    function onPerfEntry(measurements: unknown) {
      console.log(measurements);
    }

    onCLS(onPerfEntry);
    onLCP(onPerfEntry);
    onFCP(onPerfEntry);
    onTTFB(onPerfEntry);
  }, []);
}
