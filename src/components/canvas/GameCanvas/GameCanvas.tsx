import type { JSX } from "react";
import { useCallback, useEffect, useRef, useState } from "react";
import type Konva from "konva";
import { Layer, Rect, Stage, Text } from "react-konva";
import { CANVAS_SIZE } from "~/constants/game";
import { calculateScaleToFit } from "~/utils/canvas";
import * as styles from "./GameCanvas.css";

export interface GameCanvasProps {
  onCanvasReady?: (stage: Konva.Stage) => void;
  onClick?: () => void;
}

export function GameCanvas({
  onCanvasReady,
  onClick,
}: GameCanvasProps): JSX.Element {
  const stageRef = useRef<Konva.Stage>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const [containerSize, setContainerSize] = useState<{
    width: number;
    height: number;
  }>({
    width: CANVAS_SIZE.WIDTH,
    height: CANVAS_SIZE.HEIGHT,
  });

  const scale = calculateScaleToFit(
    containerSize,
    { width: CANVAS_SIZE.WIDTH, height: CANVAS_SIZE.HEIGHT },
    20,
  );

  const scaledWidth = CANVAS_SIZE.WIDTH * scale;
  const scaledHeight = CANVAS_SIZE.HEIGHT * scale;

  useEffect(() => {
    const updateSize = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setContainerSize({
          width: rect.width,
          height: rect.height,
        });
      }
    };

    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  useEffect(() => {
    if (stageRef.current && onCanvasReady) {
      onCanvasReady(stageRef.current);
    }
  }, [onCanvasReady]);

  const handleClick = useCallback(() => {
    onClick?.();
  }, [onClick]);

  return (
    <div ref={containerRef} className={styles.container}>
      <Stage
        ref={stageRef}
        width={scaledWidth}
        height={scaledHeight}
        scale={{ x: scale, y: scale }}
        onClick={handleClick}
        onTap={handleClick}
        className={styles.stage}
      >
        <Layer>
          {/* Dark game background */}
          <Rect
            x={0}
            y={0}
            width={CANVAS_SIZE.WIDTH}
            height={CANVAS_SIZE.HEIGHT}
            fill="#16213e"
          />

          {/* Subtle gradient overlay */}
          <Rect
            x={0}
            y={0}
            width={CANVAS_SIZE.WIDTH}
            height={CANVAS_SIZE.HEIGHT}
            fillLinearGradientStartPoint={{ x: 0, y: 0 }}
            fillLinearGradientEndPoint={{
              x: CANVAS_SIZE.WIDTH,
              y: CANVAS_SIZE.HEIGHT,
            }}
            fillLinearGradientColorStops={[
              0,
              "rgba(0, 212, 255, 0.03)",
              0.5,
              "rgba(0, 0, 0, 0)",
              1,
              "rgba(179, 136, 255, 0.03)",
            ]}
          />

          {/* Placeholder text */}
          <Text
            x={0}
            y={CANVAS_SIZE.HEIGHT / 2}
            width={CANVAS_SIZE.WIDTH}
            text="GAME AREA"
            fontSize={28}
            fontFamily="'Orbitron', sans-serif"
            fontStyle="bold"
            fill="#4a5568"
            align="center"
            verticalAlign="middle"
            letterSpacing={6}
          />
        </Layer>
      </Stage>
    </div>
  );
}
