import {createContext} from "react"
import { Anime } from "../interface";

const AnimeContext = createContext<Anime>({});

export default AnimeContext;