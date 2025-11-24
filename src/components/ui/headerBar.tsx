type IHeaderBarProps = {
    page: string | { title: string };
};

export default function HeaderBar({ page }: IHeaderBarProps) {
    const pageName = typeof page === 'string' ? page : page.title;
    return (
        <div className="flex items-center gap-2 px-3 py-2 border-b border-black bg-gray-100">
            <span className="w-3 h-3 bg-red-500 rounded-full border border-black"></span>
            <span className="w-3 h-3 bg-yellow-500 rounded-full border border-black"></span>
            <span className="w-3 h-3 bg-green-500 rounded-full border border-black"></span>
            <span className="ml-3 text-xs">{pageName}.com</span>
        </div>
    );
}
