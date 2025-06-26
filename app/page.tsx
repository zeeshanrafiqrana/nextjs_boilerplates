import './styles/globals.css';

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#FF1D58] from-white to-gray-100 font-sans p-6">
      <div className="text-center bg-white shadow-md rounded-xl p-10 max-w-lg w-full">
        <h1 className="text-4xl font-bold text-[#fff] mb-4">Welcome Home</h1>
        <p className="text-[#fff] text-lg mb-6">
          This is your starting point. Tailwind and ShadCN are working!
        </p>
      </div>
    </div>
  );
}
