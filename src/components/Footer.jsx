export function Footer() {
  return (
    <div className="bg-secondary text-black text-left pb-16">
      <div className="w-10/12 mx-auto pt-12 flex flex-col sm:flex-row space-y-2 justify-start">
        <div className="w-full sm:w-3/5 pr-6 flex flex-col space-y-2 pb-6">
          <h1 className="text-4xl">Greet</h1>
          <p>Made in Sweden 🇸🇪</p>
        </div>
        <div className="w-full sm:w-1/5 flex flex-col space-y-2 pb-6">
          <h1 className="text-xl">Product</h1>
          <a className="opacity-60">Job board</a>
          <a className="opacity-60">Pricing</a>
          <a className="opacity-60">FAQ</a>
        </div>
        <div className="w-full sm:w-1/5 flex flex-col space-y-2">
          <h1 className="text-xl">About</h1>
          <a className="opacity-60">About us</a>
          <a className="opacity-60">Contact</a>
        </div>
      </div>
    </div>
  );
}
