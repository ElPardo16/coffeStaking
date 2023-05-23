import Register from "@/components/Register";
import Image from "next/image";

export default function ResgisterPage({params}) {
  return (
    <div className="index_page">
      <div className="index_container">
        <Image src="/coffe_beans_swap.png" width={80} height={80} alt="Logo" />
        <Register refeal={params.refeal}/>
      </div>
    </div>
  )
}
