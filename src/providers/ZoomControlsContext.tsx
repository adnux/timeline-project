import { createContext } from 'react';

export type ZoomControlsContextType = {
  zoomLevel: number;
  zoomIn: () => void;
  zoomOut: () => void;
  reset: () => void;
};

const ZoomControlsContext = createContext<ZoomControlsContextType | undefined>(undefined)

export default ZoomControlsContext;
