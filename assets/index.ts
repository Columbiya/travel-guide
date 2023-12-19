import localFont from "next/font/local";

export const Bluecurve = localFont({
  src: [
    {
      path: "../assets/fonts/Bluecurve-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../assets/fonts/Bluecurve-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../assets/fonts/Bluecurve-Regular.ttf",
      weight: "400",
      style: "normal",
    },
  ],
});
