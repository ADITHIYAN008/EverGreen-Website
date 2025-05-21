import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const stats = [
  { end: 100, suffix: "%", label: "Satisfied Clients" },
  { end: 500, suffix: "+", label: "Property Sells" },
  { end: 150, suffix: "+", label: "Countries & Cities" },
  { end: 200, suffix: "+", label: "Positive Reviews" },
];

export default function CounterList() {
  const [ref, inView] = useInView({
    threshold: 0.4,
  });

  return (
    <ul ref={ref} className="mt-7 grid grid-cols-2 text-center gap-y-8">
      {stats.map(({ end, suffix, label }, i) => (
        <li
          key={i}
          className={
            "flex flex-col text-4xl " +
            (i % 2 === 0 ? "border-r border-secondary/20" : "")
          }
        >
          {inView ? (
            <CountUp
              start={0}
              end={end}
              duration={2}
              separator=","
              suffix={suffix}
            />
          ) : (
            `0${suffix}`
          )}
          <span className="text-xs mt-2">{label}</span>
        </li>
      ))}
    </ul>
  );
}
