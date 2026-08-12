"use client"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ChangeEvent, useEffect, useState } from "react"
import axios from "axios"
import { useRouter } from "next/navigation"

interface MovieType {
    id: number;
    title: string;
    poster_path?: string;
    vote_average?: number;
}

const Input = () => {
    const [inputvalue, setInputvalue] = useState("");
    // 💡 ТАЛБАР: useState-д MovieType[] гэж type зааж өгсөн.
    const [foundMovies, setfoundMovies] = useState<MovieType[]>([]);
    const [debouncedValue, setDebouncedValue] = useState("");
    const router = useRouter();

    const handleType = (event: ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target
        setInputvalue(value)
    };

    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedValue(inputvalue);
        }, 500);
        return () => {
            clearTimeout(handler);
        };
    }, [inputvalue]);

    useEffect(() => {
        if (debouncedValue.trim() === "") {
            setfoundMovies([]);
            return;
        }

        searchMovies(debouncedValue);
    }, [debouncedValue]);

    const searchMovies = async (word: string) => {
        try {
            const response = await axios.get(
                `https://api.themoviedb.org/3/search/movie?query=${word}&language=en-US&page=1`,
                {
                    headers: {
                        Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_TOKEN}`
                    }
                }
            );

            setfoundMovies(response.data.results);
        } catch (error) {
            console.error("Кино хайхад алдаа гарлаа:", error);
        }
    };

    return <div>
        <DropdownMenu open={foundMovies.length > 0}>
            <DropdownMenuTrigger asChild>
                <input
                    type="text"
                    className="w-[379px] h-[36px] border px-3 rounded-md outline-none"
                    placeholder="Search"
                    onChange={handleType}
                    value={inputvalue}
                />
            </DropdownMenuTrigger>
            {foundMovies.length > 0 && (
                <DropdownMenuContent className="w-[379px]" align="start">
                    <DropdownMenuGroup>
                        {foundMovies.map((movie: MovieType) => {
                            return (
                                <DropdownMenuItem
                                    key={movie.id}
                                    onSelect={() => {
                                        router.push(`/movie/${movie.id}`);
                                        setInputvalue("");
                                        setfoundMovies([]);
                                    }}
                                >
                                    {movie.title}
                                </DropdownMenuItem>
                            );
                        })}
                    </DropdownMenuGroup>
                </DropdownMenuContent>
            )}
        </DropdownMenu>
    </div>
}

export default Input