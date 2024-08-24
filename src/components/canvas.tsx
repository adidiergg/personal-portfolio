"use client";
import { useLayoutEffect, useEffect, useRef, useState } from "react";
import { range } from "@/lib/utils";

const NUM_CONFETTI = 30;
const COLORS = [
  [0, 100, 148],
  [36, 123, 160],
  [27, 152, 224],
];
const PI_2 = 2 * Math.PI;

export const Canvas = () => {
  const ref = useRef<HTMLCanvasElement>(null);
  const [width, setWidth] = useState<number>(0);
  const [height, setHeight] = useState<number>(0);

  
  const drawCircle = (x:number, y:number, r:number, style:string) => {
    const context = ref?.current?.getContext("2d");
    context.beginPath();
    context.arc(x, y, r, 0, PI_2, false);
    context.fillStyle = style;
    context.fill();
  };
  

  class Confetti {
    constructor() {
      this.style = COLORS[Math.floor(range(0, 3))];
      this.rgb = `rgba(${this.style[0]},${this.style[1]},${this.style[2]}`;
      this.r = Math.floor(range(10, 40));
      this.r2 = 2 * this.r;
      this.replace();
    }

    replace() {
      this.opacity = 0;
      this.dop = 0.001 * range(1, 3);
      this.x = range(-this.r2, width - this.r2);
      this.y = range(-20, height - this.r2);
      this.xmax = width - this.r;
      this.ymax = height - this.r;
      this.vx = Math.random() * 0.8;
      this.vy = Math.random() * 0.8;
    }

    draw() {
      this.x += this.vx;
      this.y += this.vy;
      this.opacity += this.dop;
      if (this.opacity > 0.5) {
        this.opacity = 0.5;
        this.dop *= -0.5;
      }
      if (this.opacity < 0 || this.y > this.ymax) {
        this.replace();
      }
      if (!(0 < this.x && this.x < this.xmax)) {
        this.x = (this.x + this.xmax) % this.xmax;
      }

      drawCircle(Math.floor(this.x), Math.floor(this.y), this.r, `${this.rgb},${this.opacity})`);
    }
  }

  const resizeWindow = () => {
    const canvas = ref.current;
    if (canvas !== null) {
      setHeight(window.innerHeight);
      setWidth(window.innerWidth);
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }
  };

  useEffect(() => {
    resizeWindow();
  },[]);

  useEffect(() => {
    window.addEventListener("resize", resizeWindow, false);
    

    return () => {
      window.removeEventListener("resize", resizeWindow, false);
    };
  }, []);

  const confetti = Array.from({ length: NUM_CONFETTI }, () => new Confetti());

  useEffect(() => {
    const canvas = ref.current;
    const context = canvas?.getContext("2d");
    const render = () => {
      window.requestAnimationFrame(render);
      context?.clearRect(0, 0, width, height);
      confetti.forEach((c) => c.draw());
    };

    render();
    
  
  }, [drawCircle]);

  return (
   
     <canvas ref={ref} className="fixed   -z-10" />
     
    );
};
