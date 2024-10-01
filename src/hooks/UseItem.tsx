import { useContext } from 'react';
import TimelineContext from '../providers/TimelineContext';

export function useItem() {
  const context = useContext(TimelineContext);
  if (!context) {
    throw new Error('useItem must be used within a TimelineContextProvider');
  }
  return context;
}
