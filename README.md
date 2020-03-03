<!-- TITLE: Proximie Challenge -->

# Preinstallation

Use Node.js LTS @ 12.16.0, you can use NVM to manage Node versions on your local

## Dependencies

Make sure you have `node`, `npm` and `angular/cli` installed in your machine.

### Install node and npm

Must have `node` and `npm` installed, other wise its better to install them using [nvm](#Install-NPM-via-NVM).

### Install Angular/cli

To install `angular/cli` run

```shell
npm install -g @angular/cli@{{version}}
```

For iv-orchestration-spa we are using version `~7.3.4`, run

```shell
npm install -g @angular/cli@~7.3.4
```

# Installation

## Copy environment files

```shell
cp src/environments/environment.ts.dist src/environments/environment.ts
```

## Build the environment

```shell
npm install
ng build
```

# Install NPM via NVM

## Installing nvm

1- Clone repository

```shell
wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.34.0/install.sh | bash
```

2- Add this to your profile (`~/.bash_profile`, `~/.zshrc`, `~/.profile`, or `~/.bashrc`)

```text
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion
```

3- Restart your machine or run

```shell
source {{profile}}
```

profile: (`~/.bash_profile`, `~/.zshrc`, `~/.profile`, or `~/.bashrc`)

Source [Node Version Manager Installation](https://github.com/nvm-sh/nvm)

## Installing npm

1- To get list of available versions run

```shell
nvm ls-remote
```

2- Select version from the list and install it run, (Better to install latest LTS version)

```shell
nvm install {{selected-version}}
```

Source [Installing Angular CLI](https://angular.io/cli#installing-angular-cli)
