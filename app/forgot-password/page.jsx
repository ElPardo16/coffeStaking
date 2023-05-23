import Forgot from "@/components/Forgot";
import Image from "next/image";

export default function ForgotPage() {
  return (
    <div className="index_page">
      <div className="index_container">
        <Image src="/origen_logo.png" width={240} height={240} alt="Logo" />
        <Forgot/>
      </div>
    </div>
  )
}