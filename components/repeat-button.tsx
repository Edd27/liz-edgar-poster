interface Props {
  onClick?: () => void;
  [key: string]: any;
}

export default function RepeatButton({
  onClick = () => {},
  ...props
}: Props) {
  return (
    <button  type="button" onClick={onClick} {...props}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-[#1DB954] w-6 h-6"
      >
        <path d="m17 2 4 4-4 4" />
        <path d="M3 11v-1a4 4 0 0 1 4-4h14" />
        <path d="m7 22-4-4 4-4" />
        <path d="M21 13v1a4 4 0 0 1-4 4H3" />
      </svg>
    </button>
  );
}
