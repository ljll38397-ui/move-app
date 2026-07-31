"use client"

import axios from "axios";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react"
import Image from "next/image";
import { Star } from "lucide-react";
const Moviegenre = () => {
    const [moviegenres, setMoviegenres] = useState<any[]>([])
    const params = useParams();
    useEffect(() => {

        if (!params.id) return;
        axios.get(`https://api.themoviedb.org/3/discover/movie?language=en&with_genres=${params.id}&page=1`,

            {
                headers: {
                    Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_TOKEN}`
                }
            }).then(responce => {
                setMoviegenres(responce.data.results)
                console.log("irsen data:", responce.data.results)
            });

    }, [params.id])
    return (<div className="flex flex-wrap gap-5">
        {
            moviegenres.map((movie) => {
                return (
                    <div key={movie.id}>
                        <Image
                            src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
                            alt="poster image"
                            width={290}
                            height={428}

                        />
                        <div>{movie.title}</div>
                        <Star fill="yellow" stroke="yellow" />
                        <span>{movie?.vote_average}/10</span>
                    </div>)
            })
        }

    </div>
    )
}
export default Moviegenre













































// import Image from "next/image";

// interface PageProps {
//     params: {
//         id: string;
//     };
// }

// export default async function GenrePage({ params }: PageProps) {
//     const genreIds = params.id;

//     const res = await fetch(
//         `https://api.themoviedb.org/3/discover/movie?language=en&with_genres=${genreIds}&page=1`,
//         {
//             headers: {
//                 Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_TOKEN}`,
//             },
//             cache: "no-store",
//         }
//     );

//     const data = await res.json();
//     const movies = data.results || [];
//     console.log(data)
//     console.log("TOKEN:", process.env.TMDB_TOKEN);
//     console.log("RESULTS:", data.results);
//     return (
//         <div className="grid grid-cols-4 gap-4">
//             {data.results?.map((movie: any) => (
//                 <div key={movie.id}>
//                     <Image
//                         src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
//                         alt="poster image"
//                         width={290}
//                         height={428}
//                     />
//                     <p>{movie.title}</p>
//                 </div >
//             ))
//             }
//         </div >
//     );
// }