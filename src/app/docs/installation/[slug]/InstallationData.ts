export const data = [
    {
        framework: "Vite",
        title: "Vite",
        description: "Install and Configure Vite",
        steps: [
            {
                title: "Create a  project",
                description: "",
                code: [
                    {
                        title: "Start by creating a new React project using vite",
                        code: "npm create vite@latest"
                    },
                    {
                        title: "",
                        code: ""
                    },
                ]
            },
            {
                title: "Add Tailwind and its configuration",
                description: "",
                code: [
                    {
                        title: "Install tailwindcss and its peer dependencies, then generate your tailwind.config.js and postcss.config.js files:",
                        code: `npm install -D tailwindcss postcss autoprefixer \nnpx tailwindcss init -p
                    `
                    },
                    {
                        title: "Add this import header in your main css file, src/index.css in our case:",
                        code: `@tailwind base;\n@tailwind components;\n@tailwind utilities;
                    `
                    },
                    {
                        title: "Configure the tailwind template paths in tailwind.config.js:",
                        code: `/** @type {import('tailwindcss').Config} */\nmodule.exports = {\ncontent: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],\ntheme: {\nextend: {},\n},\nplugins: [],\n}
                    `,
                    },
                ]
            },
            {
                title: "Edit tsconfig.json file",
                description: "The current version of Vite splits TypeScript configuration into three files, two of which need to be edited. Add the baseUrl and paths properties to the compilerOptions section of the tsconfig.json and tsconfig.app.json files:",
                code: [{
                    title: "",
                    code: `\n{\n"files": [],\n"references": [\n{\n"path": "./tsconfig.app.json"\n},\n{\n"path": "./tsconfig.node.json"\n }\n],\n "compilerOptions": {\n "baseUrl": ".",\n "paths": {\n"@/*": ["./src/*"]\n }\n }\n}
                    `
                }]
            },
            {
                title: "Edit tsconfig.app.json file",
                description: "Add the following code to the tsconfig.app.json file to resolve paths, for your IDE:",
                code: [{
                    title: "",
                    code: `{\n"compilerOptions": {\n// ...\n "baseUrl": ".",\n"paths": {\n"@/*": [\n"./src/*"\n]\n}\n// ...\n}\n}
                    `
                }]
            },
            {
                title: "Update vite.config.ts",
                description: "Add the following code to the vite.config.ts so your app can resolve paths without error",
                code: [
                    {
                        title: "",
                        code: `npm i -D @types/node`
                    },
                    {
                        title: "",
                        code: `\nimport path from "path"\nimport react from "@vitejs/plugin-react"\nimport { defineConfig } from "vite"\nexport default defineConfig({\nplugins: [react()],\nresolve: {\nalias: {\n"@": path.resolve(__dirname, "./src"),\n},\n},\n})
                        `
                    },
                ]
            },
            {
                title: "Run the CLI",
                description: "Run the shadcn-ui init command to setup your project:",
                code: [{
                    title: "",
                    code: "npx shadcn@latest init"
                }]
            },
            {
                title: "Configure components.json",
                description: "You will be asked a few questions to configure components.json:",
                code: [
                    {
                        title: "",
                        code: `\nWhich style would you like to use? › New York\nWhich color would you like to use as base color? › Zinc\nDo you want to use CSS variables for colors? › no / yes
                        `
                    }
                ]
            },
            {
                title: "That's it",
                description: "You can now start adding components to your project.",
                code: [
                    {
                        title: "",
                        code: "npx shadcn@latest add button"
                    },
                    {
                        title: "The command above will add the Button component to your project. You can then import it like this:",
                        code: `\nimport { Button } from "@/components/ui/button"\nexport default function Home() {\nreturn (\n<div>\n<Button>Click me</Button>\n</div>\n)\n}
                        `
                    },
                ]
            },
        ]

    },
    {
        framework: "Next.js",
        title: "Next.js",
        description: "Install and Configure Next.js",
        steps: [
            {
                title: "Create project",
                description: "Run the init command to create a new Next.js project or to setup an existing one:",
                code: [{
                    title: "",
                    code: "npx shadcn@latest init"
                }, {
                    title: "You can use the -d flag for defaults i.e new-york, zinc and yes for the css variables.",
                    code: "npx shadcn@latest init -d"
                }]

            },
            {
                title: "Configure components.json",
                description: "You will be asked a few questions to configure components.json:",
                code: [{
                    title: "",
                    code: `\nWhich style would you like to use? › New York\nWhich color would you like to use as base color? › Zinc\nDo you want to use CSS variables for colors? › no / yes
                    `
                },]

            },
            {
                title: "That's it",
                description: "You can now start adding components to your project.",
                code: [{
                    title: "",
                    code: `npx shadcn@latest add button`
                }, {
                    title: "The command above will add the Button component to your project. You can then import it like this",
                    code: `\nimport { Button } from "@/components/ui/button"\nexport default function Home() {\nreturn (\n<div>\n<Button>Click me</Button>\n</div>\n)\n}
                    `
                }]



            },
        ]


    },
]