"use client";

import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useCallback } from "react";

const messages = [
  "sudo optimize system && deploy everything",
  "npm install -g best-candidate && run-interviews --success",
  "console.log('Seasoned developer in action...');",
  "echo 'Knock knock! Your next team member is here!'",
  "git commit -m 'Project management balance achieved!'",
  "find /interest -type job -exec echo 'Hello from your future dev!'",
  "cat keyboard | push 'I'm ready to code' && run --job-application",
  "echo 'The challenge in the job posting sparked a coding adventure!'",
];

export default function ConsoleTextAnimation() {
  const messageIndex = useMotionValue(0);
  const charCount = useMotionValue(0);
  const updatedThisRound = useMotionValue(true);

  const currentMessage = useTransform(messageIndex, (index) => messages[index] || "");
  const roundedCharCount = useTransform(charCount, Math.round);
  const visibleText = useTransform(roundedCharCount, (count) => currentMessage.get().slice(0, count));

  const nextMessage = useCallback((latest: number) => {
    const isUpdated = updatedThisRound.get();
    const currentIndex = messageIndex.get();

    if (isUpdated && latest > 0) {
      updatedThisRound.set(false);
    
    } else if (!isUpdated && latest === 0) {
    
      const nextIndex = (currentIndex + 1) % messages.length;
      
      messageIndex.set(nextIndex);
      updatedThisRound.set(true);
    
    }

  }, [messageIndex, updatedThisRound]);

  useEffect(() => {
    const animationControls = animate(charCount, 100, {
      type: "tween",
      duration: 2,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
      repeatDelay: 1,
      onUpdate: nextMessage,
    });

    return () => animationControls.stop();
  }, [charCount, nextMessage]);

  return (
    <motion.div className="inline">
      {visibleText}
    </motion.div>
  );
}