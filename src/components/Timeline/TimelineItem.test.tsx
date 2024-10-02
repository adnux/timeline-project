import { render } from '@testing-library/react';
import TimelineItem from './TimelineItem';

describe('TimelineItem', () => {
    it('should render correctly', () => {
        const item = {
            id: 1,
            start: '2021-01-01',
            end: '2021-01-02',
            name: 'Test Title',
        };
        const { container } = render(<TimelineItem item={item} />);
        expect(container).not.toBeNull();
    })
})