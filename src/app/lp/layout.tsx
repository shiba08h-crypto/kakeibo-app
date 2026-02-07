import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "マリッジコンパス | 理想の女性に「選ばれる自分」へ - IBJ加盟 結婚相談所",
  description:
    "アプリで成果が出なかった方へ。IBJ加盟×行動コーチング型結婚相談所。プロフィール作成・服装指導・LINE指導・デート練習まで、プロが並走して結婚まで導きます。まずは30分の無料カウンセリングから。",
  openGraph: {
    title: "マリッジコンパス | 理想の女性に「選ばれる自分」へ",
    description:
      "IBJ加盟×行動コーチング型結婚相談所。プロの並走で結婚まで導きます。",
    type: "website",
    locale: "ja_JP",
  },
  twitter: {
    card: "summary_large_image",
    title: "マリッジコンパス | 理想の女性に「選ばれる自分」へ",
    description:
      "IBJ加盟×行動コーチング型結婚相談所。プロの並走で結婚まで導きます。",
  },
};

export default function LPLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen bg-white text-navy-800 font-sans">
      {children}
    </div>
  );
}
