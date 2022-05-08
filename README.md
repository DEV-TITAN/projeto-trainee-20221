# Projeto Trainee 2022.1

## About The Project

Trainee Project challenge for newcomers in 2022.1 elaborated by [TITAN](https://titanci.com.br).

## Tech Stack

- [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)
- [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
- [Javascript](https://javascript.info)
- [Node.js](https://nodejs.dev/learn)
- [Express](https://expressjs.com)

## How do I get set up?

```bash
# Clone the repository.
$ git clone https://github.com/DEV-TITAN/projeto-trainee-20221.git
$ cd projeto-trainee-20221

# Use the node version specified in `.nvmrc`
$ nvm use

# Install dependencies.
$ npm install

# Set enviroment variables. Create a `.env` file in the project's root.
# Check out `.env.example` to see what needs to be set.
$ cp .env.example .env
$ vim .env

# Run the server for development.
$ npm run dev
```

## Contribution guidelines

```bash
# Clone the repository.
$ git clone https://github.com/DEV-TITAN/projeto-trainee-20221.git
$ cd projeto-trainee-20221

# Create a new branch from `develop` and name it following semantic branch names
# See: https://gist.github.com/seunggabi/87f8c722d35cd07deb3f649d45a31082
$ git checkout develop
$ git checkout -b feat/new-feature

# Commit your changes with semantic commit messages.
# See: https://gist.github.com/joshbuchea/6f47e86d2510bce28f8e7f42ae84c716
$ git add .
$ git commit -m "feat: implement new feature"

# Push your changes to the remote repository, open a pull request against the
# `develop` branch and wait for merging.
$ git push origin feat/new-feature
```

## Project's Enviroments and Deploy

In the `main` branch, one can use the production version of this project
whereas in the `develop` branch the latest and more updated features can be
found.

The `main` branch is deployed on Heroku and it's ready for use. Check the link
below:

- [Production](https://projeto-trainee-20221.herokuapp.com)

## Documentation

The scope of the project can be found [here](./docs/SCOPE.md).
