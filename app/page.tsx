import { dummydata } from "./dummydata";

export default function Home() {
  return (
    <div className="w-full flex justify-center">
      <div className="w-[1200px]">
        <div className="w-[70%]">
          {dummydata.map((data: any, index: number) => (
            <div key={index} className="px-5 py-9 border-b">
              <div className="text-blue-500 text-sm">{data.category}</div>
              <div className="text-3xl">{data.title}</div>
              <div>{data.preview}</div>
              <div>{data.date}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
