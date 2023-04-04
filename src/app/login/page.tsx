'use client'

import { SubmitHandler, useForm } from 'react-hook-form'

import Logo from "@/components/Logo";
import './styles.css'

interface IInputs {
  email: string,
  pass: string
}

export default function Login() {
  const { register, handleSubmit, formState: { errors } } = useForm<IInputs>()

  const onSubmit: SubmitHandler<IInputs> = data => console.log(data)

  return (
    <div className='main'>
      <Logo named />

      <div className="form-div">
        <form onSubmit={handleSubmit(onSubmit)} className='login-form'>
          <input placeholder='E-mail' {...register('email')} />

          <input placeholder='Senha' {...register('pass')} />

          {/* <div className="checkbox">
            <input type="checkbox" name="" id="" />
            <span>Lembrar-me</span>
          </div> */}

          <button type="submit">
            Login
          </button>
        </form>
      </div>
    </div>
  )
}