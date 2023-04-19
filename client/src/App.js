import { RouterProvider } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import { createRoutes } from './routes/routes';

function App() {

  return (
    <>
      <Header />
      <main>
        <RouterProvider router={createRoutes()}></RouterProvider>
      </main>
      <Footer />
    </>
  )
}

export default App;
