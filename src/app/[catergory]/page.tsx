"use client"
import { useEffect, useState } from "react";
import { movieType } from "../page";
import axios from "axios";
import Moviecard from "@/components/Moviecard";
import { useParams } from "next/navigation";
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination"
const Upcoming = () => {
    const params = useParams();
    const [movies, setMovies] = useState<{ results: movieType[] } | null>(null);
    const [isloading, setIsloading] = useState(true)
    const [page, setPage] = useState(1)
    const nextPage = () => {
        setPage(page + 1)
    };

    useEffect(() => {

        axios.get(`https://api.themoviedb.org/3/movie/${params.catergory}?language=en-US&page=${page}`,

            {
                headers: {
                    Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_TOKEN}`
                }
            }).then(response => {
                setMovies(response.data);
            });
    }, [page, params.catergory]);


    return <div className="w-full gap-4">
        <div className="flex justify-between" >

            <p>{params.catergory}</p>

        </div>
        <div className="flex flex-wrap w-[1350px] gap-2 ">


            {movies?.results && movies.results.map((movie: any) => {
                return <Moviecard key={movie.id} movie={movie} />
            })}.
        </div>

        <Pagination>
            <PaginationContent>
                <PaginationItem>
                    <PaginationPrevious href="#" />
                </PaginationItem>
                <PaginationItem >
                    <PaginationLink onClick={() => setPage(page)} href="#" isActive
                    >{page}</PaginationLink>
                </PaginationItem>
                <PaginationItem >
                    <PaginationLink onClick={() => setPage(page + 1)} href="#"
                    >{page + 1}</PaginationLink>
                </PaginationItem>

                <PaginationItem >
                    <PaginationLink onClick={() => setPage(page + 2)} href="#"
                    >{page + 2}</PaginationLink>
                </PaginationItem>

                <PaginationItem>
                    <PaginationEllipsis />
                </PaginationItem>
                <PaginationItem >
                    <PaginationLink onClick={() => setPage(movies?.total_pages)} href="#"
                    >{movies?.total_pages}</PaginationLink>
                    <PaginationNext onClick={nextPage} href="#" />
                </PaginationItem>
            </PaginationContent>
        </Pagination>

    </div >

}
export default Upcoming
{/* <PaginationItem> */ }
{/* <PaginationLink onClick={() => setPage(1)} href="#" isActive=
                        {page === 1}>1</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink onClick={() => setPage(2)} href="#" isActive={page === 2} >
                        2
                    </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink onClick={() => setPage(3)} href="#" isActive={page === 3} >3</PaginationLink>
                </PaginationItem> */}




{/* 
                {Array.from({ length: movies.total_pages }).map((_, index) => {
                    return <PaginationItem key={index + Math.random}>
                        <PaginationLink onClick={() => setPage(index + 1)} href="#" isActive=
                            {page === 1}>{index + 1}</PaginationLink>
                    </PaginationItem>


                })} */}