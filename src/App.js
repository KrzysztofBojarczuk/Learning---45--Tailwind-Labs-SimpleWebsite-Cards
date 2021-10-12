import './App.css';
import logo from "./logo.svg";
import beachwork from "./beach-work.jpg"

function App() {
  return (

    <div>
      <div className="bg-red-100">
        
        <div className="px-8 py-12 max-w-md mx-auto">
        <img className="h-10" src={logo} alt="Workcation" />
        <img className="mt-6 rounded-lg shadow-xl" src={beachwork} alt="Woman workcationing on the beach" />
        <h1 className="mt-6 text-2x1 font-bold text-gray-900">You can work from anywhere. <span className="text-indigo-500"> Take advantage of it. </span></h1>
       <p className="mt-6 text-gray-600">Workcation helps you find work-friendly rentals in beautiful locations so you can enjoy some
        nice weather even when you're not on vacation.</p>
        <div className="mt-4">
          <a className="inline-block rounded-lg px-5 py-3 shadow-lg bg-indigo-500 text-white uppercase tracking-wider font-semibold text-sm" href="">Book your escape</a>
        </div>
        </div>
      </div>
      
    
  </div>
  );
}

export default App;
