
export default function Layout({
    children,
}: {
        children: React.ReactNode;
    }) {
    return (
        <div className="grid grid-rows-[auto_1fr] items-center justify-center">
            <div>Graphs</div>
            <div className="p-2">{children}</div>
        </div>
    );
}
