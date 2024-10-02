import { fireEvent, render, screen } from '@testing-library/react';
import ZoomControlsContextProvider from '../../providers/ZoomControlsContextProvider';
import Timeline from './Timeline';

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

    fireEvent.click(editButton);

    const input = screen.getByDisplayValue(/Event 1/i);

    fireEvent.change(input, { target: { value: 'Updated Event 1' } });
    fireEvent.blur(input);

    const updatedEvent = screen.getByText(/Updated Event 1/i);
    expect(updatedEvent).toBeInTheDocument();
  });

  it('should be able to handle drag and drop', () => {
    const items = [
      {
        id: 1,
        start: '2021-01-01',
        end: '2021-01-01',
        name: 'Event 1',
      },
      {
        id: 2,
        start: '2021-01-02',
        end: '2021-01-02',
        name: 'Event 2',
      },
    ];
    const { container } = render(
      <ZoomControlsContextProvider>
        <Timeline items={items} />
      </ZoomControlsContextProvider>
    );
    expect(container).not.toBeNull();

    const timelineItemOne = screen.getAllByLabelText('timeline-item')[0];

    // drag start
    fireEvent.dragStart(timelineItemOne, { dataTransfer: { setData: jest.fn() } });
    expect(timelineItemOne.getAttribute('aria-valuemax')).toBe('1');
    expect(timelineItemOne.getAttribute('aria-valuetext')).toBe('2021-01-01');

    // drop event
    const timelineItemTwo = screen.getAllByLabelText('timeline-item')[1];
    fireEvent.drop(timelineItemOne, { dataTransfer: { getData: jest.fn() } });
    expect(timelineItemOne.getAttribute('aria-valuetext')).toBe('2021-01-01');
    expect(timelineItemTwo.getAttribute('aria-valuetext')).toBe('2021-01-02');

  })
});