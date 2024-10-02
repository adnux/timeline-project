import { fireEvent, render, screen } from '@testing-library/react';
import ZoomControlsContextProvider, { MockZoomControlsContextProvider } from '../../providers/ZoomControlsContextProvider';
import ZoomControls from './ZoomControls';

describe('ZoomControls', () => {
  it('should render', () => {
    const { container, getByLabelText } = render(
      <ZoomControlsContextProvider >
        <ZoomControls />
      </ZoomControlsContextProvider>
    );
    expect(container).not.toBeNull();

    const zoomInButton = screen.getByLabelText('Zoom In');
    expect(zoomInButton).toBeInTheDocument();
    fireEvent.click(zoomInButton);

    const zoomOutButton = screen.getByLabelText('Zoom Out');
    expect(zoomOutButton).toBeInTheDocument();
    fireEvent.click(zoomOutButton);

    const resetButton = screen.getByLabelText('Reset');
    expect(resetButton).toBeInTheDocument();
    fireEvent.click(resetButton);
  })

  it('should zoom fire events correctly when clicking the buttons', () => {
    const contextValue = {
      zoomLevel: 1,
      zoomIn: jest.fn(),
      zoomOut: jest.fn(),
      reset: jest.fn(),
    };

    const { container } = render(
      <MockZoomControlsContextProvider {...contextValue} >
        <ZoomControls />
      </MockZoomControlsContextProvider>
    );
    expect(container).not.toBeNull();

    const zoomInButton = screen.getByLabelText('Zoom In');
    expect(zoomInButton).toBeInTheDocument();
    fireEvent.click(zoomInButton);
    expect(contextValue.zoomIn).toHaveBeenCalledTimes(1);

    const zoomOutButton = screen.getByLabelText('Zoom Out');
    expect(zoomOutButton).toBeInTheDocument();
    fireEvent.click(zoomOutButton);
    expect(contextValue.zoomOut).toHaveBeenCalledTimes(1);

    const resetButton = screen.getByLabelText('Reset');
    expect(resetButton).toBeInTheDocument();
    fireEvent.click(resetButton);
    fireEvent.click(resetButton);
    expect(contextValue.reset).toHaveBeenCalledTimes(2);
  })
})