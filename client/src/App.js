import { RouterProvider } from 'react-router-dom';
import './App.css';
import { createRoutes } from './routes/routes';
import Header from './components/Header';
import Footer from './components/Footer';


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
