import Link from 'next/link';
import { APP_NAME } from '~/lib/constants';
import MenuActions from '~/app/menu/MenuActions';

export default function MenuPage() {
  return (
    <div className="app-shell">
      <header className="mb-8">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h1 className="text-3xl font-semibold text-slate-900 sm:text-4xl">
              {APP_NAME}
            </h1>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <div className="rounded-full border border-amber-200 bg-amber-50 px-3 py-1 text-xs font-semibold text-amber-800">
              Base Mainnet Badge
            </div>
            <Link
              href="/"
              className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold text-slate-700 transition hover:border-slate-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900"
            >
              Back
            </Link>
          </div>
        </div>
      </header>

      <section className="glass rounded-2xl p-6">
        <h2 className="text-lg font-semibold text-slate-900">Menu</h2>
        <MenuActions />
      </section>
    </div>
  );
}
