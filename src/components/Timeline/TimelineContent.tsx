import React, { useState } from 'react';
import { EventItem } from '../../types/Timeline';
import './TimelineContent.css';

interface InlineEditProps {
  item: EventItem;
}

const TimelineContent: React.FC<InlineEditProps> = ({ item }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState(item.name);

  const toggleEdit = () => {
      setIsEditing(!isEditing);
  };

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setName(event.target.value);
  };

  return (
    <div className="timeline-content" onDoubleClick={toggleEdit}>
      {isEditing ? (
        <input
          type="text"
          value={name}
          onChange={handleNameChange}
          onBlur={toggleEdit}
          autoFocus
        />
      ) : (
        <span>{name} <button onClick={toggleEdit}>✏️</button></span>
      )}
    </div>
  )
};

export default TimelineContent;