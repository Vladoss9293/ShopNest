import clsx from 'clsx';
import { MessageCircleMore } from 'lucide-react';

type ReviewCountProps = {
    numberOfReviews: number;
    className?: string;
}

export default function ReviewCount({numberOfReviews, className}: ReviewCountProps) {
  return (
    <div className={clsx("flex items-center opacity-50 gap-1", className)}>
        <MessageCircleMore /> {numberOfReviews}
    </div>
  )
}
