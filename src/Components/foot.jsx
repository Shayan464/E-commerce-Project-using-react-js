import React from 'react';

function App() {
  return (
    <div className="app-container min-h-screen">
      <main className="main-content pb-24">
       
      </main>

      <footer className="fixed bottom-0 w-full bg-gray-900 text-white py-4 px-6 shadow-md z-50">
        <div className="flex flex-col sm:flex-row justify-between items-center max-w-6xl mx-auto">
          <p className="text-sm sm:text-base">&copy; {new Date().getFullYear()} E-Shop. All rights reserved.</p>
          <h2 className="text-lg font-semibold tracking-wider">Est. 1990</h2>
        </div>
      </footer>
    </div>
  );
}

export default App;
