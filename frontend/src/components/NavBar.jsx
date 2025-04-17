import React from 'react';

const NavBar = () => {
  return (
    <nav className="bg-blue-600 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-2xl font-bold">Farmácia</h1>
        <ul className="flex space-x-4">
          <li>
            <a href="/" className="text-white hover:underline">Home</a>
          </li>
          <li>
            <a href="/produtos" className="text-white hover:underline">Produtos</a>
          </li>
          <li>
            <a href="/categorias" className="text-white hover:underline">Categorias</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
