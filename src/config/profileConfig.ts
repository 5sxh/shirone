import type { ProfileConfig } from "@/types/config";
import { withUserConfig } from "../utils/config-overlay.ts";

/**
 * 博主资料：头像 / 名称 / 简介 / 社交链接（侧栏 Profile 卡片、页脚、RSS 作者等消费）。
 * 类型见 src/types/config.ts。
 */
export const profileConfig: ProfileConfig = withUserConfig("profile", {
	avatar: "assets/images/5sxh.webp", // Relative to the /src directory. Relative to the /public directory if it starts with '/'
	name: "星痕",
	bio: "世界这么大，应该去看看。",
	links: [
 {
			name: "GitHub",
			icon: "fa6-brands:github",
			url: "https://github.com/5sxh",
		},
		{
			name: "Email",
			icon: "material-symbols:mail-rounded",
			url: "mailto:xsxinghen@5xh.top",
		},
/*
		{
			name: "Twitter",
			icon: "fa6-brands:twitter", // Visit https://icones.js.org/ for icon codes
			// You will need to install the corresponding icon set if it's not already included
			// `pnpm add @iconify-json/<icon-set-name>`
			url: "https://twitter.com",
		},
		{
			name: "Steam",
			icon: "fa6-brands:steam",
			url: "https://store.steampowered.com",
		},
		{
			name: "GitHub",
			icon: "fa6-brands:github",
			url: "https://github.com/LyraVoid/Shirone",
		},
*/
	],
});
