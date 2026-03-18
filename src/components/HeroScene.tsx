"use client";

import Spline from "@splinetool/react-spline";
import { Suspense } from "react";

const SCENE_URL = "https://prod.spline.design/r0SWTfdVzzCY8JFG/scene.splinecode";

export default function HeroScene() {
  return (
    <div className="absolute top-0 left-0 w-full h-full z-0 hidden lg:block pointer-events-none select-none overflow-hidden">
      <div className="absolute inset-0 bg-black" />
      <div className="absolute inset-0 opacity-95 [mask-image:radial-gradient(ellipse_70%_60%_at_50%_35%,#000_45%,transparent_100%)]">
        <Suspense fallback={null}>
          <Spline
            scene={SCENE_URL}
            style={{
              width: "100%",
              height: "100%",
              background: "transparent",
            }}
          />
        </Suspense>
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/70 via-black/20 to-black/85" />
    </div>
  );
}
