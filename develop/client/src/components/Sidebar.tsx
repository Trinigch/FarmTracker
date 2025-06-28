// src/components/Sidebar.tsx
import { Link } from "react-router-dom";
import styled from "styled-components";

const SidebarContainer = styled.aside`
  width: 240px;
  min-height: 100vh;
  background-color: #fdf8f4;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  border-right: 2px solid #d9a7b5;

  @media (max-width: 768px) {
    flex-direction: row;
    width: 100%;
    height: auto;
    min-height: auto;
    border-right: none;
    border-bottom: 2px solid #d9a7b5;
    justify-content: center;
    flex-wrap: wrap;
  }

  a {
    font-weight: bold;
    color: #4a2e19;
    text-decoration: none;
    background: rgba(255, 255, 255, 0.6);
    padding: 0.5rem 1rem;
    border-radius: 8px;
    transition: background 0.2s;

    &:hover {
      background: #d9a7b5;
      color: white;
    }
  }
`;

export default function Sidebar() {
  return (
<SidebarContainer>
  <Link to="/aboutFarm">🐑 All Animals</Link>
  <Link to="/AnimalRecord">➕ Add Animal</Link>
  <Link to="/animal/seguimiento">💉 Record Illness</Link>
  <Link to="/fallecimiento">⚰️ Record Death</Link>
  <Link to="/historial">📋 Medical History</Link>
  <Link to="/buscar">🔍 Search / Filter</Link>
</SidebarContainer>
  );
}