type TimeItems = {
    time?: string;
    title?: string;
    description?: string;
}

type TimeLineProps = {
    items?: TimeItems[];
}

export const Timeline = ({ items }: TimeLineProps) => {
    return (
        <div className="relative">
            {items?.map((item, idx) => (
                <div key={idx} className="flex flex-row gap-4">
                    <div className="w-32 text-right">
                        <span className="text-xs font-semibold text-gray-700 uppercase tracking-wide">
                            {item.time ?? ''}
                        </span>
                    </div>
                    <div className="flex flex-col items-center mt-2">
                        <div className="w-3 h-3 bg-white border-2 border-gray-800 rounded-full z-10 mb-1"></div>
                        <div className="border-l-2 border-gray-800 h-20 w-0"></div>
                    </div>
                    <div className="flex-1">
                        <h1 className="font-bold text-xl mb-2">
                            {item.title ?? ''}
                        </h1>
                        <p className="text-sm text-gray-600 leading-relaxed pb-8">
                            {item.description ?? ''}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    );
}