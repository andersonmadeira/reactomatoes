import React from 'react'

const Icon = ({ iconName, width, height, style, className, children }) => (
  <svg
    viewBox="64 64 896 896"
    focusable="false"
    style={style}
    className={className}
    data-icon={iconName}
    width={width}
    height={height}
    aria-hidden="true"
  >
    {children}
  </svg>
)

export default Icon
