import React from "react";

export default function BracketButton({
  text,
  className,
  nav
} : {
  text: string,
  className?: string,
  nav?: boolean
}) {
  return (
    <button className={(nav ? "btn-bracket-nav " : "btn-bracket ") + className}>
      <span className="left-bracket">[</span>
      {text}
      <span className="right-bracket">]</span>
    </button>
  )
}
