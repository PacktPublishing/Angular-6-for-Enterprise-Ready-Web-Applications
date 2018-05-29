#!/bin/bash

# In order to be able to execute this script, run 'chmod a+x install-mac-deps.sh' to make the file executable

echo "Execute Installation Script"
read -r -p "Absolutely NO WARRANTIES or GUARANTEES are provided. Are you sure you want to continue? [y/N] " response
if [[ "$response" =~ ^([yY][eE][sS]|[yY])+$ ]]
then
    # This script is intentionally kept simple to demonstrate basic automation techniques.
    echo "Note: This script assumes a clean environment and therefore is not resilient."

    echo "Installing brew"
    /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"

    echo "Installing git"
    brew install git
    gitVersion=$(git --version)
    echo "git: $gitVersion"

    echo "Installing GitHub Desktop"
    brew cask install github-desktop
    echo "Verify installation of GitHub Desktop manually."

    echo "Installing JDK"
    brew cask install java
    jdkVersion=$(java -version)
    echo "JDK: $jdkVersion"

    echo "Installing NodeJS"
    brew install nodejs
    nodeVersion=$(node -v)
    echo "Node: $nodeVersion"
    npmVersion=$(npm -v)
    echo "npm: $npmVersion"

    echo "Installing VS Code"
    brew cask install visual-studio-code
    echo "Verify installation of VS Code manually."

    echo "Installing STS"
    brew cask install sts
    echo "Verify installation of STS manually."
else
    echo "Aborted."
fi

## Samples of More sophisticated install & verify routine
# echo "Checking if brew is installed"
# which -s brew
# if [[ $? != 0 ]] ; then
#   echo "Installing brew"
#   /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)" < /dev/null
# else
#   echo "Found brew"
# fi

# echo "Checking if Java is installed"
# which -s java
# if [[ $? != 0 ]] ; then
#   echo "Installing Java"
#   brew cask install java
# else
#   echo "Found Java"
# fi

# echo "Checking for Node version ${NODE_VERSION}"
# node -v | grep ${NODE_VERSION}
# if [[ $? != 0 ]] ; then
#   echo "Installing Node version ${NODE_VERSION}"
#   brew install nodejs
# else
#   echo "Found Node version ${NODE_VERSION}"
# fi