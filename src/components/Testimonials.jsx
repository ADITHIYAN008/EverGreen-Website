import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "./ui/card";
import { CLIENTS } from "@/constant/data";

const Testimonials = () => {
  return (
    <div className="px-3 mb-15">
      <div className="text-secondary flex items-center mb-22 sm:justify-between sm:px-5 lg:px-20">
        <h2 className="text-[27px] md:w-[400px] md:text-4xl w-[300px] font-semibold">
          What our clients say about us
        </h2>
        <div>
          <div className="flex relative ">
            <img
              className="w-7 h-7 absolute rounded-full"
              src="src/assets/profile1.jpg"
              alt=""
            />
            <img
              className="w-7 h-7 object-cover absolute left-5 rounded-full"
              src="src/assets/profile2.jpg"
              alt=""
            />
            <img
              className="w-7 h-7 object-cover absolute left-10 rounded-full"
              src="src/assets/profile3.avif"
              alt=""
            />
            <img
              className="w-7 object-cover  h-7 absolute left-15 rounded-full"
              src="src/assets/profile4.avif"
              alt=""
            />
          </div>
          <h3 className="mt-8 text-[10px]">
            More than <span className="font-bold">500+</span> Client Reviews
          </h3>
        </div>
      </div>
      <div>
        <Carousel className="mx-auto sm:min-w-[400px] md:min-w-[550px] max-w-xs">
          <CarouselContent>
            {CLIENTS.map((item, index) => (
              <CarouselItem key={index}>
                <div className="p-1">
                  <Card className="bg-gray-400/10 text-secondary border  border-secondary/20 h-[200px]">
                    <CardContent className="flex justify-center px-6">
                      <div className="flex flex-col items-end ">
                        <p className="text-[12px] min-h-[110px]">
                          {item.review}
                        </p>
                        <div className="flex mt-3 gap-2">
                          <img
                            className="w-7 h-7 object-center object-cover rounded-full"
                            src={item.avatar}
                            alt=""
                          />
                          <div>
                            <h2 className="text-sm">{item.name}</h2>
                            <h3 className="text-[10px]">{item.role}</h3>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="absolute -top-8 right-14">
            <CarouselPrevious className="bg-black" />
            <CarouselNext className="bg-black" />
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default Testimonials;
