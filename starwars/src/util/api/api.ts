import { Film } from "@/types/Film";

export async function fetchData(): Promise<Film> {
  try {
    const response = await fetch("https://swapi.info/api/films");
    const dados = response.json();
    return dados;
  } catch (error) {
    throw error;
  }
}
