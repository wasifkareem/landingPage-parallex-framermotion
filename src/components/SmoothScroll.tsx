import { useScroll, useSpring, useTransform, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import styled from "styled-components";

const Anime = styled.div`
  width: full;
  position: fixed;
  top: 0;

  display: flex;
  flex-direction: column;
`;

export default function SmoothScroll({
  children,
}: {
  children: React.ReactNode;
}) {
  const { scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, {
    mass: 0.01,
  });
  const contentRef = useRef<HTMLDivElement>(null);
  const [contentHeight, setContentHeight] = useState(0);
  useEffect(() => {
    const handleResize = () => {
      if (contentRef.current) {
        setContentHeight(contentRef.current.scrollHeight);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [contentRef, children]);

  const y = useTransform(smoothProgress, (value) => {
    return value * -(contentHeight - window.innerHeight);
  });

  return (
    <>
      <div style={{ height: contentHeight }} />

      <Anime as={motion.div} style={{ y }} ref={contentRef}>
        {children}
      </Anime>
    </>
  );
}
