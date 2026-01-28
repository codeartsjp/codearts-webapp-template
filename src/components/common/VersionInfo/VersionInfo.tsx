import type { JSX } from "react";
import { FULL_VERSION } from "~/version";
import * as styles from "./VersionInfo.css";

export function VersionInfo(): JSX.Element {
  return <div className={styles.versionText}>{FULL_VERSION}</div>;
}
