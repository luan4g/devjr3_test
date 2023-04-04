import Image from "next/image";

interface logoProps {
  named?: boolean
}

export default function Logo({ named }: logoProps) {
  return (
    <div className="logo">
      <Image src={require('../assets/Logo.png')} alt="Logo UpTo" width={216} height={216} />
      <span
        hidden={!named}
      >
        UpTo <br />
        Blog
      </span>
    </div>
  )
}