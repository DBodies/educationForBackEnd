// import fs from 'node:fs/promises';
// import path from 'node:path';
// import { fileURLToPath } from 'node:url';
// import { dirname } from 'node:path';

// const __fileName = fileURLToPath(import.meta.url)
// const __dirname = dirname(__fileName)
// export const path_DB = path.resolve(__dirname, './data.txt')


// export const readFile = async () => {
//     try {
//     const data = await fs.readFile(path_DB, 'utf-8')
//     return JSON.parse(data)
//     } catch (error) {
//         const message = error instanceof Error ? error.message : String(error)
//         throw new Error(`readFile failed: ${message}`)
//     }
// }

// import fs from "node:fs/promises";
// import path from "node:path";
// import { fileURLToPath } from "node:url";

// export function addition(a: number, b: number): number {
//     return a + b
// }

// export async function testAsync(): Promise<string> {
//     try {
//         const result = await new Promise<string>((resolve, reject) => {
//             setTimeout(() => {
//                 resolve("Timeout was over")
//             }, 1000)
//         })
//         console.log(result)
//         return result
//     } catch (error: unknown) {
//         const message = error instanceof Error ? error.message : String(error)
//         throw new Error(`Something went wrong: ${message}`)
//     }
// }


// const __fileName = fileURLToPath(import.meta.url)
// const __dirname = path.dirname(__fileName)

// export async function writeFile(): Promise<string> {
//     const filePath = path.join(__dirname, '../texts/data.txt')

// type User = {
//       id: string;
//   name: string;
//   phone: string;
//   email: string;
//   job: string;
// }
//     const data: User = {
//     id: "6bdc16e3-da49-4dda-8bf4-3ad06a8cb3GG",
//     name: "Denis Denis",
//     phone: "05517686813",
//     email: "dkovalevskiy02@gmail.com",
//     job: "job"
//     }

//     try 
//         let content = await fs.readFile(filePath, "utf-8")
//         const users: User[] = content ? JSON.parse(content) : []
//         users.push(data)
//         await fs.appendFile(filePath, JSON.stringify(data) + "\n", 'utf-8')
//         const result = await new Promise<string>((resolve, reject) => {
//             setTimeout(() => {
//                 resolve("Timeout for write is over")
//             }, 2000)
//         })
//         console.log(result)
//         return result
//     } catch (error) {
//         const message = error instanceof Error ? error.message : String(error)
//         throw new Error(`Something went wrong: ${message}`)
//     }
// }
