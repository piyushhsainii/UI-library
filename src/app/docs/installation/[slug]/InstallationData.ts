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
                        code: `
                    npm install -D tailwindcss postcss autoprefixer
 
                    npx tailwindcss init -p
                    `
                    },
                    {
                        title: "Add this import header in your main css file, src/index.css in our case:",
                        code: `
                    @tailwind base;
                    @tailwind components;
                    @tailwind utilities;
                    `
                    },
                    {
                        title: "Configure the tailwind template paths in tailwind.config.js:",
                        code: `
                        /** @type {import('tailwindcss').Config} */
                        module.exports = {
                        content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
                        theme: {
                            extend: {},
                        },
                        plugins: [],
                        }
                    `,
                    },
                ]
            },
            {
                title: "Edit tsconfig.json file",
                description: "The current version of Vite splits TypeScript configuration into three files, two of which need to be edited. Add the baseUrl and paths properties to the compilerOptions section of the tsconfig.json and tsconfig.app.json files:",
                code: [{
                    title: "",
                    code: `
                    {
                        "files": [],
                        "references": [
                            {
                            "path": "./tsconfig.app.json"
                            },
                            {
                            "path": "./tsconfig.node.json"
                            }
                        ],
                        "compilerOptions": {
                            "baseUrl": ".",
                            "paths": {
                            "@/*": ["./src/*"]
                            }
                        }
                        }
                    `
                }]
            },
            {
                title: "Edit tsconfig.app.json file",
                description: "Add the following code to the tsconfig.app.json file to resolve paths, for your IDE:",
                code: [{
                    title: "",
                    code: `
                       {
                        "compilerOptions": {
                            // ...
                            "baseUrl": ".",
                            "paths": {
                            "@/*": [
                                "./src/*"
                            ]
                            }
                            // ...
                        }
                        }
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
                        code: `
                        import path from "path"
                        import react from "@vitejs/plugin-react"
                        import { defineConfig } from "vite"

                        export default defineConfig({
                        plugins: [react()],
                        resolve: {
                            alias: {
                            "@": path.resolve(__dirname, "./src"),
                            },
                        },
                        })
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
                        code: `
                        Which style would you like to use? › New York
                        Which color would you like to use as base color? › Zinc
                        Do you want to use CSS variables for colors? › no / yes
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
                        code: `
                        import { Button } from "@/components/ui/button"
                        export default function Home() {
                        return (
                            <div>
                            <Button>Click me</Button>
                            </div>
                        )
                        }
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
                    code: `
                    Which style would you like to use? › New York
                    Which color would you like to use as base color? › Zinc
                    Do you want to use CSS variables for colors? › no / yes
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
                    code: `
                    import { Button } from "@/components/ui/button"
                    export default function Home() {
                    return (
                        <div>
                        <Button>Click me</Button>
                        </div>
                    )
                    }
                    `
                }]



            },
        ]


    },
]