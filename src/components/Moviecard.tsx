
import { Star } from "lucide-react"
import Image from "next/image"
import { Card, CardContent } from "./ui/Movie"
import CardOne from "./CardOne"
import { title } from "process"
interface propstype {
    imageSrc: string,
    title: string
}
const Moviecard = ({ imageSrc, title }: propstype) => {

    return (
        <Card>
            <CardContent>
                <Image src={imageSrc} width={230} height={340} alt="dearsant image" />
                <p className="flex items-center gap-1">
                    <Star fill="yellow" stroke="yellow" />
                    <span>6.9</span>/10
                </p>
                <p className="font-semibold flex flex-wrap w-[213.73px] h-[56px]">{title}</p>
            </CardContent>
        </Card >
    )
}
export default Moviecard
