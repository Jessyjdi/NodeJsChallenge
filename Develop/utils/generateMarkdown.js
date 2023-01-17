// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
// license reference link https://gist.github.com/lukas-h/2a5d00690736b4c3a7ba
 let licenseType = license.license;
 let userLicense = ' '
  if (licenseType == "MIT"){
    userLicense = `![Badge: MIT ](https://img.shields.io/badge/License-MIT-yellow.svg)`
     }             
  else if (licenseType =="Apache2.0"){
    userLicense = `![Badge: Apache2.0](https://img.shields.io/badge/License-Apache_2.0-blue.svg)`
     }
  else if (licenseType =="GPLv3"){
    userLicense = `![Badge: GPLv3](https://img.shields.io/badge/License-GPLv3-blue.svg)`
     }
  else if (licenseType =="BSD2c"){
    userLicense = `![Badge: BSD2c](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)`
     }
  else if (licenseType =="BoostSW"){
    userLicense = `![Badge: BoostSW](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)`
     }
  else if (licenseType =="EclipsePublic"){
    userLicense = `![Badge: EclipsePublic](https://img.shields.io/badge/License-EPL_1.0-red.svg)`
     }
  else {
    license.license = "None"
  }
  return userLicense;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
if (license !== "None"){
  return `- [License](#license-📝)`
}
return ``;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
if (license !== "None"){
  return `## License 📝 The application uses ${license} license.`
}
return ``;
}

// TODO: Create a function to generate markdown for README
//refernce link: https://www.markdownguide.org/basic-syntax/
function generateMarkdown(data) {
  return `
  # ${data.title}
  by ${data.devName}
  
  ${renderLicenseBadge(data.license)}

  ## Table of Content 📖
  * [Description] (#description)
  * [Usage] (#usage)
  * [Installation] (#installation)
  * [List the project dependencies] (#listofprojectdependencies)
  * [Reach-us] (#reach-us)
  ${renderLicenseLink(data.license)}
  ## Description
  ${data.description}

  ## ⚙️ Installation
  ${data.installation}

  ##  Usage
  ${data.usage}

  ## Contribution Guidelines
  ${data.contribution}

  ## List the project dependencies
  ${data.dependencies}

  ## Reach us
  For any questions please reach us at: (${data.email}).

  ## GitHub username
  ${data.github}

  ## 📹 Videolink
  ${data.videolink}

`;
}

module.exports = generateMarkdown;
