import '../styles/App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './Main';
import Quiz from './Quiz';
import Result from './Result';

/* React routes */
const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>
  },
  {
    path: '/quiz',
    element: <Quiz></Quiz>
  },
  {
    path: '/result',
    element: <Result></Result>
  }
])

function App() {
  // TODO change the styles in ../styles/App.css
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
