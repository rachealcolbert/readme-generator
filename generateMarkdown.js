// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.titleOfProject}
## Description 
${data.projectDescription}
## License
![License badge](https://img.shields.io/badge/license-${data.licenses}-green)
## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
* [License](#license)
## Table of Contents
Make sure to add a screenshot of your project to this README.
## Installation
The command that should be run to install dependencies is ${data.commandDependency}.
## Usage 
${data.repoInfo}
Make sure to include a picture of your project. 
## Credits
The creator of this project's email and GitHub is below. 
- ${data.emailAddress}
- ${data.gitHubUsername}
## Contributing
${data.contributingInfo}
## Tests
Use the ${data.commandTests} command to run a test.
`;
}

module.exports = generateMarkdown;