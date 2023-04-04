'use client'

import { useRouter } from "next/navigation"

interface buttonRedirectProps {
  text: string,
  route: string
}

export default function ButtonRedirect(props: buttonRedirectProps) {
  const { push } = useRouter()

  return (
    <button onClick={() => push(`/${props.route}`)}>
      {props.text}
    </button>
  )
}