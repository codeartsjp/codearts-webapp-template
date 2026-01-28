import type { JSX } from "react";
import { useMemo } from "react";
import * as Popover from "@radix-ui/react-popover";
import * as Slider from "@radix-ui/react-slider";
import { Volume2, VolumeX } from "lucide-react";
import { iconButton } from "~/styles";
import * as styles from "./VolumeControl.css";

export interface VolumeControlProps {
  volume: number;
  onVolumeChange: (volume: number) => void;
  isMuted?: boolean;
  onMuteToggle?: () => void;
  disabled?: boolean;
}

export function VolumeControl({
  volume,
  onVolumeChange,
  isMuted = false,
  onMuteToggle,
  disabled = false,
}: VolumeControlProps): JSX.Element {
  const VolumeIcon = useMemo(() => {
    if (isMuted || volume === 0) return VolumeX;
    return Volume2;
  }, [volume, isMuted]);

  const handleVolumeChange = (value: number[]) => {
    if (isMuted && onMuteToggle) {
      onMuteToggle();
    }
    onVolumeChange(value[0]);
  };

  return (
    <Popover.Root>
      <Popover.Trigger asChild>
        <button
          type="button"
          className={iconButton()}
          disabled={disabled}
          aria-label="音量調整"
        >
          <VolumeIcon size={24} />
        </button>
      </Popover.Trigger>

      <Popover.Portal>
        <Popover.Content className={styles.popoverContent} sideOffset={5}>
          <div className={styles.sliderContainer}>
            <button
              type="button"
              className={iconButton({ size: "sm" })}
              onClick={onMuteToggle}
              aria-label={isMuted ? "ミュート解除" : "ミュート"}
            >
              <VolumeX
                size={16}
                className={`${styles.muteIcon} ${isMuted ? "muted" : ""}`}
              />
            </button>

            <Slider.Root
              className="slider-root"
              style={{
                position: "relative",
                display: "flex",
                alignItems: "center",
                userSelect: "none",
                touchAction: "none",
                flex: 1,
                height: "20px",
              }}
              value={[volume]}
              onValueChange={handleVolumeChange}
              max={100}
              step={5}
              disabled={disabled}
            >
              <Slider.Track className="slider-track">
                <Slider.Range
                  className="slider-range"
                  style={{ opacity: isMuted ? 0.3 : 1 }}
                />
              </Slider.Track>
              <Slider.Thumb className="slider-thumb" aria-label="音量" />
            </Slider.Root>

            <Volume2
              size={16}
              className={`${styles.volumeIcon} ${isMuted ? "muted" : ""}`}
            />
          </div>
          <Popover.Arrow className={styles.popoverArrow} />
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
}
