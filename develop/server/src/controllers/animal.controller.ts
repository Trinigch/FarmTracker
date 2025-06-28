import { Request, Response } from 'express';
import { getPool } from '../config/connection';

export const crearAnimal = async (req: Request, res: Response) => {
  const { nombre, especie, fecha_nacimiento, padre_id, madre_id, observaciones } = req.body;
  const pool = await getPool();
  const conn = await pool.getConnection();

  try {
    await conn.execute(
      `BEGIN registrar_nacimiento(:nombre, :especie, :fecha_nac, :padre_id, :madre_id, :observaciones); END;`,
      { nombre, especie, fecha_nac: new Date(fecha_nacimiento), padre_id, madre_id, observaciones }
    );
    res.status(200).json({ message: 'Animal registrado correctamente.' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error registrando el animal.' });
  } finally {
    await conn.close();
  }
};