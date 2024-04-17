import { Badge } from "./ui/badge"

export function splitTags(tags:string){
    return tags.split(",").map((tag)=>tag.trim())
}
export function TagsList({tags}: { tags: string[] }) {
    return(
        <div className="flex flex-warp gap-2 text-center text-sm">
            {tags.map((lang)=>(
            <Badge className="w-fit" key={lang}>{lang}</Badge>
            ))}
            </div>
    )
}
