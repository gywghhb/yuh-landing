import localFont from "next/font/local";
import { JetBrains_Mono } from "next/font/google";

/**
 * Usage
 * ----------
 * In the file where you want to use certain font, import said font:
 * ```import { font_name } from "@/utils/font-loader";```
 * And then use it by adding it's className to the element you want to
 * apply the font to.
 * ```<p className={font_name.className}>...</p>```
 */

export const jetbrains_mono = JetBrains_Mono({ subsets: ["latin"] });

export const ndot47 = localFont({
  src: "../../public/fonts/ndot-47.ttf",
  display: "swap",
  variable: "--font-ndot-47",
});