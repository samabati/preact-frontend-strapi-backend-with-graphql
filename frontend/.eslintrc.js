module.exports = {
    extends: [
      'eslint:recommended',   // Basic ESLint recommended rules
      'preact',                // Preact-specific rules from eslint-config-preact
      "@babel/plugin-transform-private-property-in-object"
    ],
    parserOptions: {
      ecmaVersion: 2020,
      sourceType: 'module'
    },
    rules: {
      // Customize rules if needed
    },
    plugins: [
      // Add plugins if necessary
    ]
  };
  