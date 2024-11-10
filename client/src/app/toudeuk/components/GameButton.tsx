"use client";

//소켓 연결 또는 SSE 방식으로 touch값 fetch
import { Client, Frame, IFrame, Stomp } from "@stomp/stompjs";
import { useEffect, useState } from "react";
import SockJS from "sockjs-client";
import dynamic from "next/dynamic";
import { CUSTOM_ICON } from "@/constants/customIcons";

// const LottieAnimation = dynamic(
//   () => import("@/app/components/LottieAnimation"),
//   { ssr: false }
// );
const BASE_URL = process.env.NEXT_PUBLIC_API_URL;
export default function GameButton() {
  const [count, setCount] = useState<number | null>(null);
  const [stompClient, setStompClient] = useState<Client | null>(null);

  const [playAnimation, setPlayAnimation] = useState(false);

  const handleAnimationClick = () => {
    setPlayAnimation(true);
    setTimeout(() => setPlayAnimation(false), 1000); // 1초 후에 초기화
  };

  const accessToken = sessionStorage.getItem("accessToken");

  useEffect(() => {
    // ! FIXME : 서버 주소 변경 필요
    const socket = new SockJS(`${BASE_URL}/ws`);
    const stompClient = Stomp.over(socket);

    // 연결 헤더에 accessToken을 추가합니다.
    const headers = {
      Authorization: `Bearer ${accessToken}`,
    };

    stompClient.connect(
      headers,
      (frame: IFrame) => {
        console.log("Connected: " + frame);

        stompClient.subscribe("/topic/health", (message) => {}, headers);

        stompClient.subscribe(
          "/topic/health",
          (message) => {
            console.log("메시지 health", message.body);
          },
          headers
        );

        stompClient.subscribe(
          "/topic/game",
          (message) => {
            console.log("메시지 Json 파싱", JSON.parse(message.body));
            const clicks = JSON.parse(message.body)["totalClick"];
            setCount(Number(clicks) || 0);
            if (message.body) {
              setCount(parseInt(clicks));
            } else {
              setCount(0);
            }
          },
          headers
        );
      },
      (error: Frame | string) => {
        console.error("Connection error: ", error);
      }
    );

    setStompClient(stompClient);

    return () => {
      if (stompClient) {
        stompClient.disconnect();
      }
    };
  }, []);

  const handleClick = async () => {
    if (stompClient) {
      const accessToken = sessionStorage.getItem("accessToken");
      stompClient.publish({
        destination: "/app/game",
        body: JSON.stringify({}),
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
    }
  };

  return (
    <>
      <div
        className="relative flex items-center justify-center w-40 h-40 "
        onClick={handleClick}
      >
        {/* 테두리가 회전하는 버튼 */}
        <div
          data-cy="button"
          className="absolute w-40 h-40 rounded-full border-2 border-[#00ff88] hover:border-[#ff00ff] transition-colors duration-300 animate-spin-border"
        ></div>
        {/* <div onClick={handleAnimationClick}>
          <LottieAnimation
            animationData={CUSTOM_ICON.subLoding}
            loop={false} // 반복되지 않게 설정
            width={50}
            height={50}
            autoplay={playAnimation} // 클릭 시 한 번만 재생
          />
        </div> */}
        {/* 수신된 count가 있을 때만 표시 */}
        {count !== null && (
          <span className="z-10 text-3xl text-[#00ff88] hover:text-[#ff00ff] transition-colors duration-300">
            {count}
          </span>
        )}
      </div>
      <style jsx>{`
        @keyframes spinBorder {
          0% {
            transform: rotate(0deg);
            border-color: #00ff88;
          }
          50% {
            border-color: #ff00ff;
          }
          100% {
            transform: rotate(360deg);
            border-color: #00ff88;
          }
        }

        .animate-spin-border {
          animation: spinBorder 2s linear infinite;
        }
      `}</style>
    </>
  );
}
