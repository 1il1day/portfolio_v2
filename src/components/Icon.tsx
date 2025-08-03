import React from 'react'

type Props = {
  name: any;
  size?: number;
  color?: string;
}

export default function Icon({name:IconName, size = 30, color="#fff"}: Props) {
  return (
    <IconName color={color} size={size}/>
  )
}