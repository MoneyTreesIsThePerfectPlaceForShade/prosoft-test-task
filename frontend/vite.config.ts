import react from '@vitejs/plugin-react-swc';
import {defineConfig} from 'vite';

export default defineConfig(({command}) => {
	const commonConfig = {
		css: {
			modules: {
				generateScopedName: (name: string, filename: string, css: string) => {
					const filePath = filename.split('/').pop() || '';
					const fileName = filePath.replace(/\.module\.(css|scss|sass|less|styl|stylus)$/, '');
					const hash = Buffer.from(css + filename).toString('base64').slice(0, 5).replace(/[+/=]/g, '');
					return `${fileName}__${name}___${hash}`;
				}
			}
		},
		plugins: [react()],
		resolve: {
			alias: {
				app: '/src/app',
				components: '/src/components',
				features: '/src/features',
				pages: '/src/pages',
				providers: '/src/providers',
				shared: '/src/shared'
			}
		},
		server: {
			allowedHosts: true
		}
	};

	if (command === 'serve') {
		// dev
		return {...commonConfig};
	} else {
		// build
		return {
			...commonConfig,
			base: './',
			build: {
				outDir: 'build',
				rollupOptions: {
					output: {
						assetFileNames: '[name]-[hash][extname]',
						chunkFileNames: '[name]-[hash].js',
						entryFileNames: '[name]-[hash].js',
						manualChunks: {
							vendor: ['react', 'react-dom']
						}
					}
				}
			}
		};
	}
});
