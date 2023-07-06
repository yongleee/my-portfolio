import TheNavbar from "./components/TheNavbar";

function App() {
  return (
    <div className="bg-stone-900 min-h-screen">
      <TheNavbar />
      <div className="mx-auto max-w-5xl px-4 pt-2">
        <section id="about"></section>
        <section id="projects"></section>
        <section id="contact"></section>
      </div>
    </div>
  );
}

export default App;
