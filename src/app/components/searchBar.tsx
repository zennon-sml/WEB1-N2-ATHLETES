import React from 'react'

export default function SearchBar() {
  return (
    <nav className="w-4/5 rounded-md flex items-center justify-center gap-2 p-2 mt-5 bg-slate-800">
      <input
        type="text"
        placeholder="Digite o nome do jogador"
        className="rounded-md w-6/12 p-2"
      />
      <button className="rounded-md w-1/12 p-2 bg-amber-500">BUSCAR</button>
    </nav>
  )
}
