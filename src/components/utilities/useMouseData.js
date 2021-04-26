import { useEffect, useState } from "react";

export const useMouseData = () => {
  const [position, setPosition] = useState({ clientX: 0, clientY: 0 });
  const [velocity, setVelocity] = useState({ speedX: 0, speedY: 0 });

  let timestamp = null,
    lastMouseX = null,
    lastMouseY = null;

  const updateData = event => {
    const { clientX, clientY } = event;

    if (timestamp === null) {
      timestamp = Date.now();
      lastMouseX = clientX;
      lastMouseY = clientY;

      return;
    }

    let now = Date.now(),
      dt =  now - timestamp,
      dx = clientX - lastMouseX,
      dy = clientY - lastMouseY,
      speedX = 1 + Math.round(dx * dt),
      speedY = 1 + Math.round(dy * dt);

    if (speedX < 0)
      speedX = speedX * -1;

    if (speedY < 0)
      speedY = speedY * -1;

    timestamp = now;
    lastMouseX = clientX;
    lastMouseY = clientY;

    setPosition({
      clientX,
      clientY
    });

    setVelocity({
      speedX,
      speedY
    });

  };

  useEffect(() => {
    document.body.addEventListener("mousemove", updateData, false);
    document.body.addEventListener("mouseenter", updateData, false);

    return () => {
      document.body.removeEventListener("mousemove", updateData);
      document.body.removeEventListener("mouseenter", updateData);
    };
  });

  return ({position, velocity});
};
