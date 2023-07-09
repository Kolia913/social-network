module.exports = {
  "**/*.(ts|tsx|js)": () => [
    `eslint --fix --ignore-path .gitignore`,
    `prettier --write --ignore-path .gitignore .`,
  ],
};
