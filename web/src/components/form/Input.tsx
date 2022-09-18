import {InputHTMLAttributes} from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

export const Input = (props:InputProps) => {
  return (
    <input  
    {...props}
    className="bg-zinc-900 p-3 px-4 rounded text-sm placeholder:text-zin-500"/>
  )
}
