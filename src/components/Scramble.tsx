import { useScramble } from "use-scramble";

import React from "react";

export default function Scramble({ text }: { text: string }) {
  const { ref } = useScramble({
    text: text,
    speed: 0.6,
    tick: 1,
    step: 1,
    scramble: 4,
    seed: 0,
  });

  return <span ref={ref} />;
}
