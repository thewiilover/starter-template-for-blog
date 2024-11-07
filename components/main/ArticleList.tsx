import { dummydata } from "@/app/dummydata";

export default function ArticleList() {
  return (
    <div>
      {dummydata.map((data: any, index: number) => (
        <div
          key={index}
          className="flex flex-col justify-between px-6 py-8 h-[240px] border-b"
        >
          <div>
            <div className="text-blue-500 text-sm mb-3">{data.category}</div>
            <div className="text-3xl mb-2">{data.title}</div>
            <div>{data.preview}</div>
          </div>
          <div className="text-sm text-zinc-400">{data.date}</div>
        </div>
      ))}
    </div>
  );
}
