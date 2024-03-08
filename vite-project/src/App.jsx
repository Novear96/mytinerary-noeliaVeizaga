function App() {

  return (
    <div className="w-full min-h-screen flex flex-col bg-zinc-800 text-white">
      <div className="px-3 flex justify-between items-center">
        <img src="/vite.svg" alt="logo" className="w-14 h-10" />
        <p>MyTinerary</p>
        <nav>
          <a href="#">Home</a>
          <a href="">Cities</a>
          <a href="">Contac</a>
        </nav>
      </div>
      <header>
        <img src="/vite.svg" alt="" />
      </header>
      <main className="grow">Main</main>
      <footer></footer>
    </div>
  );
}

export default App;
