import { Home as HomeIcon, Search, Heart, Compass, Bell } from "lucide-react";

export default function Sidebar() {
  return (
    <aside className="bg-zinc-900 flex flex-col gap-20 h-screen w-64 p-14">
      <h3 className="text-2xl uppercase text-zinc-50 font-bold">
        dxx.<span className="text-red-600">movies</span>
      </h3>
      <nav className="space-y-7">
        <a href="" className="flex gap-5 hover:text-zinc-50 transition text-lg">
          <Compass />
          Browse
        </a>
        <a href="" className="flex gap-5 hover:text-zinc-50 transition text-lg">
          <Heart />
          Watchlist
        </a>
        <a href="" className="flex gap-5 hover:text-zinc-50 transition text-lg">
          <Bell />
          Remind
        </a>
      </nav>
    </aside>
  );
}
