import { useLanguage } from "../../context/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="max-w-6xl mx-auto w-full text-center text-xs text-slate-500 font-mono py-8 border-t border-zinc-900">
      {t.footer.text}
    </footer>
  );
}