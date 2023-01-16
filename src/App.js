import './App.css';
import Topbar from './components/Topbar/Topbar'
import UserSettings from './pages/UserSettings/UserSettings';
// import Home from './pages/Home/Home';
// import SinglePost from './pages/SinglePost/SinglePost';
// import WritePost from './pages/WritePost/WritePost';

function App() {
  return (
    <div className="App">
      <Topbar />
      {/* <Home /> */}
      {/* <SinglePost /> */}
      {/* <WritePost /> */}
      <UserSettings />
    </div>
  );
}

export default App;
