import Moviecard from "@/components/Moviecard";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/Movie";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Image from "next/image";

import { title } from "process";

export default function Home() {
  return (
    <div >
      <div className="flex justify-center " >
        <Carousel className=" w-[1300px]" >
          <CarouselContent>
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem key={index}>
                <div className="p-1">
                  <Card >
                    <CardContent className="flex items-center justify-center p-6">
                      <Image src={"/Feature.png"} width={1440} height={600} alt="Feature image" />
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div >
      <div></div>
      <div className="flex justify-between items-center w-[1277px]" >
        <h3 className=" font-[24px]  font-semibold leading-[32px] tracking-[-0.6px] p-6">Upcoming</h3>
        <Button className="bg-[#fff] text-[#09090b]">See more</Button>
      </div>
      <div className="flex  flex-wrap gap-8 ">
        <Moviecard imageSrc={"/dearsanta.png"} title={"Dear santa"} />
        <Moviecard imageSrc={"/dragon.png"} title={"How TO Trian Your Dragon Live Action"} />
        <Moviecard imageSrc={"/alien.png"} title={"Alien Romulus"} />
        <Moviecard imageSrc={"/ashes.png"} title={"From the Ashes"} />
        <Moviecard imageSrc={"/spacedogg.png"} title={"Space Dogg"} />
        <Moviecard imageSrc={"/theorder.png"} title={"the order"} />
        <Moviecard imageSrc={"/y2k.png"} title={"Y2K"} />
        <Moviecard imageSrc={"/solo.png"} title={"Solo Leveling:ReAwakening"} />
        <Moviecard imageSrc={"/getaway.png"} title={"Get away"} />
        <Moviecard imageSrc={"/sonic3.png"} title={"Sonic the Hedgehog 3"} />
      </div>
      <div className="flex justify-between items-center w-[1277px]  ">
        <h3 className=" font-[24px] font-semibold tracking-[-2.5%]leading-[32px] p-6 ">Popular </h3>
        <Button className="bg-[#fff] text-[#09090b]">see more</Button>
      </div>
      <div className="flex flex-wrap gap-8">
        <Moviecard imageSrc={"/shawshank.png"} title={"The Shawshank Redemption"} />
        <Moviecard imageSrc={"/godfather.png"} title={"The Godfather"} />
        <Moviecard imageSrc={"/darkknight.png"} title={"The Dark knight"} />
        <Moviecard imageSrc={"/angrymen.png"} title={"Angry Men"} />
        <Moviecard imageSrc={"/return.png"} title={"The Lord of the King"} />
        <Moviecard imageSrc={"/internstellar.png"} title={"Internsteller"} />
        <Moviecard imageSrc={"/se7en.png"} title={"Se7en"} />
        <Moviecard imageSrc={"/wonderfull.png"} title={"It's a Wonderful life"} />
        <Moviecard imageSrc={"/samurai.png"} title={"Seven samurai"} />
        <Moviecard imageSrc={"/lambs.png"} title={"The Silence of the Lambs"} />

      </div>
      <div className="flex w-[1277px] items-center justify-between">
        <h3 className="font-[24px] font-semibold tracking-[-2.5%]leading-[32px] p-6">Top Rated</h3>
        <Button className="bg-[#fff] text-[#09090b]">See more</Button>
      </div>
      <div className="flex flex-wrap gap-8">
        <Moviecard imageSrc={"/pulpfiction.png"} title={"Pulp Fiction"} />
        <Moviecard imageSrc={"/fellowship.png"} title={""} />
        <Moviecard imageSrc={"/goodbad.png"} title={"The Good the Bad and the Ugly"} />
        <Moviecard imageSrc={"/forrest.png"} title={""} />
        <Moviecard imageSrc={"/nightclub.png"} title={""} />
        <Moviecard imageSrc={"/saving private ryan.png"} title={""} />
        <Moviecard imageSrc={"/city of god.png"} title={""} />
        <Moviecard imageSrc={"/green the mile.png"} title={""} />
        <Moviecard imageSrc={"/life is beautiful.png"} title={""} />
        <Moviecard imageSrc={"/terminator.png"} title={""} />
      </div>
    </div >
  );
}
// display: flex;
// width: 1277px;
// justify-content: space-between;
// align-items: flex-start;