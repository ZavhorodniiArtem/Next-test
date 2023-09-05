import axios from "axios";
import {Skills} from "@/app/api/skills/skills";

export const getAllMyApi = async () => {
    const res = await axios.get("/api/skills");
    return res.data;
};

export const getMyApiBySearch = async (search: string) => {
    const res = await axios.get(`/api/skills?q=${search}`);
    return res.data;
};

export const createNewSkill = async (newSkill: Skills) => {
    try {
        const res = await axios.post('/api/skills', newSkill);
        return res.data.body;
    } catch (error) {
        console.error('Error creating skill:', error);
        throw error;
    }
};