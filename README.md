# Food Explorer API
This is Rocketseat's biggest challenge, where an end-to-end application must be done.

<a href="https://github.com/alexsandersilv/food-explorer">front-end repo</a>
## Tecnologias
<div>
  <img src="https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white"  alt="nodejs" />
  <img src="https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB"  alt="express" />
  <img src="https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=JSON%20web%20token"  alt="jwt" />
  <img src="https://img.shields.io/badge/sqlite-%2307405e.svg?style=for-the-badge&logo=sqlite&logoColor=white"  alt="sqlite" />
</div>

## Hosting
<div>
  <img src="https://img.shields.io/badge/Render-%46E3B7.svg?style=for-the-badge&logo=render&logoColor=white" alt="render" />
</div>

## Getting Started
```sh
# GitHub CLI
gh repo clone alexsandersilv/food-explorer-api

# git 
git clone https://github.com/alexsandersilv/food-explorer-api.git
```

### Install dependencies
```sh
# npm
npm install

# yarn
yarn

# pnpm
pnpm install 
```
After installing the project's dependencies, you can run it.
## Env
Create a new ``.env`` file to place the application's variables, if not created, the application would default to its settings
```env
PORT=""
SECRET_KEY=""
```
## Run

### Dev
Optimized environment for developers, with features such as hot reloading, debugging and logs, which facilitate the creation, testing and debugging of code.
```sh
# yarn 
yarn dev

# npm
npm run dev

# pnpm 
pnpm dev
```

### Build
Performs a variety of tasks, such as compiling and minifying code, optimizing resources, removing unnecessary files, and preparing the project for production deployment.
```sh
# yarn 
yarn build

# npm
npm run build

# pnpm 
pnpm build
```

### Start
Especially useful for projects that have a main input file, such as a web server or a real-time application
```sh
# yarn 
yarn start

# npm
npm run start

# pnpm 
pnpm start
```

### Migrate
It simplifies the database maintenance and evolution process, allowing changes to be applied and rolled back easily and securely.
```sh
# yarn 
yarn migrate

# npm
npm run migrate

# pnpm 
pnpm migrate
```

### Scripts
```json
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "pm2-runtime start ecosystem.config.js --env production",
    "dev": "nodemon src/server.js",
    "migrate": "knex migrate:latest"
},
```
