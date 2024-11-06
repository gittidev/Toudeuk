import React, { useRef, useEffect } from "react";
import Lottie, {
  LottieComponentProps,
  LottieRefCurrentProps,
} from "lottie-react";

interface LottieAnimationProps {
  animationData: LottieComponentProps["animationData"];
  loop?: boolean | number;
  autoplay?: boolean;
  width?: number;
  height?: number;
  padding?: string;
  margin?: string;
  cursor?: string;
  isSelected?: boolean;
}

export default function LottieAnimation({
  animationData,
  loop = false,
  autoplay = false,
  width = 48,
  height = 48,
  padding = "0",
  margin = "0",
  cursor = "",
  isSelected = false,
}: LottieAnimationProps) {
  const lottieRef = useRef<LottieRefCurrentProps | null>(null);

  useEffect(() => {
    if (lottieRef.current) {
      if (isSelected) {
        lottieRef.current.play();
      } else {
        lottieRef.current.stop();
        lottieRef.current.goToAndStop(0, true);
      }
    }
  }, [isSelected]);

  return (
    <div style={{ width, height, padding, margin, cursor }}>
      <Lottie
        lottieRef={lottieRef}
        animationData={animationData}
        loop={loop}
        autoplay={autoplay}
        style={{ width: "100%", height: "100%" }}
      />
    </div>
  );
}
