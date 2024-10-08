import React from 'react';

export function SolomonIslands(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={40} height={40} fill="none" {...props}>
      <g clipPath="url(#prefix__clip0_568_194012)">
        <path
          d="M34.143 34.143c7.5-7.501 7.797-19.477.892-27.333L20 20 6.81 35.034c7.857 6.906 19.832 6.61 27.333-.891z"
          fill="#496E2D"
        />
        <path
          d="M5.857 5.857c7.501-7.5 19.476-7.797 27.333-.891L20 20 4.966 33.19c-6.906-7.856-6.61-19.832.891-27.333z"
          fill="#0052B4"
        />
        <path
          d="M33.189 4.966L4.965 33.19c.285.324.581.643.891.953.31.31.629.606.954.891L35.033 6.81a20.276 20.276 0 00-.891-.953c-.31-.31-.629-.606-.953-.891z"
          fill="#FFDA44"
        />
        <path
          d="M8.426 6.956l.432 1.328h1.397l-1.13.821.432 1.33-1.13-.822-1.13.821.43-1.329-1.13-.82h1.398l.431-1.33zM15.563 6.956l.432 1.328h1.397l-1.13.821.431 1.33-1.13-.822-1.13.821.432-1.329-1.13-.82h1.396l.432-1.33zM8.426 13.913l.432 1.328h1.397l-1.13.821.432 1.329-1.13-.821-1.13.821.43-1.329-1.13-.82h1.398l.431-1.33zM15.563 13.913l.432 1.328h1.397l-1.13.821.431 1.329-1.13-.821-1.13.821.432-1.329-1.13-.82h1.396l.432-1.33zM11.995 10.434l.432 1.329h1.396l-1.13.82.432 1.33-1.13-.822-1.13.822.431-1.33-1.13-.82h1.397l.432-1.329z"
          fill="#F0F0F0"
        />
      </g>
      <defs>
        <clipPath id="prefix__clip0_568_194012">
          <path fill="#fff" d="M0 0h40v40H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}
