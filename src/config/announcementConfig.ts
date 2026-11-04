import type { AnnouncementConfig } from "../types/announcementConfig";
// 可在网页后台 /blog/admin/ 编辑的内容，见 src/data/site.json
import siteData from "../data/site.json";

export const announcementConfig: AnnouncementConfig = {
	// 公告标题，留空则走i18n默认标题
	title: "",

	// 公告内容
	content: siteData.announcement.content,

	// 是否允许用户关闭公告
	closable: true,

	link: {
		// 启用链接
		enable: true,
		// 链接文本
		text: "了解更多",
		// 链接 URL
		url: "/blog/about/",
		// 内部链接
		external: false,
	},
};
