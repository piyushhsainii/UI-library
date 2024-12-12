const metadata = {
  cli: 'npx ui-library add text-clip',
  description: "Text with cool animation clipped to it",
  import: `import TextClip from "@/components/UIcomponents/TextClip";`,
  code: `
   import TextClip from "@/components/UIcomponents/TextClip";

      <TextClip text="TEXT CLIP"  />
      `,
  demo: ` <TextClip text="TEXT CLIP"  />`,
  hasVariants: true,
  variants: [{
    variantName: "purpleYellow",
    variant: `
   import TextClip from "@/components/UIcomponents/TextClip";

      <TextClip text="TEXT CLIP" variant="purpleYellow"  />
      `,
  }, {
    variantName: "yellowPurple",
    variant: `
       import TextClip from "@/components/UIcomponents/TextClip";
    
          <TextClip text="TEXT CLIP" variant="yellowPurple"  />
          `,
  }, {
    variantName: "redGreen",
    variant: `
       import TextClip from "@/components/UIcomponents/TextClip";
    
          <TextClip text="TEXT CLIP" variant="redGreen"  />
          `,
  }],
  manualSteps: [
    {
      title: "Install the following dependencies:",
      code: "npm install tailwind-merge"
    },
    {
      title: "Copy and paste the following code into your project",
      code: `
      import TextClip from "@/components/UIcomponents/TextClip";
      \n
      <TextClip text="TEXT CLIP"  />
      `
    },
    {
      title: "Update the import paths to match your project setup."
    },

  ]


}

export { metadata }