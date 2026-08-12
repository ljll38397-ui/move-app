"use client";
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
} from "@/components/ui/pagination";


interface TMDBResponse {
    results: movieType[];
    total_pages: number;
    total_results: number;
    page: number;
}

const Upcoming = () => {
    const params = useParams();

    const category = (params?.catergory || params?.category) as string;

    const [movies, setMovies] = useState<TMDBResponse | null>(null);
    const [page, setPage] = useState(1);

    const nextPage = () => {
        if (movies && page < movies.total_pages) {
            setPage((prev) => prev + 1);
        }
    };

    const prevPage = () => {
        if (page > 1) {
            setPage((prev) => prev - 1);
        }
    };

    useEffect(() => {
        if (!category) return;

        axios
            .get(
                `https://api.themoviedb.org/3/movie/${category}?language=en-US&page=${page}`,
                {
                    headers: {
                        Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_TOKEN}`,
                    },
                }
            )
            .then((response) => {
                setMovies(response.data);
            })
            .catch((error) => {
                console.error("Fetch error:", error);
            });
    }, [page, category]);

    return (
        <div className="w-full max-w-[1280px] mx-auto px-4 py-6 flex flex-col gap-6">

            <div className="flex justify-between items-center">
                <h1 className="text-2xl font-bold capitalize">
                    {category?.replace("_", " ")}
                </h1>
            </div>


            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 w-full">
                {movies?.results &&
                    movies.results.map((movie: movieType) => (
                        <Moviecard key={movie.id} movie={movie} />
                    ))}
            </div>


            {movies && movies.total_pages > 1 && (
                <Pagination className="mt-8">
                    <PaginationContent>
                        <PaginationItem>
                            <PaginationPrevious
                                href="#"
                                onClick={(e) => {
                                    e.preventDefault();
                                    prevPage();
                                }}
                            />
                        </PaginationItem>

                        <PaginationItem>
                            <PaginationLink href="#" isActive>
                                {page}
                            </PaginationLink>
                        </PaginationItem>

                        {page + 1 <= movies.total_pages && (
                            <PaginationItem>
                                <PaginationLink
                                    href="#"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        setPage(page + 1);
                                    }}
                                >
                                    {page + 1}
                                </PaginationLink>
                            </PaginationItem>
                        )}

                        {page + 2 <= movies.total_pages && (
                            <PaginationItem>
                                <PaginationLink
                                    href="#"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        setPage(page + 2);
                                    }}
                                >
                                    {page + 2}
                                </PaginationLink>
                            </PaginationItem>
                        )}

                        {page + 2 < movies.total_pages && (
                            <PaginationItem>
                                <PaginationEllipsis />
                            </PaginationItem>
                        )}

                        {movies.total_pages > page + 2 && (
                            <PaginationItem>
                                <PaginationLink
                                    href="#"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        setPage(movies.total_pages);
                                    }}
                                >
                                    {movies.total_pages}
                                </PaginationLink>
                            </PaginationItem>
                        )}

                        <PaginationItem>
                            <PaginationNext
                                href="#"
                                onClick={(e) => {
                                    e.preventDefault();
                                    nextPage();
                                }}
                            />
                        </PaginationItem>
                    </PaginationContent>
                </Pagination>
            )}
        </div>
    );
};

export default Upcoming;
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