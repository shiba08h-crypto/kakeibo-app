"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  // すでにログインしていたら /dashboard へ
  useEffect(() => {
    const check = async () => {
      const { data } = await supabase.auth.getSession();
      if (data.session) router.replace("/dashboard");
    };
    check();
  }, [router]);

  const signUp = async () => {
    setMessage("");
    if (!email || !password) return setMessage("メールとパスワードを入力してください");

    setLoading(true);
    const { error } = await supabase.auth.signUp({ email, password });
    setLoading(false);

    if (error) return setMessage(`登録失敗: ${error.message}`);

    // Confirm email ON の場合：この時点ではまだログイン完了していない
    setMessage("登録しました。確認メールが必要ならメールを確認してください。");
  };

  const signIn = async () => {
    setMessage("");
    if (!email || !password) return setMessage("メールとパスワードを入力してください");

    setLoading(true);
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    setLoading(false);

    if (error) return setMessage(`ログイン失敗: ${error.message}`);

    router.push("/dashboard");
  };

  return (
    <main style={{ padding: "2rem", maxWidth: 520 }}>
      <h1>ログイン</h1>

      <div style={{ marginTop: "1rem", display: "grid", gap: 8 }}>
        <input
          type="email"
          placeholder="メールアドレス"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="パスワード"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <div style={{ display: "flex", gap: 8, marginTop: 8 }}>
          <button onClick={signIn} disabled={loading}>
            ログイン
          </button>
          <button onClick={signUp} disabled={loading}>
            新規登録
          </button>
        </div>

        {message && <p style={{ marginTop: 8 }}>{message}</p>}
      </div>
    </main>
  );
}
