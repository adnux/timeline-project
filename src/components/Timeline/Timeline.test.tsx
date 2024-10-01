import ZoomControlsContextProvider from '../../providers/ZoomControlsContextProvider';
import Timeline from './Timeline';
import { render, screen, act, fireEvent } from '@testing-library/react';

describe('Timeline', () => {
  it('should render the Timeline component', () => {
    const items = [
      {
        id: 1,
        start: '2021-01-01T 00:00:00',
        end: '2021-01-01T 00:00:00',
        name: 'Event 1',
      },
    ];
    const { container } = render(
      <ZoomControlsContextProvider>
        <Timeline items={items} />
      </ZoomControlsContextProvider>
    );
    expect(container).toBeInTheDocument();

    const event = screen.getByText(/Event 1/i);
    expect(event).toBeInTheDocument();
  });


  it('should handle editing an event', () => {
    const items = [
      {
        id: 1,
        start: '2021-01-01T 00:00:00',
        end: '2021-01-01T 00:00:00',
        name: 'Event 1',
      },
    ];
    const { container } = render(
      <ZoomControlsContextProvider>
        <Timeline items={items} />
      </ZoomControlsContextProvider>
    );
    expect(container).toBeInTheDocument();

    const editButton = screen.getByRole('button');
    
    act(() => {
      fireEvent.click(editButton);    
    });

    const input = screen.getByDisplayValue(/Event 1/i);
    
    act(() => {
      fireEvent.change(input, { target: { value: 'Updated Event 1' } });
      fireEvent.blur(input);
    });

    const updatedEvent = screen.getByText(/Updated Event 1/i);
    expect(updatedEvent).toBeInTheDocument();
  });
});