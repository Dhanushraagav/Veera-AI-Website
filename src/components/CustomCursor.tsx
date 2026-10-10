import React, { useEffect, useRef, useState } from "react";

export const CustomCursor: React.FC = () => {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  // Synchronously initialize enabled state on client without cascading render
  const [enabled] = useState<boolean>(() => {
    if (typeof window === "undefined") return false;
    const hasPointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    return Boolean(hasPointer && !prefersReducedMotion);
  });

  useEffect(() => {
    if (!enabled) {
      return;
    }
    document.documentElement.classList.add("has-custom-cursor");

    let mouseX = -100;
    let mouseY = -100;
    let targetX = -100;
    let targetY = -100;
    let ringX = -100;
    let ringY = -100;
    let isHovering = false;
    let isClicking = false;
    let isVisible = false;
    let activeElement: HTMLElement | null = null;
    let rafId: number;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      if (!isVisible) {
        isVisible = true;
        ringX = mouseX;
        ringY = mouseY;
        if (dotRef.current) dotRef.current.style.opacity = "1";
        if (ringRef.current) ringRef.current.style.opacity = "1";
      }

      if (activeElement) {
        const rect = activeElement.getBoundingClientRect();
        if (rect.width > 0 && rect.width < 450 && rect.height > 0 && rect.height < 180) {
          const centerX = rect.left + rect.width / 2;
          const centerY = rect.top + rect.height / 2;
          const pullX = (centerX - mouseX) * 0.16;
          const pullY = (centerY - mouseY) * 0.16;
          targetX = mouseX + pullX;
          targetY = mouseY + pullY;
        } else {
          targetX = mouseX;
          targetY = mouseY;
        }
      } else {
        targetX = mouseX;
        targetY = mouseY;
      }
    };

    const onMouseOver = (e: MouseEvent) => {
      const target = (e.target as HTMLElement)?.closest?.(
        "a, button, [role='button'], input, textarea, select, [data-cursor-interactive]"
      );
      if (target) {
        isHovering = true;
        activeElement = target as HTMLElement;
      }
    };

    const onMouseOut = (e: MouseEvent) => {
      const target = (e.target as HTMLElement)?.closest?.(
        "a, button, [role='button'], input, textarea, select, [data-cursor-interactive]"
      );
      if (target) {
        isHovering = false;
        activeElement = null;
      }
    };

    const onMouseDown = () => {
      isClicking = true;
    };

    const onMouseUp = () => {
      isClicking = false;
    };

    const onMouseLeave = () => {
      isVisible = false;
      if (dotRef.current) dotRef.current.style.opacity = "0";
      if (ringRef.current) ringRef.current.style.opacity = "0";
    };

    const onMouseEnter = () => {
      isVisible = true;
      if (dotRef.current) dotRef.current.style.opacity = "1";
      if (ringRef.current) ringRef.current.style.opacity = "1";
    };

    const loop = () => {
      ringX += (targetX - ringX) * 0.16;
      ringY += (targetY - ringY) * 0.16;

      if (dotRef.current) {
        const dotScale = isClicking ? 0.8 : isHovering ? 1.4 : 1;
        dotRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%) scale(${dotScale})`;
      }

      if (ringRef.current) {
        const ringScale = isClicking ? 0.9 : isHovering ? 1.5 : 1;
        ringRef.current.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) translate(-50%, -50%) scale(${ringScale})`;
        ringRef.current.style.borderColor = isHovering
          ? "rgba(8, 127, 91, 0.75)"
          : "rgba(212, 175, 114, 0.35)";
        ringRef.current.style.backgroundColor = isHovering
          ? "rgba(8, 127, 91, 0.12)"
          : "transparent";
      }

      rafId = requestAnimationFrame(loop);
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    document.addEventListener("mouseover", onMouseOver, { passive: true });
    document.addEventListener("mouseout", onMouseOut, { passive: true });
    window.addEventListener("mousedown", onMouseDown, { passive: true });
    window.addEventListener("mouseup", onMouseUp, { passive: true });
    document.addEventListener("mouseleave", onMouseLeave, { passive: true });
    document.addEventListener("mouseenter", onMouseEnter, { passive: true });

    rafId = requestAnimationFrame(loop);

    return () => {
      document.documentElement.classList.remove("has-custom-cursor");
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseover", onMouseOver);
      document.removeEventListener("mouseout", onMouseOut);
      window.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mouseup", onMouseUp);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mouseenter", onMouseEnter);
      cancelAnimationFrame(rafId);
    };
  }, [enabled]);

  if (!enabled) {
    return null;
  }

  return (
    <>
      <div
        ref={dotRef}
        aria-hidden="true"
        className="pointer-events-none fixed top-0 left-0 z-50 w-2 h-2 rounded-full bg-[#D4AF72] transition-opacity duration-200 opacity-0 will-change-transform shadow-[0_0_8px_rgba(212,175,114,0.6)]"
      />
      <div
        ref={ringRef}
        aria-hidden="true"
        className="pointer-events-none fixed top-0 left-0 z-50 w-8 h-8 rounded-full border border-[#D4AF72]/30 transition-opacity duration-200 opacity-0 will-change-transform"
      />
    </>
  );
};
