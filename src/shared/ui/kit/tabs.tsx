import clsx from "clsx";



export function Tabs({
  text,
  isFirst,
  ...props
}: {
  text: string;
  isFirst?: boolean;
} & React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      {...props}
      className={clsx(
        "relative cursor-pointer h-full w-full flex items-center justify-center mx-auto",
        props.className
      )}
    >
      {!isFirst && (
        <span
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-300"
          style={{ width: "1px", height: "40%" }}
        />
      )}
      <p>{text}</p>
    </div>
  );
}