import type { JSX } from "react";
import { Maximize, Minimize } from "lucide-react";
import { iconButton } from "~/styles";

export interface FullscreenButtonProps {
  isFullscreen: boolean;
  onToggle: () => void;
  disabled?: boolean;
}

export function FullscreenButton({
  isFullscreen,
  onToggle,
  disabled = false,
}: FullscreenButtonProps): JSX.Element {
  const Icon = isFullscreen ? Minimize : Maximize;
  const label = isFullscreen ? "全画面解除" : "全画面表示";

  return (
    <button
      type="button"
      className={iconButton()}
      onClick={onToggle}
      disabled={disabled}
      aria-label={label}
      title={label}
    >
      <Icon size={24} />
    </button>
  );
}
