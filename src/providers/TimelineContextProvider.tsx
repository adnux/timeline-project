import { useMemo, useState } from 'react';
import { EventItem } from '../types/Timeline';
import TimelineContext from './TimelineContext';

interface TimelineContextProviderType {
  item: EventItem;
  children: React.ReactNode;
}

const TimelineContextProvider: React.FC<TimelineContextProviderType> = ({ item, children }) => {
  const [start, setStart] = useState(item.start);

  const handleDragStart = (event: React.DragEvent<HTMLDivElement>) => {
      const dragTarget = (event.currentTarget as HTMLDivElement);
      event.dataTransfer.setData("id", dragTarget.ariaValueMax ?? '');
      event.dataTransfer.setData("start", dragTarget.ariaValueText ?? '');
  };

  const handleDropEvent = (event: React.DragEvent<HTMLDivElement>) => {
      event.preventDefault();
      const start = event.dataTransfer.getData("start")
      setStart(start);
  }

  const value = useMemo(() => ({ start, handleDragStart, handleDropEvent }), [start]);
  return (
    <TimelineContext.Provider value={value}>
      {children}
    </TimelineContext.Provider>
  )
};

export default TimelineContextProvider;
