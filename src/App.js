import './App.css';
// import Home from './pages/Home/Home';
// import SinglePost from './pages/SinglePost/SinglePost';
import Topbar from './components/Topbar/Topbar'
import WritePost from './pages/WritePost/WritePost';

function App() {
  return (
    <div className="App">
      <Topbar />
      {/* <Home /> */}
      {/* <SinglePost /> */}
      <WritePost />
    </div>
  );
}

export default App;
