import { createContext } from 'react';

export type TimelineContextType = {
  start: string;
  handleDragStart: (event: React.DragEvent<HTMLDivElement>) => void;
  handleDropEvent: (event: React.DragEvent<HTMLDivElement>) => void;
};

const TimelineContext = createContext<TimelineContextType | null>(null)

export default TimelineContext;
