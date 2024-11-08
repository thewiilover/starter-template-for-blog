export default function LoadingComponent() {
  return (
    <div className="relative flex flex-col justify-center items-center">
      {/* The classname 'spin-animation' is an animation css from global.css */}
      <div className="spin-animation w-[40px] h-[40px] border-[5px] border-b-primary-500 rounded-full"></div>
      <div className="absolute top-[50%] left-[50%]"></div>
      <div className="text-sm my-3">LOADING</div>
    </div>
  );
}
