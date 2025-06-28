import { Outlet } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Header from './components/Header';
import styled from "styled-components";
import Footer from './components/Footer';

// // Estilos
// const AppContainer = styled.div`
//   background: linear-gradient(to bottom, #fdf8f4, #fff);
//   min-height: 100vh;
//   display: flex;
//   flex-direction: column;
//   justify-content: space-between;
//   font-family: "Playfair Display", serif;
// `;
const Layout = styled.div`
  display: flex;
  flex-direction: row;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

// const MainContent = styled.main`
//   flex: 1;
//   padding: 0px;
//   animation: fadeIn 0.5s ease-in-out;

//   @keyframes fadeIn {
//     from {
//       opacity: 0;
//       transform: translateY(10px);
//     }
//     to {
//       opacity: 1;
//       transform: translateY(0);
//     }
//   }
// `;

function App() {
  return (
      <>
      <Header />
      <Layout>
        <Sidebar />
        <main style={{ flex: 1, padding: "1rem" }}>
          <Outlet />
        </main>
      </Layout>
      <Footer />
    </>
  );
}

export default App;
