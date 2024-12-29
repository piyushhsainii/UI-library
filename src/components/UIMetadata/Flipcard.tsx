const metadata = {
    cli: 'npx velour-ui add flipcard',
    description: "A Card Component that flips horizontally on hover!",
    import: `import Flipcard from './FlipCard'`,
    code: `
import Flipcard from './FlipCard'";
<Flipcard img="img-link">
    <div>
        This is ROBOT
    </div>
</Flipcard>
// you can pass cardClassname , cardbackClassname to Flipcard component according to your need.

        `,
    demo: `<Flipcard img="img-link">
    <div>
        This is ROBOT
    </div>
</Flipcard>
// you can pass cardClassname , cardbackClassname to Flipcard component according to your need.
`,
    hasVariants: false,
    variants: [{
        variantName: "purpleYellow",
        variant: `
     import TextClip from "@/components/ui/TextClip";
  
        <TextClip text="TEXT CLIP" variant="purpleYellow"  />
        `,
    }, {
        variantName: "yellowPurple",
        variant: `
         import TextClip from "@/components/ui/TextClip";
      
            <TextClip text="TEXT CLIP" variant="yellowPurple"  />
            `,
    }, {
        variantName: "redGreen",
        variant: `
         import TextClip from "@/components/ui/TextClip";
      
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
import { cn } from "@/lib/utils";
import { ClassNameValue } from "tailwind-merge";

const Flipcard = (
    { img, children, cardClassname, cardbackClassname
    }: {
        img: string,
        children: React.ReactNode,
        cardClassname?: ClassNameValue,
        cardbackClassname?: ClassNameValue
    }) => {
    return (
        <div className={cn(cardClassname, "bg-transparent h-[300px] flip-card w-full ")} style={{ perspective: "1000px", transform: "ro" }}>
            <div className="relative w-full h-full text-align transition-all   flip-card-inner" style={{ transformStyle: "preserve-3d" }}>
                <img src={img} alt=""
                    className="flip-card-front absolute flex justify-center flex-col w-full h-full border-lg  rounded-xl" />
                <div className={cn(cardbackClassname, "flip-card-back absolute flex justify-center items-center flex-col w-full h-full border-lg rounded-xl bg-white text-black ")}>
                    {children}
                </div>
            </div>
        </div>
    )
}

export default Flipcard;
            `
        },
        {
            title: "Update the import paths to match your project setup."
        },

    ]


}

export { metadata }