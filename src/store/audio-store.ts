import { create } from "zustand";
import { setVolume as setAudioVolume, toggleAudio } from "~/utils/audio";
import { getItem, setItem } from "~/utils/storage";
import { STORAGE_KEYS, DEFAULT_VOLUME, DEFAULT_MUTED } from "~/constants/storage";

interface AudioStoreState {
  volume: number;
  isMuted: boolean;

  setVolume: (volume: number) => void;
  setMuted: (muted: boolean) => void;
  toggleMute: () => void;
}

export const useAudioStore = create<AudioStoreState>((set, get) => ({
  volume: getItem<number>(STORAGE_KEYS.VOLUME, DEFAULT_VOLUME),
  isMuted: getItem<boolean>(STORAGE_KEYS.MUTED, DEFAULT_MUTED),

  setVolume: (volume) => {
    const clampedVolume = Math.max(0, Math.min(100, volume));
    set({ volume: clampedVolume });
    setItem(STORAGE_KEYS.VOLUME, clampedVolume);

    // Apply volume if not muted
    if (!get().isMuted) {
      setAudioVolume(clampedVolume);
    }
  },

  setMuted: (muted) => {
    set({ isMuted: muted });
    setItem(STORAGE_KEYS.MUTED, muted);
    toggleAudio(!muted);

    // Restore volume when unmuting
    if (!muted) {
      setAudioVolume(get().volume);
    }
  },

  toggleMute: () => {
    const newMuted = !get().isMuted;
    get().setMuted(newMuted);
  },
}));
