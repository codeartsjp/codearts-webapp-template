import packageJson from "../package.json";

// Git情報（Viteのdefineで注入される）
declare const __GIT_HASH__: string;

const GIT_HASH = __GIT_HASH__;

export const FULL_VERSION = `v${packageJson.version}+${GIT_HASH}`;
