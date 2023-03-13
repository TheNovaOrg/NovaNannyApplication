import { RouterProvider } from 'react-router-dom';
import './App.css';
import { createRoutes } from './routes/routes';

function App() {

  return (
    <main>
      <RouterProvider router={createRoutes()}></RouterProvider>
    </main>
  )
}

export default App;
