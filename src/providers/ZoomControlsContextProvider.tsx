import { useMemo, useState } from 'react';
import ZoomControlsContext from './ZoomControlsContext';

interface ZoomControlsContextProviderType {
  children: React.ReactNode;
}

const ZoomControlsContextProvider: React.FC<ZoomControlsContextProviderType> = ({ children }) => {
  const [zoomLevel, setZoomLevel] = useState(1);

  const zoomIn = () => setZoomLevel(prev => Math.min(prev + 0.2, 2));
  const zoomOut = () => setZoomLevel(prev => Math.max(prev - 0.2, 0.5));
  const reset = () => setZoomLevel(1);

  const value = useMemo(() => ({ zoomLevel, zoomIn, zoomOut, reset }), [zoomLevel]);

  return (
    <ZoomControlsContext.Provider value={value}>
      {children}
    </ZoomControlsContext.Provider>
  )
};

export default ZoomControlsContextProvider;
