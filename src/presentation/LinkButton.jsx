import React from 'react'

const LinkButtonPresentation = ({ children, className, href }) => (
  <a href={href} className={className}>{children}</a>
)

export const LinkButton = ({ active, children, href }) => (
  <LinkButtonPresentation className={active && 'selected'} href={href}>
    {children}
  </LinkButtonPresentation>
)
