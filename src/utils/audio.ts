import { Howl, Howler } from "howler";

const SOUND_VOLUME = {
  CLICK: 0.3,
  SUCCESS: 0.5,
  ERROR: 0.4,
} as const;

let isEnabled = true;
let currentVolume = 1.0;

let clickSound: Howl | null = null;
let successSound: Howl | null = null;
let errorSound: Howl | null = null;

function getClickSound(): Howl {
  if (!clickSound) {
    clickSound = new Howl({
      src: ["/sounds/click.mp3"],
      volume: SOUND_VOLUME.CLICK * currentVolume,
      preload: true,
    });
  }
  return clickSound;
}

function getSuccessSound(): Howl {
  if (!successSound) {
    successSound = new Howl({
      src: ["/sounds/success.mp3"],
      volume: SOUND_VOLUME.SUCCESS * currentVolume,
      preload: true,
    });
  }
  return successSound;
}

function getErrorSound(): Howl {
  if (!errorSound) {
    errorSound = new Howl({
      src: ["/sounds/error.mp3"],
      volume: SOUND_VOLUME.ERROR * currentVolume,
      preload: true,
    });
  }
  return errorSound;
}

export function playClickSound() {
  if (!isEnabled) return;

  try {
    const sound = getClickSound();
    sound.volume(SOUND_VOLUME.CLICK * currentVolume);
    sound.play();
  } catch (error) {
    console.warn("Audio playback failed:", error);
  }
}

export function playSuccessSound() {
  if (!isEnabled) return;

  try {
    const sound = getSuccessSound();
    sound.volume(SOUND_VOLUME.SUCCESS * currentVolume);
    sound.play();
  } catch (error) {
    console.warn("Failed to play success sound:", error);
  }
}

export function playErrorSound() {
  if (!isEnabled) return;

  try {
    const sound = getErrorSound();
    sound.volume(SOUND_VOLUME.ERROR * currentVolume);
    sound.play();
  } catch (error) {
    console.warn("Failed to play error sound:", error);
  }
}

export function toggleAudio(enabled: boolean) {
  isEnabled = enabled;
  Howler.mute(!enabled);
}

export function setVolume(volume: number) {
  currentVolume = Math.max(0, Math.min(100, volume)) / 100;
  Howler.volume(currentVolume);
}

export function getVolume(): number {
  return currentVolume * 100;
}

export function isAudioEnabled(): boolean {
  return isEnabled;
}

export async function resumeAudioContext() {
  try {
    const ctx = Howler.ctx;
    if (ctx && ctx.state === "suspended") {
      await ctx.resume();
    }
  } catch (error) {
    console.warn("Failed to resume audio context:", error);
  }
}

export function preloadSounds() {
  getClickSound();
  getSuccessSound();
  getErrorSound();
}
