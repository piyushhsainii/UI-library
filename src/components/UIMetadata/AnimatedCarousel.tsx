const metadata = {
    cli: 'npx velour-ui add animated-carousel',
    description: "A Navigation Bar with animation",
    import: `
    import AnimatedCarousel from '@/components/UIcomponents/AnimatedCarousel'
      `,
    code: `
      import AnimatedCarousel from '@/components/UIcomponents/AnimatedCarousel'
        <AnimatedCarousel
            img={[ /** image links here **/ ]}
            title=""        //optional
        />
      `,
    demo: `
            <AnimatedCarousel
            img={["demo1.png", "demo2.png"]}
            title="title"
        />
  `,
    hasVariants: false,
    manualSteps: [
        {
            title: "Install the following dependencies:",
            code: "npm install tailwind-merge framer-motion"
        },
        {
            title: "Copy and paste the following code into your project",
            code: `
          import AnimatedCarousel from '@/components/UIcomponents/AnimatedCarousel'
          <AnimatedCarousel
            img={[ /** image links here **/ ]}
            title=""        //optional
        />
        `
        },
        {
            title: "Update the import paths to match your project setup."
        },

    ]
}

export { metadata }