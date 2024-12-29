export interface metadata {
    cli: string
    code: string
    demo: string
    description: string
    import: string
    hasVariants: boolean
    variants: [
        {
            variantName: string
            variant: string
        }
    ],
    manualSteps: [
        {
            title: string
            code: string
        }
    ],
    additionalSteps: [
        {
            title: string,
            desc: string
        }
    ]
}