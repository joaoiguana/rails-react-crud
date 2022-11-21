import './App.css';
import Posts from './features/posts/Posts';
import Navbar from './features/navbar/Navbar'

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Posts />
    </div>
  );
}

export default App;
