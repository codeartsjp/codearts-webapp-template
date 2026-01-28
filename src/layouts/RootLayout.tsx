import type { JSX, ReactNode } from "react";
import { FullscreenButton } from "~/components/common/FullscreenButton";
import { VersionInfo } from "~/components/common/VersionInfo";
import { VolumeControl } from "~/components/common/VolumeControl";
import { useFullscreen } from "~/hooks/useFullscreen";
import { useAudioStore } from "~/store/audio-store";
import * as styles from "./RootLayout.css";

export interface RootLayoutProps {
  children: ReactNode;
}

export function RootLayout({ children }: RootLayoutProps): JSX.Element {
  const { isFullscreen, isSupported, toggleFullscreen } = useFullscreen();
  const { volume, setVolume, isMuted, toggleMute } = useAudioStore();

  return (
    <div className={styles.root}>
      <header className={styles.header}>
        <VolumeControl
          volume={volume}
          onVolumeChange={setVolume}
          isMuted={isMuted}
          onMuteToggle={toggleMute}
        />
        {isSupported && (
          <FullscreenButton
            isFullscreen={isFullscreen}
            onToggle={toggleFullscreen}
          />
        )}
      </header>

      <main className={styles.main}>{children}</main>

      <VersionInfo />
    </div>
  );
}
