// @ts-check
import { defineGitDependency } from "leafy-utils";

export default defineGitDependency({
	remote: {
		url: "https://github.com/Herobrine643928/Chest-UI",
		branch: "main",
		path: "RP",
	},
	dependencies: {
		"ui/": "/ui/",
		"textures/": "/textures/",
	},
});
