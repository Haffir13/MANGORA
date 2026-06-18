type SectionTitleProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  center?: boolean;
};

export function SectionTitle({ eyebrow, title, subtitle, center = false }: SectionTitleProps) {
  return (
    <div className={center ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {eyebrow ? (
        <p className="mb-3 inline-flex rounded-full bg-mangora-mango/15 px-4 py-1 text-xs font-bold uppercase tracking-[0.2em] text-mangora-green">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-3xl font-black tracking-tight text-mangora-green md:text-5xl">{title}</h2>
      {subtitle ? <p className="mt-4 text-base leading-8 text-mangora-ink/75 md:text-lg">{subtitle}</p> : null}
    </div>
  );
}
