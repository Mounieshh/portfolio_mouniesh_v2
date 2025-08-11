import Image from "next/image";
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Link from "next/link";
import { ArrowRightCircleIcon } from "lucide-react";

type ProjectItemProps = {
    image?: StaticImport | string;
    header?: string;
    description?: string;
    link?: string;
    label?: string;
};

type ProjectProps = {
    items?: ProjectItemProps[];
};

export const ProjectCard = ({ items = [] }: ProjectProps) => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 p-4">
            {items.map((item, idx) => {
                return (
                    <Card key={idx} className="w-full border-none shadow-none">
                        <CardHeader>
                            <div className="relative w-full h-48 sm:h-56 md:h-[50vh] overflow-hidden border-2 border-black rounded-lg mb-5">
                                <Image
                                    src={item.image ?? "/assets/mouniesh-ghibli.jpg"}
                                    alt="project-image"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <CardTitle className="text-lg sm:text-xl">
                                {item.header}
                            </CardTitle>
                            <CardDescription className="text-sm sm:text-base">
                                {item.description}
                            </CardDescription>
                        </CardHeader>
                        <CardFooter>
                            <Link href={item.link} target="_blank" className="text-black hover:no-underline text-sm sm:text-base flex items-center gap-2">
                                <span>
                                    {item.label} 
                                </span>
                                <span>
                                    <ArrowRightCircleIcon className="w-4 h-4 font-semibold"/>
                                </span>
                            </Link>
                        </CardFooter>
                    </Card>
                );
            })}
        </div>
    );
}