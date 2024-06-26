import React from "react";
import { Meteors } from "./Meteor";

export function MeteorsDemo() {
  return (
    <div className="">
      <div className="w-full relative">
        <div className="absolute inset-0 h-full w-full  transform scale-[0.80] rounded-full blur-3xl" />
        <div className="relative dark:bg-black bg-blue-50 px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start">
          <h1 className="dark:text-white text-black h3 relative z-10">
            Meteors because they&apos;re cool
          </h1>

          <p className="dark:text-white text-black h3 mb-4 relative z-10">
            I don&apos;t know what to write so I&apos;ll just paste something
            cool here. One more sentence because lorem ipsum is just
            unacceptable. Won&apos;t ChatGPT the shit out of this.
          </p>
          <p className="dark:text-white text-black h3 mb-4 relative z-10">
            I don&apos;t know what to write so I&apos;ll just paste something
            cool here. One more sentence because lorem ipsum is just
            unacceptable. Won&apos;t ChatGPT the shit out of this.
          </p>
          <p className="dark:text-white text-black h3 mb-4 relative z-10">
            I don&apos;t know what to write so I&apos;ll just paste something
            cool here. One more sentence because lorem ipsum is just
            unacceptable. Won&apos;t ChatGPT the shit out of this.
          </p>
          <Meteors number={40} />
        </div>
      </div>
    </div>
  );
}
