import React, { useRef, useEffect, useState } from "react";

export const FunnyDramaticHeart: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const heartElemRef = useRef<HTMLDivElement>(null);
  const leftLegRef = useRef<SVGLineElement>(null);
  const leftShoeRef = useRef<SVGEllipseElement>(null);
  const rightLegRef = useRef<SVGLineElement>(null);
  const rightShoeRef = useRef<SVGEllipseElement>(null);

  const [isSprinting, setIsSprinting] = useState(false);

  // Smooth physics: position, velocity, and walk cycle phase
  const pos = useRef({ x: 0, y: 0 });
  const vel = useRef({ x: 0, y: 0 });
  const walkPhase = useRef(0);

  // Mouse / Pointer tracking (position & velocity)
  const mouse = useRef({
    x: -9999,
    y: -9999,
    vx: 0,
    vy: 0,
    speed: 0,
    lastTime: 0,
    active: false,
  });

  const lastDisturbTime = useRef(0);

  useEffect(() => {
    const onPointerMove = (e: PointerEvent | MouseEvent) => {
      const now = performance.now();
      const dt = Math.max(10, now - mouse.current.lastTime);

      const dx = e.clientX - mouse.current.x;
      const dy = e.clientY - mouse.current.y;
      const instSpeed = Math.hypot(dx, dy) / (dt / 16.67);

      // Smooth cursor velocity filter
      mouse.current.vx = mouse.current.vx * 0.4 + (dx / dt) * 16.67 * 0.6;
      mouse.current.vy = mouse.current.vy * 0.4 + (dy / dt) * 16.67 * 0.6;
      mouse.current.speed = mouse.current.speed * 0.4 + instSpeed * 0.6;

      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
      mouse.current.lastTime = now;
      mouse.current.active = true;
    };

    const onPointerLeave = () => {
      mouse.current.active = false;
      mouse.current.x = -9999;
      mouse.current.y = -9999;
      mouse.current.vx = 0;
      mouse.current.vy = 0;
      mouse.current.speed = 0;
    };

    window.addEventListener("pointermove", onPointerMove, { passive: true });
    window.addEventListener("pointerleave", onPointerLeave, { passive: true });

    let rafId: number;

    const loop = () => {
      rafId = requestAnimationFrame(loop);

      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const originX = rect.left + rect.width / 2;
      const originY = rect.top + rect.height / 2;

      const heartX = originX + pos.current.x;
      const heartY = originY + pos.current.y;

      // Distance from cursor to current heart position
      const diffX = heartX - mouse.current.x;
      const diffY = heartY - mouse.current.y;
      const dist = Math.hypot(diffX, diffY);

      // Natural Proximity Repulsion Field (130px)
      const REPEL_RADIUS = 130;

      if (mouse.current.active && dist < REPEL_RADIUS && dist > 0) {
        lastDisturbTime.current = performance.now();

        const nx = diffX / dist;
        const ny = diffY / dist;

        // Proximity penetration factor: smoothly increases as cursor gets closer
        const proximityFactor = Math.pow((REPEL_RADIUS - dist) / REPEL_RADIUS, 1.25);

        // Cursor approach velocity towards heart (dot product)
        const approachVelocity = Math.max(0, mouse.current.vx * nx + mouse.current.vy * ny);

        // Repel force: proportional to both proximity and cursor speed
        // Slow cursor = gentle slow step away; Fast cursor = swift sprint!
        const baseForce = proximityFactor * 3.8;
        const speedBoost = approachVelocity * 1.35;
        const totalForce = baseForce + speedBoost;

        // Smart steering when approaching boundaries to fluidly circle around cursor
        const maxBoundX = 300;
        const maxBoundY = 85;
        let steerX = nx;
        let steerY = ny;

        if (Math.abs(pos.current.x) > maxBoundX * 0.75 && pos.current.x * nx > 0) {
          steerX *= 0.3;
          steerY += pos.current.y >= 0 ? 0.9 : -0.9;
        }
        if (Math.abs(pos.current.y) > maxBoundY * 0.75 && pos.current.y * ny > 0) {
          steerY *= 0.3;
          steerX += pos.current.x >= 0 ? 0.9 : -0.9;
        }

        const steerMag = Math.hypot(steerX, steerY) || 1;
        vel.current.x += (steerX / steerMag) * totalForce;
        vel.current.y += (steerY / steerMag) * totalForce;
      }

      // Natural momentum friction
      vel.current.x *= 0.89;
      vel.current.y *= 0.89;

      // Generous soft boundary roaming area
      const boundX = 320;
      const boundY = 90;
      if (pos.current.x > boundX) vel.current.x -= (pos.current.x - boundX) * 0.12;
      if (pos.current.x < -boundX) vel.current.x -= (pos.current.x + boundX) * 0.12;
      if (pos.current.y > boundY) vel.current.y -= (pos.current.y - boundY) * 0.14;
      if (pos.current.y < -boundY) vel.current.y -= (pos.current.y + boundY) * 0.14;

      // Gentle homing return when untouched for > 2.5 seconds
      const now = performance.now();
      if (now - lastDisturbTime.current > 2500 && dist > REPEL_RADIUS + 40) {
        const returnK = 0.016;
        vel.current.x += (0 - pos.current.x) * returnK;
        vel.current.y += (0 - pos.current.y) * returnK;
      }

      // Integrate velocity into position
      pos.current.x += vel.current.x;
      pos.current.y += vel.current.y;

      const currentSpeed = Math.hypot(vel.current.x, vel.current.y);

      // Natural tilt in direction of motion (leaning forward into movement)
      const tilt = Math.max(-16, Math.min(16, vel.current.x * 2.2));

      // Direct GPU transform update for 60-120fps buttery smoothness
      if (heartElemRef.current) {
        heartElemRef.current.style.transform = `translate3d(${pos.current.x.toFixed(2)}px, ${pos.current.y.toFixed(2)}px, 0) rotate(${tilt.toFixed(2)}deg)`;
      }

      // Natural leg animation proportional to movement speed
      if (currentSpeed > 0.25) {
        walkPhase.current += currentSpeed * 0.22;
        const swing = Math.sin(walkPhase.current) * Math.min(26, currentSpeed * 5);

        if (leftLegRef.current && leftShoeRef.current) {
          leftLegRef.current.setAttribute("x2", `${18 - swing * 0.25}`);
          leftLegRef.current.setAttribute("y2", `${58 - Math.abs(swing) * 0.12}`);
          leftShoeRef.current.setAttribute("cx", `${15 - swing * 0.25}`);
          leftShoeRef.current.setAttribute("cy", `${58 - Math.abs(swing) * 0.12}`);
        }
        if (rightLegRef.current && rightShoeRef.current) {
          rightLegRef.current.setAttribute("x2", `${42 + swing * 0.25}`);
          rightLegRef.current.setAttribute("y2", `${58 - Math.abs(swing) * 0.12}`);
          rightShoeRef.current.setAttribute("cx", `${45 + swing * 0.25}`);
          rightShoeRef.current.setAttribute("cy", `${58 - Math.abs(swing) * 0.12}`);
        }
      } else {
        // Idle resting legs
        if (leftLegRef.current && leftShoeRef.current) {
          leftLegRef.current.setAttribute("x2", "18");
          leftLegRef.current.setAttribute("y2", "58");
          leftShoeRef.current.setAttribute("cx", "15");
          leftShoeRef.current.setAttribute("cy", "58");
        }
        if (rightLegRef.current && rightShoeRef.current) {
          rightLegRef.current.setAttribute("x2", "42");
          rightLegRef.current.setAttribute("y2", "58");
          rightShoeRef.current.setAttribute("cx", "45");
          rightShoeRef.current.setAttribute("cy", "58");
        }
      }

      // Sprinting threshold for sweat drop
      if (currentSpeed > 4.2 && !isSprinting) {
        setIsSprinting(true);
      } else if (currentSpeed < 1.8 && isSprinting) {
        setIsSprinting(false);
      }
    };

    rafId = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerleave", onPointerLeave);
    };
  }, [isSprinting]);

  const handleTouchEvade = (e: React.TouchEvent | React.MouseEvent) => {
    e.preventDefault();
    const clientX = "touches" in e ? e.touches[0]?.clientX ?? 0 : e.clientX;
    const clientY = "touches" in e ? e.touches[0]?.clientY ?? 0 : e.clientY;

    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const hx = rect.left + rect.width / 2 + pos.current.x;
      const hy = rect.top + rect.height / 2 + pos.current.y;
      const dx = hx - clientX;
      const dy = hy - clientY;
      const d = Math.hypot(dx, dy) || 1;
      vel.current.x += (dx / d) * 12;
      vel.current.y += (dy / d) * 12;
    }
  };

  return (
    <div
      ref={containerRef}
      className="inline-block relative select-none ml-2 align-middle z-30 pointer-events-auto"
      style={{ touchAction: "none" }}
    >
      {/* Heart Element - Clean crisp styling with ZERO glowing effect */}
      <div
        ref={heartElemRef}
        onPointerDown={handleTouchEvade}
        onTouchStart={handleTouchEvade}
        className="w-8 h-8 sm:w-10 sm:h-10 relative cursor-pointer will-change-transform"
        style={{ transformOrigin: "center center" }}
        title="Your crush could never 😎"
      >
        <svg
          viewBox="0 0 60 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full overflow-visible"
        >
          <defs>
            <linearGradient id="heartGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FF4D8D" />
              <stop offset="100%" stopColor="#D81159" />
            </linearGradient>
          </defs>

          {/* Stick Legs & Shoes */}
          <g>
            <line
              ref={leftLegRef}
              x1="22"
              y1="50"
              x2="18"
              y2="58"
              stroke="#12181F"
              strokeWidth="2.8"
              strokeLinecap="round"
            />
            <ellipse ref={leftShoeRef} cx="15" cy="58" rx="4" ry="2" fill="#12181F" />

            <line
              ref={rightLegRef}
              x1="38"
              y1="50"
              x2="42"
              y2="58"
              stroke="#12181F"
              strokeWidth="2.8"
              strokeLinecap="round"
            />
            <ellipse ref={rightShoeRef} cx="45" cy="58" rx="4" ry="2" fill="#12181F" />
          </g>

          {/* Heart Body */}
          <g>
            <path
              d="M 30 52 C 12 40 4 28 4 18 C 4 8 13 2 22 2 C 27 2 30 7 30 7 C 30 7 33 2 38 2 C 47 2 56 8 56 18 C 56 28 48 40 30 52 Z"
              fill="url(#heartGrad)"
              stroke="#12181F"
              strokeWidth="2.6"
            />

            {/* Cool Dark Sunglasses */}
            <rect x="12" y="16" width="16" height="11" rx="3.5" fill="#12181F" />
            <rect x="32" y="16" width="16" height="11" rx="3.5" fill="#12181F" />
            <line x1="28" y1="20" x2="32" y2="20" stroke="#12181F" strokeWidth="2.5" />
            <line
              x1="15"
              y1="18"
              x2="22"
              y2="25"
              stroke="#FFFFFF"
              strokeWidth="1.3"
              strokeLinecap="round"
              opacity="0.85"
            />
            <line
              x1="35"
              y1="18"
              x2="42"
              y2="25"
              stroke="#FFFFFF"
              strokeWidth="1.3"
              strokeLinecap="round"
              opacity="0.85"
            />

            {/* Sassy Smug Smirk */}
            <path
              d="M 26 34 Q 30 38 36 33"
              stroke="#12181F"
              strokeWidth="2.2"
              strokeLinecap="round"
              fill="none"
            />

            {/* Sweat drop when sprinting away */}
            {isSprinting && (
              <path
                d="M 47 10 C 47 10 50 14 47 16 C 45 16 45 13 47 10 Z"
                fill="#00F5D4"
              />
            )}
          </g>
        </svg>
      </div>
    </div>
  );
};
