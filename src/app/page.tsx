import Image from "next/image";
import Link from "next/link";

import ButtonRedirect from "@/components/ButtonRedirect";

import './page.css'
import './globals.css'

export default function Home() {
  return (
    <div className="main">
      <Image src={require('../assets/Logo.png')} alt="Logo UpTo" width={216} height={216} />
      <p>
        Conecte-se ao nosso blog, <br />
        e compartilhe aquilo que desejar
      </p>

      <ButtonRedirect text="Login" route='login' />

      <span>
        Ou {`\n`}
        <Link href="/signup">Cadastre-se</Link>
        {`\n`} rapidamente
      </span>
    </div>
  )
}
