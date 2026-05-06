export function MagneticWrapper({
  children,
  className,
}: {
  children: React.ReactNode;
  damp?: number;
  className?: string;
}) {
  return <div className={className}>{children}</div>;
}
