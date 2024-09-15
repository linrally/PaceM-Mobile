module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    // Adding plugins for handling class properties, private methods, and private properties
    ['@babel/plugin-transform-class-properties', { loose: true }], 
    ['@babel/plugin-transform-private-methods', { loose: true }],
    ['@babel/plugin-transform-private-property-in-object', { loose: true }],

    // Plugin for environment variables with react-native-dotenv
    ['module:react-native-dotenv', {
      moduleName: '@env',  // Import variables as '@env'
      path: '.env',        // Ensure the correct path to your .env file
      allowUndefined: true, // Avoid errors if variables are undefined
    }],
  ],
};
