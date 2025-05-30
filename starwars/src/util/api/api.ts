import { Film } from "@/types/Film";
import { People } from "@/types/People";

export async function fetchFilms(): Promise<Film> {
  try {
    const response = await fetch("https://swapi.info/api/films");
    const dados = response.json();
    return dados;
  } catch (error) {
    throw error;
  }
}

export async function fetchPeople(): Promise<People> {
  try {
    const response = await fetch("https://swapi.info/api/people");
    const dados = response.json();
    return dados;
  } catch (error) {
    throw error;
  }
}
