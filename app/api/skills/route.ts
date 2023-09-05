import {NextResponse} from "next/server";
import {Request} from "next/dist/compiled/@edge-runtime/primitives/fetch";
import {skills} from "@/app/api/skills/skills";

export async function GET(req: Request) {
    const {searchParams} = new URL(req.url)
    const query = searchParams.get("q")
    let currentSkills = skills;

    if (query) {
        currentSkills = skills.filter(skill => skill.skill.toLowerCase().includes(query.toLowerCase()))
    }

    return NextResponse.json(currentSkills)
}

export async function POST(req: Request) {
    const body = await req.json()
    return NextResponse.json({body})
}