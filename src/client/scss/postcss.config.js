const glob = require('glob');
const path = require('path');

module.exports = {
	plugins: {
		'postcss-import': {
			addModulesDirectories: ['app'],
			resolve(id, base) {
				return glob.sync(path.join(base, id));
			},
		},
		precss: { },
		autoprefixer: { browsers: ['last 2 versions', 'iOS >= 8'] },
	},
};
