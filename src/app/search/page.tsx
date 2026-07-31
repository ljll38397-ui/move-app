"use client"
import Image from "next/image";
import { Divide } from "lucide-react";
import { Ultra } from "next/font/google";
import { useEffect, useState } from "react"
import { useParams, useSearchParams } from "next/navigation";
import axios from "axios";

const Pages = () => {

    const movies = [
        { title: "Avatar", rating: 7.8 },
        { title: "Inception", rating: 8.8 },
        { title: "Interstellar", rating: 8.6 },
        { title: "The Avengers", rating: 8.0 },
        { title: "Ant-Man", rating: 7.3 }
    ];
    const updateMovies = movies.map((movie, index) => {

        if (movie.rating >= 8)
            return <p key={index}>⭐︎{movie.title}</p>

        else {
            return <p key={index}>{movie.title}</p>
        }

    });
    console.log(updateMovies)
    return <div>
        <h3>kino jagsaalt</h3>
        {updateMovies}
    </div>


    // const updateMovies = movies.map((movie, index) => {
    //     if (movie.rating >= 8)
    //         return <li key={index}>⭐︎{movie.title}</li>
    //     else {
    //         return <li key={index}>{movie.title}</li>
    //     }


    //})
    // console.log(updateMovies)
    // return (<div>
    //     <h1>minii kinonii jagsaalt</h1>
    //     <ul>
    //         {updateMovies}
    //     </ul>
    // </div>

    // )


    // const movies = ["Avatar", "Inception", "Interstellar"];
    // return (<ul>
    //     {movies.map((movie, index) => {
    //         return <li key={index}>{movie}</li>
    //     })}
    // </ul>)

    // const [submittext, setSubmitext] = useState<string[]>([])
    // const handleonclick = () => {
    //     setSubmitext([...submittext, text])
    //     setText("")
    // }
    // return <div className="flex-col items-center justify-center">
    //     <input className="border" value={text} onChange={(e) => {
    //         setText(e.target.value)
    //         console.log(e.target.value)
    //     }} />
    //     <button className="w-20 h-10 border" onClick={handleonclick}>add</button>
    //     <div>
    //         {submittext.map((item, index) => {
    //             return <p key={index}>{item}</p>

    //         })}
    //     </div>


    // </div>
}
export default Pages  