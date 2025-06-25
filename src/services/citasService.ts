import axios from 'axios';
import { Cita } from '../models/Cita';

const API_URL = 'http://localhost:3000/citas'; // Cambiar l backend

export const getCitas = () => axios.get<Cita[]>(API_URL);
export const getCitaById = (id: string) => axios.get<Cita>(`${API_URL}/${id}`);
export const createCita = (data: Cita) => axios.post(API_URL, data);
export const updateCita = (id: string, data: Cita) => axios.put(`${API_URL}/${id}`, data);
export const deleteCita = (id: string) => axios.delete(`${API_URL}/${id}`);
