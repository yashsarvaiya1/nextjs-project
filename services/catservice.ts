import { catAxios } from "./cataxios";
import { CatFact } from "@/models/catFact";

export const getCatFact = async (): Promise<CatFact> => {
    const res = await catAxios.get<CatFact>("/fact");
    return res.data
} 