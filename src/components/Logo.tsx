import type { CSSProperties } from "react";

interface Props extends React.SVGProps<SVGSVGElement> {
  color?: CSSProperties["color"];
}

export function Logo(props: Props) {
  const { color = "#1d1d1d", ...rest } = props;

  return (
    <svg
      id="Ebene_2"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 38.54 26.44"
      {...rest}
    >
      <defs>
        <style>{`.cls-1{fill:${color}`}</style>
      </defs>
      <g id="Ebene_1-2">
        <path
          className="cls-1"
          d="M23.19 19.39c-.23 0-.39-.16-.39-.39V8.11c0-2.08-1.02-3.45-2.98-3.45s-2.94 1.37-2.94 3.45V19c0 .24-.16.39-.39.39h-4.7c-.24 0-.39-.16-.39-.39V8.11c0-2.08-.98-3.45-2.94-3.45S5.48 6.03 5.48 8.11V19c0 .24-.16.39-.39.39H.39c-.23 0-.39-.16-.39-.39V.82C0 .59.16.43.39.43h4.7c.24 0 .39.16.39.39v1.33h.04C6.38.98 7.99 0 10.42 0s4 .82 5.09 2.39h.04C16.96.9 18.84 0 21.5 0c4.47 0 6.78 2.86 6.78 7.05V19c0 .24-.16.39-.39.39h-4.7ZM38.15.43h-4.7c-.24 0-.39.15-.39.39v4.66c0 .14.05.25.15.32.06.05.14.07.24.07h4.7a.4.4 0 0 0 .27-.09c.08-.07.12-.17.12-.3V.82c0-.24-.16-.39-.39-.39ZM38.42 14.29v5.29c0 4.82-2.38 6.86-6.74 6.86h-1.23c-.22 0-.37-.16-.37-.4v-3.83c0-.24.15-.4.37-.4h.74c1.46 0 2.02-.47 2.02-2.19v-5.33c0-.23.16-.39.4-.39h4.42c.24 0 .39.16.39.39Z"
        />
      </g>
    </svg>
  );
}
