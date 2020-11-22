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
## Installation
The command that should be run to install dependencies is${commandDependencies}.
## Usage 
${repoInfo}
Make sure to include a picture of your project. 
## Credits
The creator of this project's email and GitHub is linked below. 
${emailAddress}
${gitHubUsername}
## Contributing
${contributingInfo}
## Tests
Use the ${commandTests} command to run a test.
`;
}

module.exports = generateMarkdown;