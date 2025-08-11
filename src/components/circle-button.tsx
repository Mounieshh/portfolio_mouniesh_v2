import { AsteriskIcon } from "lucide-react"


type ButtonProps = {
    label? : string
}

export const CircleButton = ({label} : ButtonProps) => {
    return (
        <div className="border-2 border-black rounded-full px-3 py-1 w-fit bg-[#E3F2FF] flex items-center gap-1">
                    <span className="text-base font-bold">
                        <AsteriskIcon className="w-4 h-4"/>
                    </span>
                    <span className="text-xs uppercase font-semibold">{label}</span>
        </div>
    )
}