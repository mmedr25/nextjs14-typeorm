# How to use typeORM in nextjs 13/14

## Description
- This is a boilerplate for nextjs and typeorm. I am using postgres as a database but you can configure to your liking. I also created a custom loader to automatically add entities and other resources to the configuration.

- Any file that should not be loaded need to be in a folder named "abstract". You can check the structure of the project if is not very clear.

- There are custom commands in package.json to do migrations manually

- enjoy :-)
    

## Requirements:
* next >= 13
* typeorm  @latest

## Installation:

- clone the repo

#### or

1. install nextjs@latest
2. copy the "schema" folder in the root directory or "src"
3. if copied in "src" modifie the custom commands to migration to match with the new path
4. Change connection config in "schema/data-source.ts". you can as well see how the loader from "schema/loader.ts" works
5. Copy "app/connection.ts" into your "app" folder
6. add the following to next tsconfig.json:
    - "emitDecoratorMetadata": true,
    - "experimentalDecorators": true,
    - target: "esnext",
6. Test if everything is working
