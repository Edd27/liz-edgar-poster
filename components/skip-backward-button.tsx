interface Props {
  onClick?: () => void;
  [key: string]: any;
}

export default function SkipBackwardButton({
  onClick = () => {},
  ...props
}: Props) {
  return (
    <button type="button" onClick={onClick} {...props}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="h-10 w-10"
      >
        <path d="M9.195 18.44c1.25.714 2.805-.189 2.805-1.629v-2.34l6.945 3.968c1.25.715 2.805-.188 2.805-1.628V8.69c0-1.44-1.555-2.343-2.805-1.628L12 11.029v-2.34c0-1.44-1.555-2.343-2.805-1.628l-7.108 4.061c-1.26.72-1.26 2.536 0 3.256l7.108 4.061Z" />
      </svg>
    </button>
  );
}
