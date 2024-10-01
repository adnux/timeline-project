import './App.css';
import TimelineContainer from './components/TimelineContainer/TimelineContainer';
import timelineItems from './timelineItems';

function App() {
  return (
    <div>
      <h2>Start editing to see some magic happen {'\u2728'}</h2>
      <h3>{timelineItems.length} timeline items to render</h3>
      <TimelineContainer items={timelineItems} />
    </div>
  );
}

export default App;
