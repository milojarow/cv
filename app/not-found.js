import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-base-200 flex items-center justify-center px-4">
      <div className="max-w-md w-full">
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body text-center">
            <h2 className="text-6xl font-bold text-primary mb-4">404</h2>
            <h3 className="text-2xl font-semibold mb-2">Página no encontrada</h3>
            <p className="text-base-content/70 mb-6">
              Lo sentimos, la página que buscas no existe.
            </p>
            <Link href="/" className="btn btn-primary">
              Volver al CV
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
