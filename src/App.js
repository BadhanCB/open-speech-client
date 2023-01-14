import './App.css';
// import Home from './pages/Home/Home';
import SinglePost from './pages/SinglePost/SinglePost';
import Topbar from './components/Topbar/Topbar'

function App() {
  return (
    <div className="App">
      <Topbar />
      {/* <Home /> */}
      <SinglePost />
    </div>
  );
}

export default App;
