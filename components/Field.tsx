import { cn } from "@/lib/cn";

const fieldBase =
  "w-full rounded-xl border border-pine-900/12 bg-surface px-4 py-3 text-ink-900 placeholder:text-ink-300 transition-colors focus:border-blush-500 focus:outline-none focus-visible:outline-none";

export function Label({
  htmlFor,
  children,
  required,
}: {
  htmlFor: string;
  children: React.ReactNode;
  required?: boolean;
}) {
  return (
    <label htmlFor={htmlFor} className="mb-1.5 block text-sm font-semibold text-pine-800">
      {children}
      {required && <span className="text-blush-600"> *</span>}
    </label>
  );
}

export function Input(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return <input {...props} className={cn(fieldBase, props.className)} />;
}

export function Textarea(props: React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return <textarea {...props} className={cn(fieldBase, "min-h-32 resize-y", props.className)} />;
}

export function Select(props: React.SelectHTMLAttributes<HTMLSelectElement>) {
  return <select {...props} className={cn(fieldBase, "appearance-none", props.className)} />;
}
