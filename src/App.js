import './App.css';
import Topbar from './components/Topbar/Topbar'
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
// import UserSettings from './pages/UserSettings/UserSettings';
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
      {/* <UserSettings /> */}
      {/* <Login /> */}
      <Register />
    </div>
  );
}

export default App;
