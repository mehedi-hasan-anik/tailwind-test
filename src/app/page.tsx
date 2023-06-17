export default function Home() {
  return (
    <main>
      <div className=" h-screen flex items-center justify-center bg-gray-100">
        <div className="max-w-sm mx-auto bg-white p-8 rounded-xl shadow-md space-y-2">
          <img
            className=" h-24 mx-auto rounded-full w-24 ring-4 ring-green-400"
            src="https://images.unsplash.com/photo-1508919801845-fc2ae1bc2a28?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1nfGVufDB8fDB8fHww&w=1000&q=80"
            alt="logo"
          />
          <div className=" text-center space-y-2">
            <div className="space-y-0.5">
              <p className=" text-lg text-black font-semibold">
                Learn with sumit
              </p>
              <p className=" text-gray-500 font-medium">youtube chanel</p>
            </div>
            <button className=" px-4 py-1 border rounded-full border-purple-200 text-sm text-purple-600 font-semibold">
              Visit now
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
