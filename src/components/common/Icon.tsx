import React from 'react'
import { IconType } from 'react-icons';

type Props = {
  name: IconType;
  size?: number;
  color?: string;
}

/**
 * @param [props.name] - react-icons 아이콘명
 * @param [props.size] - 아이콘 사이즈
 * @param [props.color] - 아이콘 컬러
 */
export default function Icon({name, size = 30, color="#fff"}: Props) {
  const IconName = name as React.FC<{ size?: number; color?: string }>;
  return (
    <IconName color={color} size={size}/>
  )
}