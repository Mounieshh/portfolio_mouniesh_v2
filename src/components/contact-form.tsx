import { CircleButton } from "./circle-button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ButtonC } from "./button-icon";
import {GiMailbox} from "react-icons/gi"

export const ContactForm = () => {
    return (
        <div className="flex flex-col items-center space-y-3 m-2 md:m-5 lg:m-10 relative top-16 md:top-24 lg:top-32 z-30">
            <div>
                <GiMailbox className="absolute top-28 left-24 w-20 h-18 hidden md:flex -rotate-45"/>
            </div>
            <div className="p-2 md:p-4 lg:p-12 w-[90%] md:w-[80%] lg:w-[65%] max-w-7xl mx-0 md:mx-2 lg:mx-20 border-2 border-black bg-white">
                <div className="flex justify-center mb-2 md:mb-4">
                    <CircleButton label="Contact" />
                </div>
                <div className="flex flex-col items-center">
                    <span className="font-bold text-xl md:text-2xl lg:text-3xl">
                        Got a project in mind? 
                    </span>
                    <br />
                    <span className="font-bold text-lg md:text-xl lg:text-2xl">
                        Let's get in touch.
                    </span>
                </div>
                <div className="flex flex-col gap-2 md:gap-4 mt-4 md:mt-6 w-full">
                    <div className="flex flex-col md:flex-row justify-between gap-2 md:gap-4">
                        <div className="w-full md:w-1/2">
                            <label className="text-gray-500 text-xs md:text-sm">Name</label>
                            <Input type="text" placeholder="Your name *" className="w-full mt-1 border-b-2 border-black bg-transparent" />
                        </div>
                        <div className="w-full md:w-1/2">
                            <label className="text-gray-500 text-xs md:text-sm">Email</label>
                            <Input type="email" placeholder="Email address *" className="w-full mt-1 border-b-2 border-black bg-transparent" />
                        </div>
                    </div>
                    <div>
                        <label className="text-gray-500 text-xs md:text-sm">Message</label>
                        <Textarea placeholder="Tell me about your project *" className="w-full mt-1 border-b-2 border-black bg-transparent h-20 md:h-24 lg:h-32" />
                    </div>
                    <div className="flex justify-center">
                        <ButtonC label="Submit" variant="outline" size="lg" />
                    </div>
                </div>
            </div>
        </div>
    );
}