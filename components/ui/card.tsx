export function Card({ children, className = "" }: any) {
  return <div className={`rounded-2xl border p-2 ${className}`}>{children}</div>;
}

export function CardContent({ children, className = "" }: any) {
  return <div className={className}>{children}</div>;
}
