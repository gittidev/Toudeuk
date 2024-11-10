"use client";
import { useRouter } from "next/navigation";
import React from "react";

export default function BackButton() {
  const router = useRouter();

  const handleBack = () => {
    router.back(); // 이전 페이지로 이동
  };

  return (
    <button
      onClick={handleBack}
      className="p-2 rounded-full hover:bg-gray-600 transition flex items-center justify-center "
      style={{
        width: "36px",
        height: "36px",
        backgroundColor: "rgba(145, 172, 255, 0.8)", // 배경색
        color: "#ffffff", // 글씨(이모티콘) 흰색
        fontSize: "16px", // 이모티콘 크기 조정
      }}
      aria-label="뒤로가기"
    >
      {/* 뒤로가기 이모티콘 */}
      {"<"}
    </button>
  );
}