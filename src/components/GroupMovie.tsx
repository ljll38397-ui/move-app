"use client"
import Moviecard from "./Moviecard"
import { movieType } from "@/app/page"
import { useEffect, useState } from "react"
import { Button } from "./ui/button"

import axios from "axios"
import { useRouter } from "next/navigation"
export const GroupMovie = ({ title }: { title: string, }) => {
    const router = useRouter();
    const [movies, setMovies] = useState<movieType[]>([]);
    const Seepage = () => {
        router.push(title)
    }
    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/movie/${title}?language=en-US&page=1`,

            {
                headers: {
                    Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_TOKEN}`
                }
            }).then(response => {
                setMovies(response.data.results);
            });
    }, [title]);


    return <div className="flex flex-col gap-4 w-full">
        <div className="flex justify-between items-center" >

            <p>{title}</p>
            <button onClick={Seepage}>See more</button>
        </div>
        <div className="grid grid-cols-5 gap-4 ">
            {movies.map((movie) => {
                return <Moviecard key={movie.id} movie={movie} />
            })}

        </div>

    </div >


}
