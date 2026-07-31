"use client"
import Image from "next/image";
import { useParams, useRouter, useSearchParams } from "next/navigation"
import { useEffect, useState } from "react";
import axios from "axios";
import { Key, Star } from "lucide-react";
import React from 'react'
import ReactPlayer from 'react-player'
import Link from "next/link";

interface genreType {
    id: number
    name: string
}
interface productionType {
    id: number
    logo_path: string
    name: string
    origin_country: string
}
interface spokenType {
    english_name: string
    iso_639_1: string
    name: string
}
interface countriesType {
    iso_3166_1: string
    name: string
}
interface movieDetailtype {
    adult: boolean
    backdrop_path: string
    belongs_to_collection: null
    budget: number
    genres: genreType[]
    homepage: string
    id: number
    imdb_id: number
    origin_country: string[]
    original_language: string
    overview: string
    popularity: number
    poster_path: string
    production_companies: productionType[]
    production_countries: countriesType[]
    release_date: number
    revenue: number
    runtime: number
    softcore: boolean
    spoken_languages: spokenType[]
    status: string
    tagline: string
    title: string
    video: false
    vote_average: number
    vote_count: number
}


const Demo = () => {
    const params = useParams();
    const [movie, setMovie] = useState<movieDetailtype>();
    const [crew, setCrew] = useState<any[]>([]);
    const [cast, setCast] = useState<any[]>([]);
    const [trailerkey, setTrailerkey] = useState("");
    const [similar, setSimilar] = useState<any>([]);
    const searchParams = useSearchParams();

    useEffect(() => {

        if (!params.id) return;
        axios.get(`https://api.themoviedb.org/3/movie/${params.id}`,

            {
                headers: {
                    Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_TOKEN}`

                }

            }).then(response => {

                setMovie(response.data);

            });




        axios.get(`https://api.themoviedb.org/3/movie/${params.id}/credits`,

            {
                headers: {
                    Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_TOKEN}`
                }
            }).then(response => {

                const mainStaff = response.data.crew.filter((member: any) =>
                    member.job === "Director" || member.job === "Writer")
                setCrew(mainStaff);

            });



        axios.get(`https://api.themoviedb.org/3/movie/${params.id}/credits`,

            {
                headers: {
                    Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_TOKEN}`
                }
            }).then(response => {
                const Stars = response.data.cast.slice(0, 3)
                setCast(Stars);

            });



        axios.get(`https://api.themoviedb.org/3/movie/${params.id}/videos?language=en-US`,

            {
                headers: {
                    Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_TOKEN}`
                }
            }).then(response => {
                console.log(response, "data")
                setTrailerkey(response.data.results[1]?.key);

            });

        axios.get(`https://api.themoviedb.org/3/movie/${params.id}/similar`,

            {
                headers: {
                    Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_TOKEN}`
                }
            }).then(response => {
                const similermovie = response.data.results.slice(0, 4)
                setSimilar(similermovie);


            });

    }, [params.id])




    return <div className="w-full">

        <div className="flex justify-between" >
            <div >
                <h1 className="font-bold text-[36px] leading-[40px] tracking=[-2.5% text-[#09090b]">{movie?.title}</h1>
                <p>{movie?.release_date}</p>

            </div>
            <div>
                <p>Rating</p>
                <p className="flex  items-center gap-1">
                    <Star fill="yellow" stroke="yellow" />
                    <span>{movie?.vote_average}/10</span>

                </p>
                <span>{movie?.vote_count}</span>
            </div>

        </div>



        <div className="flex gap-8">

            {movie?.poster_path ? (
                <Image
                    src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
                    alt="poster image"
                    width={290}
                    height={428}
                />
            ) : (

                <div className="w-[290px] h-[428px] bg-gray-800 animate-pulse rounded-lg flex items-center justify-center text-gray-500">

                </div>
            )}


            {movie?.backdrop_path ? (
                <Image
                    src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
                    alt="backdrop image"
                    width={760}
                    height={428}
                />
            ) : (
                <div className="w-[760px] h-[428px] bg-gray-800 animate-pulse rounded-lg flex items-center justify-center text-gray-500">

                </div>
            )}
        </div>


        {
            movie?.genres?.map((genre) => {
                return <span key={genre.id}
                    className=" inline-flex items-center px-3 py-1 text-sm font-medium rounded-full bg-white text-black border border-gray-100 whitespace-nowrap  "
                >{genre.name}
                </span>


            })
        }
        <div className=" ">
            <p >{movie?.overview}</p>
        </div>
        <div>
            {crew?.map((member: any, index: number) => {
                return <div key={`${member.name}${index}`}>
                    <p>{member.job}: <strong>{member.name}</strong></p>

                </div>
            })}
        </div>
        <div className="flex">
            <h3>Stars:</h3>
            {cast?.map((actor: any, index: number) => {
                return <div key={`cast-${index}`}  >
                    <p>{actor.name}<strong>{actor.character}</strong>
                        {index < cast.length - 1 ? ", " : ""}
                    </p>
                </div>
            })}
            <div>
                {/* <ReactPlayer src={`https://www.youtube.com/watch?v=${trailerkey}`} width={760} height={428} /> */}
            </div>

        </div>



        <h3 className="text-[24px] font-semibold leading-[32px] tracking-[-0.6px]">More like this</h3>
        <div className="flex gap-4 ">


            {similar.map((movie: any) => {

                return <div key={movie.id} >
                    <Link href={`/detail/${movie.id}`}>
                        <Image
                            src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
                            alt="poster image"
                            width={290}
                            height={428}

                        />

                        <div>{movie?.title}</div>
                    </Link>
                </div>
            })}


        </div>

    </div >

}

export default Demo
