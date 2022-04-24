

module.exports = {
	preset: "react-native",
	testPathIgnorePatterns: [
		"/node_modules/",
		"/android/",
		"/ios/",
		"node_modules/(?!(react-native-responsive-fontsize)/)"
	],
	setupFilesAfterEnv: [
			"@testing-library/jest-native/extend-expect",
			"jest-styled-components"
	],

	collectCoverage: true,
	collectCoverageFrom: [
		"src/**/*.tsx",
		"!src/**/*.spec.tsx"
	],
	coverageReporters: [
		"lcov"
	],
	transform: {
    "^.+\\.jsx?$": "babel-jest", // Adding this line solved the issue
    "^.+\\.tsx?$": "ts-jest"
  },
}
