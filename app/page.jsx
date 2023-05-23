import Login from "@/components/Login";
import Image from "next/image";

export default function LoginPage() {
  return (
    <div className="index_page">
      <div className="index_container">
        <Image src="/coffe_beans_swap.png" width={240} height={240} alt="Logo" />
        <Login/>
      </div>
    </div>
  )
}
