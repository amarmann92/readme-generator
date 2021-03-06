function renderLicenseBadge(license) {
    if (license !== 'None') {
      return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`;
    }
    return '';
  }
  
  function renderLicenseLink(license) {
  
  }
  
  function renderLicenseSection(license) {
    if (license !== 'None') {
      return `## License
  
  This project is licensed under the ${license} license.`;
    }
    return '';
  }
  
  function generateMarkdown(data) {
    return `# ${data.title}
  ${renderLicenseBadge(data.license)}
  
  ## Description
  
  ${data.description}
  
  ## Table of Contents 
  
  * [Installation](#installation)
  
  * [Contributing](#contributing)
  
  * [Tests](#tests)
  
  * [Questions](#questions)
  
  ## Installation
  
  For instilation, type this in the terminal:
  
  ${data.installation}
  
  ${renderLicenseSection(data.license)}
    
  ## Contributing
  
  ${data.contributing}
  
  ## Tests
  
  For testing type this in the terminal:
  
  ${data.test}
  
  ## Questions
  
  Contact me with any questioins or concerns at ${
      data.email
    }
  
  `;
  }
  
  module.exports = generateMarkdown;