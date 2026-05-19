import { useState } from 'react';

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button onClick={() => setOpen(!open)} className='md:hidden'>
        ☰
      </button>

      {open && (
        <div className='fixed inset-0 bg-black z-50 p-8'>
          <div className='flex justify-between items-center'>
            <h2 className='text-2xl font-bold'>Mundial Store</h2>

            <button onClick={() => setOpen(false)}>✕</button>
          </div>

          <nav className='flex flex-col gap-6 mt-10 text-2xl'>
            <a href='/'>Inicio</a>
            <a href='/catalogo'>Catálogo</a>
            <a href='/ofertas'>Ofertas</a>
            <a href='/faq'>FAQ</a>
          </nav>
        </div>
      )}
    </>
  );
}
