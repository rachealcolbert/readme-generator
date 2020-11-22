// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.titleOfProject}
## Description 
${data.projectDescription}
## License
![License badge](https://img.shields.io/badge/license-${data.licenses}-green)
`;
}

module.exports = generateMarkdown;