import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Login from './components/Login';

const App = () => {
  const appRouter = createBrowserRouter(
    [
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/home',
        element: <><Header /> <Home /></>
      }
    ]
  )

  return (
    <div className="App">
      {/* <Header /> */}
      <RouterProvider router={appRouter}/>
    </div>
  );
}

export default App;
