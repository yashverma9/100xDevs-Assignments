type blogProps = {
    date: string;
    title: string;
    content: string;
};

export default function BlogContent({ title, content, date }: blogProps) {
    return (
        <div>
            <div className="text-6xl font-bold">{title}</div>
            <div className="text-gray-500 font-medium text-xl pt-3">{date}</div>
            <div className="pt-4 text-xl font-medium text-gray-700 leading-relaxed">
                {content}
            </div>
        </div>
    );
}
