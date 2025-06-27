import clsx from 'clsx';
import { LucideCheckCircle2, XCircleIcon } from 'lucide-react';

export function StockStatus({className, Available}: {className?: string; Available: boolean}) {
  return (
    <div className={clsx(className, `${Available ? "bg-[#EDF8EA] w-30" : "bg-[#f8eaea] w-37"} p-1 rounded`)}>
        {Available ? <p className='text-[#43B02A] flex gap-2'><LucideCheckCircle2 /> В наличии</p> : <p className='text-red-500 flex gap-2'><XCircleIcon /> Нет в наличии</p>}
    </div>
  )
}
