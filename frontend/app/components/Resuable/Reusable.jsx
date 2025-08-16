// eslint-disable-next-line react/prop-types
const Page = ({title}) => {
  return (
    <div className="p-0 sm:p-2">
      <h1 className="text-white font-semibold text-3xl p-1  relative ">
        {title}
        <span className="absolute bottom-0 left-2 rounded-2xl bg-red-400 h-1  w-8"></span>
      </h1>
    </div>
  );
};

export { Page };
