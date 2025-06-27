import clsx from "clsx";
import { Crown } from "lucide-react";

export function Badge({className}: {className: string}) {
  return (
    <div className={clsx('flex gap-1 bg-orange-400 p-1 rounded text-white font-bold items-center', className)}><Crown className="text-yellow-300" /> Кращ</div>
  )
}
