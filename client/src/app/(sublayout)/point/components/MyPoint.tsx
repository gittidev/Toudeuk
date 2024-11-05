"use client";

import { fetchUserInfo } from "@/apis/userInfoApi";
import { UserInfo } from "@/types";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import { HiInformationCircle } from "react-icons/hi";
import { toast } from "react-toastify";

export default function MyPoint() {
  // 설명 토글 함수
  const handleInfoClick = () => {
    toast.info("잔여 포인트입니다", {
      position: "top-center",
      theme: "light",
    });
  };

  const { data: userInfo, isError } = useQuery<UserInfo>({
    queryKey: ["user"],
    queryFn: fetchUserInfo,
  });

  if (isError) {
    toast.error("유저정보를 다시 불러와주세요");
  }

  return (
    <div className="flex flex-col items-center justify-center">
      <div
        className="p-8 rounded-3xl shadow-md w-full max-w-md"
        style={{
          background: "linear-gradient(180deg, #353A40 17.2%, #16171B 117.2%)",
          borderColor: "#4A505B",
          borderWidth: "2px",
        }}
      >
        <h2 className="text-3xl font-bold mb-6">내 포인트</h2>
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <h3 className="text-3xl font-semibold">{userInfo?.cash}pt</h3>
            <button onClick={handleInfoClick} className="ml-2">
              <HiInformationCircle className="text-gray-500 w-6 h-6" />
            </button>
          </div>
          <Link href="/kapay">
            <button className="bg-transparent text-white font-semibold py-2 px-4 rounded border border-white transition duration-200 hover:bg-white hover:text-black">
              충전하기
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
