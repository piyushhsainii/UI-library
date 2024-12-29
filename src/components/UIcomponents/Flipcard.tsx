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