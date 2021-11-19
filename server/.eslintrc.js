{
	"rules": {
		"no-var-requires": true,
		"no-any": true,
		"promise-function-async": true,
		"await-promise": true,
		"curly": true,
		"prefer-for-of": true,
		"forin": true,
		"no-console": [
			true,
			"log",
			"error"
		],
		"no-debugger": true,
		"no-duplicate-super": true,
		"no-duplicate-switch-case": true,
		"no-invalid-template-strings": true,
		"no-misused-new": true,
		"no-return-await": true,
		"no-shadowed-variable": true,
		"no-switch-case-fall-through": true,
		"no-tautology-expression": true,
		"no-unused-variable": true,
		"no-var-keyword": true,
		"static-this": true,
		"switch-default": true,
		"triple-equals": false,
		"no-require-imports": false,
		"prefer-const": true,
		"arrow-return-shorthand": true,
		"class-name": true,
		"file-name-casing": [
			true,
			"kebab-case"
		],
		"prefer-switch": [
			true,
			{
				"min-cases": 3
			}
		],
		"switch-final-break": true,
		"import-spacing": true,
		"max-line-length": [
			true,
			120
		],
		"no-trailing-whitespace": false,
		"quotemark": [
			true,
			"single"
		],
		"semicolon": [
			true,
			"always"
		],
		"trailing-comma": false,
		"indent": [
			true,
			"tabs",
			4
		],
		"linterOptions": {
			"exclude": [
				"./src/**/*.d.ts"
			]
		}
	}
}