// eslint-disable-next-line @typescript-eslint/no-explicit-any
function Intro({ intro }: any) {
  return (
    <div className="flex justify-between h-[80vh] w-full text-amber-50">
      <div className="bg-pink-500 d-flex justify-content-center text-green-300 h-full w-full">
        {intro?.name}
      </div>
      <div className="flex flex-col bg-blue-800 h-full w-full px-3 p-4">
        <h1 className="text-4xl text-red-700 bg-white">{intro?.name}</h1>
        <div className="tagline">{intro?.tagline}</div>
        <div className="descri">{intro?.description}</div>
      </div>
    </div>
  );
}

export default Intro;
