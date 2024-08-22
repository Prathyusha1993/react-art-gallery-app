import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Login from './components/Login';
import About from './components/About';
import Shop from './components/Shop';
import { Provider } from 'react-redux';
import appStore from './utils/appStore';

const App = () => {
  const appRouter = createBrowserRouter(
    [
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/',
        element: <><Header /> <Home /></>
      },
      {
        path: '/about',
        element: <><Header /><About /></>
      },
      {
        path: '/shop',
        element: <><Header /><Shop /></>
      }
    ]
  )

  return (
    <div className="App">
      {/* <Header /> */}
      <Provider store={appStore}>
        <RouterProvider router={appRouter} />
      </Provider>
    </div>
  );
}

export default App;
