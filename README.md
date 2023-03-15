[![Typing SVG](https://readme-typing-svg.demolab.com?font=Fira+Code&pause=3000&center=true&width=435&lines=Messaging+-+messaging+everywhere)]

Challenge to show Node skill. It creates a backend API to handle message sending.

## ⚡ Tech Stack

- ![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
- ![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
- ![Postgres](https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white)
- ![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
- ![Jest](https://img.shields.io/badge/-jest-%23C21325?style=for-the-badge&logo=jest&logoColor=white)

## 😱🪛 Pre-requisites

A Postgres server running locally

## 🖥️ Setup

Clone the repo on your local environment.

Run:
`yarn install`

Follow the steps:

1. Create a `.env.local` file on the root of the project based on `.env.default`
2. Create a `[db_name]` app database same as .env files.
3. Execute `$ yarn run setup:local`
4. Start the development server running `$ yarn run dev`

## 🧪 Running Tests

Follow the steps:

1. Create a `.env.test` file on the root of the project based on `.env.default`
2. Create a `test` app database.
3. Execute `$ yarn run setup:test`
4. Run `$ yarn test`

### Run specific test

Run the command:

`yarn test -- -t ['test name']`

Example:

`yarn test -- -t 'User transactions'`

## 🪟 Running on windows

If the project is running on windows run the command:

` yarn install -g win-node-env`

## 📅 Create and generate migration

Run the command:

`yarn run typeorm migration:[create | generate | run] -- -n [name]`

Example:

`yarn run typeorm migration:create -- -n CreateUserRepresentativeTable`

## 🔗 Sync models with db

Run the command

`yarn run typeorm -- schema:sync`
