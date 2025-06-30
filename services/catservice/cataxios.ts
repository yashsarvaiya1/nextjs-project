import axios from "axios";

export const catAxios = axios.create({
    baseURL: process.env.NEXT_PUBLIC_CAT_FACT_URL,
    headers: {
        "Content-Type": "application/json",
    },
})