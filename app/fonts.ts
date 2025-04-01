import localFont from "next/font/local"

// Din Pro pour le texte courant
export const dinPro = localFont({
  src: [
    {
      path: "../public/fonts/DINPro-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/DINPro-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/DINPro-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-din-pro",
  display: "swap",
})

// Helvetica pour les titres
export const helvetica = localFont({
  src: [
    {
      path: "../public/fonts/Helvetica-Medium.woff2",
      weight: "500",
      style: "normal",
    },
  ],
  variable: "--font-helvetica",
  display: "swap",
})

