import React, { useState } from 'react';
import { EventItem } from '../../types/Timeline';
import TimelineContent from './TimelineContent';
import './TimelineItem.css';

interface TimelineItemProps {
    item: EventItem
}

const TimelineItem: React.FC<TimelineItemProps> = ({ item }) => {
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

    return (
        <div
            aria-valuetext={item.start}
            aria-valuemax={item.id}
            aria-label="timeline-item"
            className="timeline-item"
            draggable
            onDragStart={handleDragStart}
            onDragOver={(event) => event.preventDefault()}
            onDrop={handleDropEvent}
        >
            <div id={`${item.id}`} className="timeline-time">{start}</div>
            {/* <div className="timeline-time">{start} to {item.end}</div> */}
            <div className="timeline-line">
                <div className="timeline-circle" />
            </div>
            <TimelineContent item={item} />
        </div>
    );
};

export default TimelineItem;