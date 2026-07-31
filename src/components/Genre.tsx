"use client"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import axios from "axios"
import { useEffect, useState } from "react"
import { Button } from "./ui/button"
import { useRouter } from "next/navigation"

const Header = () => {
    const [genres, setGenres] = useState<any[]>([]);
    const router = useRouter();

    useEffect(() => {

        axios.get(`https://api.themoviedb.org/3/genre/movie/list?language=en`,

            {
                headers: {
                    Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_TOKEN}`
                }
            }).then(response => {
                setGenres(response.data.genres)
            });






    }, []);
    return <div>
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="outline">Genre</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-40" align="start">
                {genres.map((genre) => {
                    return <DropdownMenuItem key={genre.id} onClick={() => router.push(`/genres/${genre.id}`)}>
                        {genre.name}
                    </DropdownMenuItem>
                })}

            </DropdownMenuContent>
        </DropdownMenu>

    </div>





}
export default Header
