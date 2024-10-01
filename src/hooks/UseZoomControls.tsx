import { useContext } from 'react';
import ZoomControlsContext from '../providers/ZoomControlsContext';

export function useZoomControls() {
  const context = useContext(ZoomControlsContext);
  if (!context) {
    throw new Error('useZoomControls must be used within a ZoomControlsContextProvider');
  }
  const { zoomLevel, zoomIn, zoomOut, reset } = context;
  return { zoomLevel, zoomIn, zoomOut, reset };
}