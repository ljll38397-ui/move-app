"use client"
import Moviecard from "@/components/Moviecard";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/Movie";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Image from "next/image";
import { Play } from 'lucide-react';
import { title } from "process";
import { useState, useEffect } from "react";
import axios from "axios";
import { GroupMovie } from "@/components/GroupMovie";
import { Star } from "lucide-react";
import Header from "@/components/Genre";
import Input from "@/components/Searchinput";
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
    <div >
      <Carousel className=" w-[1440px]" >
        <CarouselContent>
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index}>
              <div className="p-1">
                <Card >
                  <div className="flex justify-center">
                    <Header></Header>
                    <Input />
                  </div>
                  <CardContent className="flex items-center justify-center p-6 relative  ">
                    <Image src={"/Feature.png"} width={1440} height={600} alt="Feature image " />
                    <div className=" absolute left-[140px] bottom-[158px ] gap-4">
                      <h5 className="text-white">Now Playing:</h5>
                      <h4 className="text-[36px] font-bold leading-[40px] tracking-[-0.9px] text-[#fff]" >Wicked</h4>
                      <p className="flex gap-2">
                        <Star fill="yellow" stroke="yellow" />
                        <span className="text-white">6.9/10</span>
                      </p>
                      <p className="w-[302px] h-[80px] text-[12px] not-italic font-normal leading-[16px] text-white">Elphaba, a misunderstood young woman because of her green skin, and Glinda, a popular girl, become friends at Shiz University in the Land of Oz. After an encounter with the Wonderful Wizard of Oz, their friendship reaches a crossroads. </p>
                      <Button className="bg-[#f4f4f5] text-black"> <svg xmlns="http://www.w3.org/2000/" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-play-icon lucide-play"><path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z" /></svg> Watch Trailer</Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      <div>

        <GroupMovie title="upcoming" />
        <GroupMovie title="top_rated" />
        <GroupMovie title="popular" />



      </div>


    </div >

  )
}
export default Home