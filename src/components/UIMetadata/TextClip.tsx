const metadata = {
  cli: 'npx ui-library add text-clip',
  description: "Text with cool animation clipped to it",
  import: `
      import TextClip from "@/components/UIcomponents/TextClip";
    `,
  code: `
   import TextClip from "@/components/UIcomponents/TextClip";

      <TextClip text="TEXT CLIP"  />
      `,
  demo: "",
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
  }]


}

export { metadata }