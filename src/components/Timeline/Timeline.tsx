import React from 'react';
import { EventItem } from '../../types/Timeline';
import './Timeline.css';
import TimelineItem from './TimelineItem';
import { useZoomControls } from '../../hooks/UseZoomControls';

interface TimelineProps {
    items: Array<EventItem>;
}

const Timeline: React.FC<TimelineProps> = ({ items }) => {
    const { zoomLevel } = useZoomControls();
    return (
        <div className="timeline" style={{ transform: `scale(${zoomLevel})` }}>
            {items.map(item => (
                <TimelineItem key={item.id} item={item} />
            ))}
        </div>
    );
};

export default Timeline;
