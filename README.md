[![Typing SVG](https://readme-typing-svg.demolab.com?font=Fira+Code&pause=3000&center=true&width=435&lines=Messaging+-+messaging+everywhere)]

Challenge to show Node skill. It creates a backend API to handle message sending.

---

## ⚡ Tech Stack

- ![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
- ![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
- ![Postgres](https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white)
- ![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
- ![Jest](https://img.shields.io/badge/-jest-%23C21325?style=for-the-badge&logo=jest&logoColor=white)

---

## 🖥️ Setup

Run:
`npm install`

Follow the steps:

1. Create a `.env.local` file on the root of the project based on `.env.default`
2. Create a `development` app database. `$ createdb <DB_NAME>;`
3. Execute `$ npm run initial:local`
4. Start the development server running `$ npm run dev`

---

## 🧪 Running Tests

Follow the steps:

1. Create a `.env.test` file on the root of the project based on `.env.default`
2. Create a `test` app database. `$ createdb <DB_NAME>;`
3. Execute `$ npm run initial:test`
4. Run `$ npm test`

### Run specific test

Run the command:

`npm test -- -t ['test name']`

Example:

`npm test -- -t 'User transactions'`

---

## 🪟 Running on windows

If the project is running on windows run the command:

` npm install -g win-node-env`

---

## 📅 Create a generate/migration

Run the command:

`npm run typeorm migration:[create | generate | run] -- -n [name]`

Example:

`npm run typeorm migration:create -- -n CreateUserRepresentativeTable`
