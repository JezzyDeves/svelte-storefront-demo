import { sveltekit, vitePreprocess } from '@sveltejs/kit/vite';
import type { UserConfig } from 'vite';

const config: UserConfig = {
	plugins: [sveltekit()],
	css: {
		preprocessorOptions: vitePreprocess()
	}
};

export default config;
