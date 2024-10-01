import { useZoomControls } from '../../hooks/UseZoomControls';
import React from 'react';
import './ZoomControls.css';

const ZoomControls: React.FC = () => {
  const { zoomIn, zoomOut, reset } = useZoomControls()
  return (
    <div className="zoom-controls">
      <button onClick={zoomIn} aria-label="Zoom In">
        <img width={24} height={24} src="/zoom-in.svg" alt="Zoom In" />
      </button>
      <button onClick={zoomOut} aria-label="Zoom Out">
        <img width={24} height={24} src="/zoom-out.svg" alt="Zoom Out" />
      </button>
      <button onClick={reset} aria-label="Reset">
        <img width={24} height={24} src="/loupe.svg" alt="Reset" />
      </button>
    </div>
  );
};

export default ZoomControls;