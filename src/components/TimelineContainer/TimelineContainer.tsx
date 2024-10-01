import React, { useState } from 'react';
import { EventItem } from '../../types/Timeline';
import Timeline from '../Timeline/Timeline';
import './TimelineContainer.css';
import ZoomControls from '../ZoomControls/ZoomControls';
import ZoomControlsContextProvider from '../../providers/ZoomControlsContextProvider';
import TimelineContextProvider from '../../providers/TimelineContextProvider';

function sortEvents(items: EventItem[]) {
    return [...items].sort((a, b) => {
        if (a.start === b.start) {
            return a.end > b.end ? 1 : -1;
        }
        return a.start > b.start ? 1 : -1;
    });
}

export interface TimelineProps {
    items: Array<EventItem>;
}

const TimelineContainer: React.FC<TimelineProps> = ({ items }) => {

    return (
        <div className="timeline-container">
            <ZoomControlsContextProvider>
                <ZoomControls/>
                <Timeline items={sortEvents(items)}/>
            </ZoomControlsContextProvider>
        </div>
    );
};

export default TimelineContainer;
