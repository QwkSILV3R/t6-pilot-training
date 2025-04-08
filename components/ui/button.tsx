export function Button({ children, variant = "primary", className = "" }: any) {
  const base =
    variant === "secondary"
      ? "bg-sky-700 hover:bg-sky-600 text-white"
      : "bg-white text-sky-900";
  return (
    <button className={`rounded-xl px-4 py-2 font-semibold ${base} ${className}`}>
      {children}
    </button>
  );
}
