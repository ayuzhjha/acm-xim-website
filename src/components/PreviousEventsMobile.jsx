import React, { useEffect, useState } from "react";
import { motion, useMotionValue } from "framer-motion";
import { TextAnimate } from "./magicui/TextAnimate";
import { PreviousEventsDataMobile } from "../lib/data/landing-page/events.data"


const ONE_SECOND = 1000;
const AUTO_DELAY = ONE_SECOND * 5;
const DRAG_BUFFER = 50;

const SPRING_OPTIONS = {
  type: "spring",
  mass: 1,
  stiffness: 400,
  damping: 80,
};

const SwipeCarousel = () => {
  const [imgIndex, setImgIndex] = useState(0);

  const dragX = useMotionValue(0);

  useEffect(() => {
    const intervalRef = setInterval(() => {
      const x = dragX.get();

      if (x === 0) {
        setImgIndex((pv) => {
          if (pv === PreviousEventsDataMobile.length - 1) {
            return 0;
          }
          return pv + 1;
        });
      }
    }, AUTO_DELAY);

    return () => clearInterval(intervalRef);
  }, []);

  const onDragEnd = () => {
    const x = dragX.get();

    if (x <= -DRAG_BUFFER && imgIndex < PreviousEventsDataMobile.length - 1) {
      setImgIndex((pv) => pv + 1);
    } else if (x >= DRAG_BUFFER && imgIndex > 0) {
      setImgIndex((pv) => pv - 1);
    }
  };

  return (
    <div className="relative overflow-hidden bg-neutral-50 ">
      <PreviousEventsHeader />
      <motion.div
        drag="x"
        dragConstraints={{
          left: 0,
          right: 0,
        }}
        style={{
          x: dragX,
        }}
        animate={{
          translateX: `-${imgIndex * 100}%`,
        }}
        transition={SPRING_OPTIONS}
        onDragEnd={onDragEnd}
        className="flex cursor-grab items-center active:cursor-grabbing my-6"
      >
        <Images imgIndex={imgIndex} />
      </motion.div>

      <Dots imgIndex={imgIndex} setImgIndex={setImgIndex} />
      {/* <GradientEdges /> */}
    </div>
  );
};

const Images = ({ imgIndex }) => {
  return (
    <>
      {PreviousEventsDataMobile.map((event, idx) => {
        return (
          <motion.div
            key={idx}
            style={{
              backgroundImage: `url(${event.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            animate={{
              scale: imgIndex === idx ? 0.95 : 0.85,
            }}
            transition={SPRING_OPTIONS}
            className="aspect-video w-[calc(100vw-1rem)] mx-2 shrink-0 rounded-xl bg-neutral-800 object-cover relative overflow-hidden"
          >
            <div className="absolute bottom-0 left-0 w-full p-4 pt-12 bg-gradient-to-t from-black/90 via-black/60 to-transparent">
              <h3 className="text-white font-bold text-lg font-bebas-neue tracking-wide text-shadow-sm">{event.title}</h3>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-neutral-300 text-[10px] font-inter uppercase tracking-wider bg-white/10 px-2 py-0.5 rounded-full backdrop-blur-sm">{event.date}</span>
              </div>
              <p className="text-neutral-200 text-xs font-inter line-clamp-2">{event.description}</p>
            </div>
          </motion.div>
        );
      })}
    </>
  );
};

const Dots = ({ imgIndex, setImgIndex }) => {
  return (
    <div className=" flex w-full relative -top-2  justify-center gap-2">
      {PreviousEventsDataMobile.map((_, idx) => {
        return (
          <button
            key={idx}
            onClick={() => setImgIndex(idx)}
            className={`h-2 w-2 rounded-full transition-colors ${idx === imgIndex ? "bg-neutral-500" : "bg-neutral-300"
              }`}
          />
        );
      })}
    </div>
  );
};

function PreviousEventsHeader() {
  return (
    <div className="px-max">
      <h1 className="font-black w-fit font-bebas-neue text-heading px-1 text-shadow-xs relative">
        <TextAnimate animation="blurIn" as="h1" by="character" delay={0.3}>
          Previous events
        </TextAnimate>
        <motion.span
          initial={{ width: 0 }}
          whileInView={{ width: "100%" }}
          // viewport={{ once: true }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="absolute left-0 bottom-0 h-1 bg-blue-500 rounded-full"
        />
      </h1>
    </div>
  );
}

const GradientEdges = () => {
  return (
    <>
      <div className="pointer-events-none absolute bottom-0 left-0 top-0 w-[10vw] max-w-[100px] bg-gradient-to-r from-neutral-950/50 to-neutral-950/0" />
      <div className="pointer-events-none absolute bottom-0 right-0 top-0 w-[10vw] max-w-[100px] bg-gradient-to-l from-neutral-950/50 to-neutral-950/0" />
    </>
  );
};

export default SwipeCarousel;