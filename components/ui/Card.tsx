import React from "react";
import { CardContainer, CardBody, CardItem } from "./3dCard";
import Link from "next/link";
import Image from "next/image";

export function ThreeDCardDemo({
  title,
  desc,
  image,
  link, 
}: {
  title: string;
  desc: string;
  image: string;
  link: string; 
}) {
  return (
    <Link href={link}>
      <CardContainer className="h-32 md:h-auto w-full px-5 md:px-0 hover:cursor cursor-pointer">
        <CardBody className="bg-blue-50 relative group/card hover:shadow-2xl hover:cursor hover:shadow-pink-500/50 hover  dark:hover:shadow-blue-300/50 dark:bg-bgblue rounded-xl ">
          <CardItem translateZ="50" className="h4">
            {title}
          </CardItem>
          <CardItem
            as="p"
            translateZ="60"
            className="text-neutral-500 text-sm sm:text-base max-w-sm mt-2 dark:text-neutral-300"
          >
            {desc}
          </CardItem>
          <CardItem translateZ="100" className="w-full mt-4">
            <Image
              src={image}
              alt={title}
              width={200}
              height={240}
              className="h-40 sm:h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            />
          </CardItem>
        </CardBody>
      </CardContainer>
    </Link>
  );
}
