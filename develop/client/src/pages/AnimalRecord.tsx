// src/pages/RegistroAnimal.tsx
import { useState } from "react";
import styled from "styled-components";

const FormContainer = styled.div`
  max-width: 600px;
  margin: auto;
  background-color: rgba(255, 255, 255, 0.85);
  padding: 2rem;
  border-radius: 16px;
  box-shadow: 0 0 15px rgba(0,0,0,0.1);
`;

const Title = styled.h2`
  font-family: "Playfair Display", serif;
  font-size: 2rem;
  color: #4a2e19;
  margin-bottom: 1.5rem;
  text-align: center;
`;

const Field = styled.div`
  margin-bottom: 1rem;
`;

const Label = styled.label`
  display: block;
  font-weight: bold;
  margin-bottom: 0.5rem;
  color: #4a2e19;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.5rem;
  border-radius: 8px;
  border: 1px solid #ccc;
`;

const Select = styled.select`
  width: 100%;
  padding: 0.5rem;
  border-radius: 8px;
  border: 1px solid #ccc;
`;

const Button = styled.button`
  background-color: #4a2e19;
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 10px;
  font-weight: bold;
  border: none;
  cursor: pointer;
  display: block;
  margin: 1rem auto 0 auto;

  &:hover {
    background-color: #d9a7b5;
    color: #4a2e19;
  }
`;

function AnimalRecord() {
  const [formData, setFormData] = useState({
    nombre: "",
    especie: "",
    fecha_nacimiento: "",
    padre_id: "",
    madre_id: "",
    estado: "alive",
    observaciones: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Submitted data:", formData);
    // TODO: Send to backend
  };

  return (
    <FormContainer>
      <Title>➕ Add New Animal</Title>
      <form onSubmit={handleSubmit}>
        <Field>
          <Label>📝 Name</Label>
          <Input name="nombre" value={formData.nombre} onChange={handleChange} />
        </Field>
        <Field>
          <Label>🐾 Species</Label>
          <Select name="especie" value={formData.especie} onChange={handleChange}>
            <option value="">Select</option>
            <option value="oveja">🐑 Sheep</option>
            <option value="cabra">🐐 Goat</option>
            <option value="gallina">🐔 Chicken</option>
            <option value="pavo">🦃 Turkey</option>
          </Select>
        </Field>
        <Field>
          <Label>📅 Date of Birth</Label>
          <Input type="date" name="fecha_nacimiento" value={formData.fecha_nacimiento} onChange={handleChange} />
        </Field>
        <Field>
          <Label>👨‍🦱 Father ID</Label>
          <Input name="padre_id" value={formData.padre_id} onChange={handleChange} />
        </Field>
        <Field>
          <Label>👩‍🦰 Mother ID</Label>
          <Input name="madre_id" value={formData.madre_id} onChange={handleChange} />
        </Field>
        <Field>
          <Label>📍 Status</Label>
          <Select name="estado" value={formData.estado} onChange={handleChange}>
            <option value="alive">Alive</option>
            <option value="deceased">Deceased</option>
            <option value="under treatment">Under Treatment</option>
          </Select>
        </Field>
        <Field>
          <Label>📝 Notes</Label>
          <Input name="observaciones" value={formData.observaciones} onChange={handleChange} />
        </Field>
        <Button type="submit">Save</Button>
      </form>
    </FormContainer>
  );
}
export default AnimalRecord;