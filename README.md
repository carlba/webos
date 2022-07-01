# Typescript Clean Project

This is meant to a starter Typescript project

## Setup

1. eslint for Typescript 

https://khalilstemmler.com/blogs/typescript/eslint-for-typescript

```bash
npm install --save-dev typescript eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin
```

2. Initialize Typescript

```bash
npx tsc --init
```

## Usage
      
### Maintaining the repo

It is important to keep the dependencies of this repo up to date. Do these steps:
 
1. First ensure that the `npm-check-updates` is installed globally

   ```bash
   npm install -g npm-check-updates
   ```
   
2. Then update the version identifiers of the `package.json` and `package-lock.json` files to the latest version: 
    
   ```bash
    ncu -u
    ```

3. Update your environment:

    ```bash
    npm update
    ```

## Tests

```sh
npm install
npm test
```

## Dependencies

None

## Dev Dependencies

- [gts](https://ghub.io/gts): Google TypeScript Style
- [typescript](https://ghub.io/typescript): TypeScript is a language for application scale JavaScript development
- [@types/node](https://ghub.io/@types/node): TypeScript definitions for Node.js

## Information

## License

MIT
