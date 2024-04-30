"use node" 
import fs from 'fs'

const BASE_DIR = "./schema" // the root directory for typeorm projet

const isPath = (path: string) => fs.existsSync(path)

const makeDir = (path: string) => {
    fs.mkdirSync(path)
}

// will include ts files and exclude abstract folder
const fileValidation = (val: string | Buffer) => {
    val = val as string
    return val.endsWith(".ts") && !val.toLocaleLowerCase().includes("abstract")
}

const directoryReader = (folder: string) => {
    const filesDir = `${BASE_DIR}/${folder}`;

    // you can also throw an error instead of creating the file
    if (!isPath(filesDir)) {
        makeDir(filesDir);
        return []
    }

    return fs
        .readdirSync(filesDir, {recursive: true})
        .filter(fileValidation) as string[]
}

const filesClassReader = (files: string[], folder: string) => {
    return files.flatMap(filename => {
        filename = filename.split(".ts")[0]
        const entName = require(`./${folder}/${filename}`)

        return Object.values(entName)
    })
}

export const classLoader = (folder: string) => {
    const files = directoryReader(folder);
    return filesClassReader(files, folder);
}