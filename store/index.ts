import {create} from "zustand";
import {getAllPosts, getPostsBySearch} from "@/services/getPosts";
import {createNewSkill, getAllMyApi, getMyApiBySearch} from "@/services/getSkills";
import {Skills} from "@/app/api/skills/skills";

type UsePosts = {
    posts: any[];
    loading: boolean;
    getAllPosts: () => Promise<void>;
    getPostsBySearch: (value: string) => Promise<void>;
}

export const usePosts = create<UsePosts>()((set) => ({
    posts: [],
    loading: false,
    getAllPosts: async () => {
        set({loading: true})
        const posts = await getAllPosts()
        set({posts, loading: false})
    },
    getPostsBySearch: async (search) => {
        set({loading: true})
        const posts = await getPostsBySearch(search)
        set({posts, loading: false})
    }
}))

type UseSkills = {
    skills: Skills[];
    loading: boolean;
    getAllMyApi: () => Promise<void>;
    getMyApiBySearch: (value: string) => Promise<void>;
    createSkill: (newSkill: Skills) => Promise<void>;
}

export const useSkills = create<UseSkills>()((set) => ({
    skills: [],
    loading: false,
    getAllMyApi: async () => {
        set({loading: true})
        const skills = await getAllMyApi()
        set({skills, loading: false})
    },
    getMyApiBySearch: async (search) => {
        set({loading: true})
        const skills = await getMyApiBySearch(search)
        set({skills, loading: false})
    },
    createSkill: async (newSkill) => {
        set({loading: true})
        const createdSkill = await createNewSkill(newSkill);
        set((state) => ({skills: [...state.skills, createdSkill], loading: false}))
    },
}))