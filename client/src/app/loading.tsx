"use client";

import { CUSTOM_ICON } from "@/constants/customIcons";
import dynamic from "next/dynamic";

const LottieAnimation = dynamic(
  () => import("@/app/components/LottieAnimation"),
  { ssr: false }
);

const Loading = () => {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <LottieAnimation
        animationData={CUSTOM_ICON.subLoding}
        loop={true}
        width={300}
        height={300}
        autoplay={true}
      />
    </div>
  );
};

export default Loading;
