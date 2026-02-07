import type { Metadata } from "next";
import "./globals.css";
import "./lp/globals.css";

export const metadata: Metadata = {
  title: "マリッジコンパス | 理想の女性に「選ばれる自分」へ - IBJ加盟 結婚相談所",
  description:
    "アプリで成果が出なかった方へ。IBJ加盟×行動コーチング型結婚相談所。プロフィール作成・服装指導・LINE指導・デート練習まで、プロが並走して結婚まで導きます。まずは30分の無料カウンセリングから。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>
        {children}
      </body>
    </html>
  );
}
