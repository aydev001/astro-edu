'use client';
import { motion, useMotionValue, animate } from 'framer-motion';
import { useEffect, useState } from 'react';

interface CountUpProps {
  to: number;
  duration?: number;
  className?: string;
}

export const CountUpMotion = ({
  to,
  duration = 2.5,
  className,
}: CountUpProps) => {
  const count = useMotionValue(0);
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    const controls = animate(count, to, {
      duration,
      onUpdate: (latest) => setDisplay(Math.floor(latest)),
    });

    return controls.stop;
  }, [to, duration]);

  return <motion.span className={className}>{display}</motion.span>;
};
