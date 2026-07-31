
import { Star } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Card, CardContent } from "./ui/Movie"
import type { movieType } from "@/app/page"


const Moviecard = ({ movie }: { movie: movieType }) => {

    return (
        <Link href={`/detail/${movie.id}`}>
            <Card>
                <CardContent  >
                    <Image src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} alt="card image" width={230} height={340} />
                    <p className="flex items-center gap-1">
                        <Star fill="yellow" stroke="yellow" />
                        <span>{movie.vote_average}/10</span>
                    </p>
                    <p className="font-semibold flex flex-wrap w-[213.73px] h-[56px]">{movie.title}</p>
                </CardContent>
            </Card >


        </Link>
    )
}
export default Moviecard
