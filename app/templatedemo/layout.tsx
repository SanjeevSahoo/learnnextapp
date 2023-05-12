import Link from "next/link";

export default function Layout({ children }: { children: React.ReactNode }) {
  const currTime = new Date().toLocaleTimeString();
  return (
    <div className="border-[1px] border-green-400">
      <div>Layout Section</div>

      <div>{currTime}</div>
      <div>
        <Link href="/templatedemo/books">Books</Link>
      </div>
      <div>
        <Link href="/templatedemo/electronics">Electronics</Link>
      </div>
      <div className="p-2">{children}</div>
    </div>
  );
}
