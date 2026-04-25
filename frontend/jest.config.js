/** @type {import('jest').Config} */

const config = {
	collectCoverageFrom: ['src/**/*.{ts,tsx,js,jsx}', '!src/**/*.d.ts', '!src/main.tsx'],
	coverageDirectory: 'coverage',
	// Run test with --experimental-vm-modules: TODO: просит запускать тесты через ноду, проверю потом
	extensionsToTreatAsEsm: ['.ts', '.tsx'],
	moduleDirectories: ['node_modules', 'src'],
	moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
	moduleNameMapper: {
		'^.+\\.css$': 'identity-obj-proxy',
		'^.+\\.svg$': 'jest-svg-transformer'
	},
	setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
	testEnvironment: 'jsdom',
	testMatch: ['**/*.test.{ts,tsx,js,jsx}'],
	testPathIgnorePatterns: ['/node_modules/'],
	transform: {
		'^.+\\.(t|j)sx?$': '@swc/jest'
	},
	verbose: true
};

export default config;
