# ts-react-express-postgresql-auth

Boilerplate with redux and local authentication.

## Technologies

### Front-end

- CRA React 16.9
- React Router
- Redux + Thunk + Redux dev tools
- Styled components
- Jest + React Testing Library

### Back-end

- Node.js + express
- Postgresql + node-postgres,
- bcrypt, passport.js, joi

## Getting started

### Prerequisites

Nodemon, Node.js, PostgreSQL database

### Installation

```
git clone https://github.com/Xay7/typescript-react-express-postgresql-boilerplate.git boilerplate
npm install && cd server && npm install && cd ../client && npm install && cd ..
```

Make .env file in the server folder and provide postgresql variables to connect to the database in `server/src/db/db.ts`.

Example

```
PGUSER=admin
PGHOST=localhost
PGPASSWORD=123456
PGDATABASE=test
PGPORT=5432
```

### Launching

Navigate to the root and simply use of of these commands

`npm start` - start server and client using concurrently

`npm run client` - start react server on port 3000

`npm run server` - start express server on port 3001

## Folder structure

```
|-- root
    |-- .gitignore
    |-- package-lock.json
    |-- package.json
    |-- README.md
    |-- client
    |   |-- .env
    |   |-- package-lock.json
    |   |-- package.json
    |   |-- tsconfig.json
    |   |-- public
    |   |   |-- favicon.ico
    |   |   |-- index.html
    |   |   |-- logo192.png
    |   |   |-- logo512.png
    |   |   |-- manifest.json
    |   |   |-- robots.txt
    |   |-- src
    |       |-- App.tsx
    |       |-- index.css
    |       |-- index.tsx
    |       |-- react-app-env.d.ts
    |       |-- store.ts
    |       |-- components
    |       |-- state
    |           |-- actionsTypes.ts
    |           |-- actions
    |           |   |-- action.ts
    |           |-- reducers
    |               |-- reducer.ts
    |-- server
        |-- .env
        |-- package-lock.json
        |-- package.json
        |-- tsconfig.json
        |-- src
            |-- index.ts
            |-- controllers
            |   |-- auth.ts
            |-- db
            |   |-- db.ts
            |-- middlewares
            |   |-- passport.ts
            |   |-- validateBody.ts
            |-- routes
                |-- auth.ts
```

## Todo

Add types folder, make sample ones

Implement JWT authentication

Make client UI for functionality
