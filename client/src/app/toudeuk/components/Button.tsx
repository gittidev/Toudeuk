"use client";

//소켓 연결 또는 SSE 방식으로 touch값 fetch
import { useEffect, useState } from "react";
import SockJS from "sockjs-client";
import { Stomp } from "@stomp/stompjs";
import { Client, IMessage } from "@stomp/stompjs";

export default function Button() {
  const [count, setCount] = useState<number>(0);
  const [stompClient, setStompClient] = useState<Client | null>(null);

  useEffect(() => {
    const socket = new SockJS("http://localhost:8080/gs-guide-websocket");
    const stompClient = Stomp.over(socket);

    stompClient.connect(
      {},
      (frame) => {
        console.log("Connected: " + frame);
        // 구독 등의 추가 설정
      },
      (error) => {
        console.error("Connection error: ", error);
      }
    );

    stompClient.connect({}, (frame: string) => {
      console.log("Connected: " + frame);
      stompClient.send("/app/getInitialCount", {}, {});
      // Subscribe to the game topic
      stompClient.subscribe("/topic/game", (message: IMessage) => {
        setCount(parseInt(message.body));
      });
    });

    setStompClient(stompClient);

    // Cleanup on unmount
    return () => {
      if (stompClient) {
        stompClient.disconnect();
      }
    };
  }, []);

  const handleClick = () => {
    if (stompClient) {
      stompClient.send("/app/game", {}, {});
    }
  };

  return (
    <>
      <div className="relative flex items-center justify-center w-40 h-40">
        {/* 테두리가 회전하는 버튼 */}
        <div
          data-cy="button"
          onClick={handleClick}
          className="absolute w-40 h-40 rounded-full border-2 border-[#00ff88] hover:border-[#ff00ff] transition-colors duration-300 animate-spin-border"
        ></div>

        {/* 고정된 숫자 */}
        <span className="z-10 text-3xl text-[#00ff88] hover:text-[#ff00ff] transition-colors duration-300">
          {count}
        </span>
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
