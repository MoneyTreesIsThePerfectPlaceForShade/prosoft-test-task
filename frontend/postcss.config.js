import cssnano from 'cssnano';
import postcssImport from 'postcss-import';
import postcssMixins from 'postcss-mixins';
import postcssPresetEnv from 'postcss-preset-env';

export default {
	plugins: [
		postcssMixins(),
		postcssImport(),
		postcssPresetEnv({
			features: {
				'nesting-rules': true
			},
			stage: 3
		}),
		cssnano()
	]
};
