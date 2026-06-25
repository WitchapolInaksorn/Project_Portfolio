export default function Footer() {
  return (
    <footer className="footer py-8 text-center text-xs text-slate-600 border-t border-white/5">
      Built with React + Tailwind · Witchaphon Inaksorn · &copy;{" "}
      {new Date().getFullYear()}
    </footer>
  );
}
