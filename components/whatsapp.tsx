"use client";
import { sendGAEvent } from "@next/third-parties/google";
import ImageLoader from "./image-loader";
import Image from "next/image";

export const WhatsApp = () => {
  return (
    <a
      id="whatsapp"
      className="flex items-center"
      href="https://wa.me/27789803335"
      target="_blank"
      onClick={() => {
        sendGAEvent("event", "whatsapp", {
          action: "WhatsApp opened",
        });
      }}
    >
      <Image
        loader={ImageLoader}
        src="/WhatsApp.svg"
        width={40}
        height={40}
        style={{
          objectFit: "contain",
          objectPosition: "center bottom",
          height: "60px",
          width: "60px",
        }}
        alt="whatsapp"
      />
    </a>
  );
};
