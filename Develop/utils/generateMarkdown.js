// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === " "){
    return " ";
  }
   return `![${license}](${renderLicenseLink(license)})`
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
// license reference link https://gist.github.com/lukas-h/2a5d00690736b4c3a7ba

 if (license === "MIT"){
   return "https://img.shields.io/badge/License-MIT-yellow.svg"
    }             
 else if (license ==="Apache2.0"){
   return "https://img.shields.io/badge/License-Apache_2.0-blue.svg"
    }
 else if (license ==="GPLv3"){
   return "https://img.shields.io/badge/License-GPLv3-blue.svg"
    }
 else if (license ==="BSD2c"){
   return "https://img.shields.io/badge/License-BSD_2--Clause-orange.svg"
    }
 else if (license ==="BoostSW"){
   return "https://img.shields.io/badge/License-Boost_1.0-lightblue.svg"
    }
 else if (license ==="EclipsePublic"){
   return "https://img.shields.io/badge/License-EPL_1.0-red.svg"
    }
 else {
   license = "None"
 }
 return " ";
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
if (license === " "){
  return " ";
}else{
  return renderLicenseBadge(license);
}

}

// TODO: Create a function to generate markdown for README
//refernce link: https://www.markdownguide.org/basic-syntax/
function generateMarkdown(data) {
  return `
  # ${data.title}
  by ${data.devName}
  
  ${renderLicenseSection(data.license)}

  ## Table of Content 📖
  - [Description](#description)
  - [Usage](#usage)
  - [Installation](#installation)
  - [License](#license)
  - [Credit](#credit)
  - [Dependencies](#dependencies)
  - [Reach-us](#reach-us)
  - [GitHub-name](#github-name)
  - [Video-Link](#video-link)

  ${renderLicenseLink(data.license)}
  ## Description
  ${data.description}

  ## Installation
  ${data.installation}

  ## License
  The project is licensed under ${data.license}.

  ## Badges
  ${renderLicenseSection(data.license)}

  ##  Usage
  ${data.usage}

  ## Contribution Guidelines
  ${data.contribution}

  ## Credit
  ${data.credit}

  ## Dependencies
  ${data.dependencies}

  ## Reach-us
  For any questions please reach us at: (${data.email}).

  ## GitHub-name
  ${data.github}

  ## Video-Link
  ${data.videolink}

`;
}

module.exports = generateMarkdown;
