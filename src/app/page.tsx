"use client"
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/Movie";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Image from "next/image";
import { GroupMovie } from "@/components/GroupMovie";
import { Play, Star } from "lucide-react";
import Header from "@/components/Genre";
export interface movieType {
  "adult": boolean,
  "backdrop_path": string,
  "genre_ids": number[],
  "id": number,
  "title": string,
  "original_language": string,
  "original_title": string,
  "overview": string,
  "popularity": number,
  "poster_path": string,
  "release_date": string,
  "softcore": boolean,
  "video": boolean,
  "vote_average": number,
  "vote_count": number,
}

const Home = () => {

  return (
    <div className="w-full min-h-screen bg-white text-black pb-16 font-sans">
      {/* Header & Input хэсэг */}
      <div className=" flex justify-center px-4   ">
        <Header />
        <input type="text" className="border rounded-xl" />
      </div>

      <div className="max-w-[1280px] mx-auto px-4 sm:px-8">

        <div className="relative my-4">
          <Carousel className="w-full">
            <CarouselContent>
              {Array.from({ length: 5 }).map((_, index) => (
                <CarouselItem key={index}>
                  <Card className="border-none shadow-none rounded-[16px] overflow-hidden">
                    <CardContent className="p-0 relative w-full h-[480px] sm:h-[540px]">

                      <Image
                        src="/Feature.png"
                        fill
                        priority
                        className="object-cover object-center"
                        alt="Feature image"
                      />

                      {/* Текст ба мэдээллийн хэсэг */}
                      <div className="absolute left-8 sm:left-14 top-1/2 -translate-y-1/2 z-10 flex flex-col gap-3 max-w-[340px] text-white drop-shadow-md">
                        <span className="text-[14px] font-medium text-white/90">
                          Now Playing:
                        </span>
                        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
                          Wicked
                        </h1>

                        <div className="flex items-center gap-1.5 my-0.5">
                          <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                          <span className="text-sm font-semibold">6.9</span>
                          <span className="text-xs text-white/70">/10</span>
                        </div>

                        <p className="text-[12px] leading-[18px] text-white/90 font-normal line-clamp-4">
                          Elphaba, a misunderstood young woman because of her green skin, and Glinda, a popular girl, become friends at Shiz University in the Land of Oz. After an encounter with the Wonderful Wizard of Oz, their friendship reaches a crossroads.
                        </p>

                        <Button className="mt-2 bg-white text-black hover:bg-gray-100 font-semibold rounded-lg px-4 py-2 text-xs w-fit flex items-center gap-2 shadow border-none">
                          <Play className="w-3.5 h-3.5 fill-black" /> Watch Trailer
                        </Button>
                      </div>


                      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
                        <div className="w-2 h-2 rounded-full bg-white opacity-40"></div>
                        <div className="w-2 h-2 rounded-full bg-white"></div>
                        <div className="w-2 h-2 rounded-full bg-white opacity-40"></div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>


            <CarouselNext className="right-4 bg-white text-black hover:bg-white/90 border-none shadow-md w-10 h-10 rounded-full flex items-center justify-center" />
          </Carousel>
        </div>


        <div className="flex flex-col w-full max-w-[1280px] mx-auto px-4 sm:px-8">
          <GroupMovie title="upcoming" />
          <GroupMovie title="top_rated" />
          <GroupMovie title="popular" />
        </div>
      </div>
    </div >
  )
}
export default Home