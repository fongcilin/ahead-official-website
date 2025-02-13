type IconProps = React.HTMLAttributes<SVGElement>;

export const Icons = {
  Logo: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="400"
      height="200"
      viewBox="0 0 400 200"
      {...props}
    >
      <defs>
        <filter id="gooey">
          <feGaussianBlur in="SourceGraphic" stdDeviation="2" result="blur" />
          <feColorMatrix
            in="blur"
            mode="matrix"
            values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 20 -7"
            result="gooey"
          />
          <feBlend in="SourceGraphic" in2="gooey" />
        </filter>
        <linearGradient id="textGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#8B0000" />
          <stop offset="50%" stopColor="#A52A2A" />
          <stop offset="100%" stopColor="#B22222" />
        </linearGradient>
      </defs>

      <text
        x="200"
        y="120"
        fontSize="100"
        fontFamily="Arial, sans-serif"
        fontWeight="bold"
        textAnchor="middle"
        fill="url(#textGradient)"
        filter="url(#gooey)"
        letterSpacing="5"
      >
        AHEAD
      </text>
    </svg>
  ),
  X: (props: IconProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <path
        d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
        fill="black"
      />
    </svg>
  ),
  Linkedin: (props: IconProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <path
        d="M7 8.5v10.5H4V8.5h3zM7.2 6c0 .8-.6 1.4-1.5 1.4-.9 0-1.5-.6-1.5-1.4C4.2 5.2 4.8 4.6 5.7 4.6c.9 0 1.5.6 1.5 1.4zM20 19h-3v-5.6c0-1.4-.5-2.3-1.7-2.3-1 0-1.5.7-1.8 1.3-.1.2-.1.5-.1.8V19h-3V8.5h3v1.2c.5-.8 1.3-1.8 3.1-1.8 2.3 0 4 1.5 4 4.7V19z"
        fill="black"
      />
    </svg>
  ),
  Spinner: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M21 12a9 9 0 1 1-6.219-8.56" />
    </svg>
  ),
};
