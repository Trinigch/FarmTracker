import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';
import './index.css';
import AnimalRecord from "./pages/AnimalRecord.tsx";
import App from './App.tsx';
import ErrorPage from './pages/ErrorPage.tsx';
import Sheep from './pages/Sheep.tsx';
import Goat from './pages/goat.tsx'
import Chickenandmore  from './pages/chickenandmore.tsx'
import AboutFarm from './pages/aboutFarm.tsx';


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
       {
        index: true,
        element: <Navigate to="aboutFarm" replace />,
      },     
      {
        path: 'aboutFarm',
        element: < AboutFarm  />,
      },
        {
        path: 'sheep',
        element: < Sheep  />,
      },
        {
        path: 'goat',
        element: < Goat/>,
      },
        {
        path: 'chickenandmore',
        element: < Chickenandmore/>,
      },
      {
        path: 'AnimalRecord',
        element: <AnimalRecord /> // debes crear esta página
      },
      // {
      //   path: 'animal/seguimiento',
      //   element: <SeguimientoAnimal /> // página para registrar enfermedad
      // },
      // {
      //   path: 'fallecimiento',
      //   element: <RegistrarFallecimiento />
      // },
     
  
    ],
  },
])

const rootElement = document.getElementById('root');
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(<RouterProvider router={router} />);
}
