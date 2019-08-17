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
