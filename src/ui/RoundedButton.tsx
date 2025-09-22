interface RoundedButtonProps {
  color: string;
  icon: string;
  alt: string;
  onClickFn: () => void;
}

function RoundedButton({ color, icon, alt, onClickFn }: RoundedButtonProps) {
  return (
    <button
      onClick={onClickFn}
      className={`rounded-full border-1 border-${color} p-[4px] hover:cursor-pointer`}
    >
      <img src={icon} alt={alt} />
    </button>
  );
}

export default RoundedButton;
