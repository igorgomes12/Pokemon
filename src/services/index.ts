import axios from "axios";
import { responsePokemon } from "./types";

const baseUrl = 'https://pokeapi.co/api/v2/pokemon'

export const servicePokemon = async (pokemon:string): Promise <responsePokemon> => {
    const result = await axios.get<responsePokemon>(`${baseUrl}/${pokemon}`)
    .then((res)=>{
      console.log(res)

      return res.data
    })
    .catch((err)=>{
      return err
    })
    return result
  }

