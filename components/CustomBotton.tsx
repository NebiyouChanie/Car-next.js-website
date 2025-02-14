'use client'

import { CustomBottonProps } from '@/types'
import Image from 'next/image'

const CustomBotton = ({title, containerStyles, handleClick, btnType}: CustomBottonProps) => {
  return (
    <button
        disabled={false}
        type={btnType || "button"}
        className={`custom-btn ${containerStyles}`}
        onClick={() => {handleClick}}
         
    >
        <span className={`flex-1`}>
            {title}
        </span>
    </button>
  )
}

export default CustomBotton