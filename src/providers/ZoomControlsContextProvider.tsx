import { CSSProperties, useCallback, useMemo, useState } from 'react';
import ZoomControlsContext from './ZoomControlsContext';

interface ZoomControlsContextProviderType {
  children: React.ReactNode;
}

const ZoomControlsContextProvider: React.FC<ZoomControlsContextProviderType> = ({ children }) => {
  const [zoomLevel, setZoomLevel] = useState(1);


  const zoomIn = useCallback(() => {
    let newZoomLevel = Math.min(zoomLevel + 0.2, 1.6);
    if (process.env.REACT_APP_BROWSER_ZOOM) {
      (document.body.style as CSSProperties).zoom = `${newZoomLevel}`;
    }
    setZoomLevel(newZoomLevel);
  }, [zoomLevel])
  const zoomOut = useCallback(() => {
    let newZoomLevel = Math.max(zoomLevel - 0.2, 0.6);
    if (process.env.REACT_APP_BROWSER_ZOOM) {
      (document.body.style as CSSProperties).zoom = `${newZoomLevel}`;
    }
    setZoomLevel(newZoomLevel);
  }, [zoomLevel])
  const reset = useCallback(() => {
    if (process.env.REACT_APP_BROWSER_ZOOM) {
      (document.body.style as CSSProperties).zoom = '1';
    }
    setZoomLevel(1);
  }, [])

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const value = useMemo(() => ({ zoomLevel, zoomIn, zoomOut, reset }), [zoomLevel]);

  return (
    <ZoomControlsContext.Provider value={value}>
      {children}
    </ZoomControlsContext.Provider>
  )
};

export default ZoomControlsContextProvider;

interface ZoomMockedContextProviderType extends ZoomControlsContextProviderType {
  zoomLevel: number;
  zoomIn: jest.Mock;
  zoomOut: jest.Mock;
  reset: jest.Mock;
}

export const MockZoomControlsContextProvider: React.FC<ZoomMockedContextProviderType> = ({
  zoomLevel,
  zoomIn,
  zoomOut,
  reset,
  children,
}) => {

  const value = useMemo(() => ({ zoomLevel, zoomIn, zoomOut, reset }), [zoomLevel, reset, zoomIn, zoomOut]);

  return (
    <ZoomControlsContext.Provider value={value}>
      {children}
    </ZoomControlsContext.Provider>
  );
};