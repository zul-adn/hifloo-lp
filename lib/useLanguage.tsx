'use client';
import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { translations, Lang } from './translations';

type LanguageContextType = {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (key: string) => string;
};

const LanguageContext = createContext<LanguageContextType>({
  lang: 'id',
  setLang: () => {},
  t: (key: string) => key,
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>('id');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem('hifloo_lang') as Lang;
    if (saved && ['id', 'en', 'ru'].includes(saved)) setLangState(saved);
  }, []);

  const setLang = (l: Lang) => {
    setLangState(l);
    localStorage.setItem('hifloo_lang', l);
  };

  const t = (key: string): string => {
    return translations[lang]?.[key] || translations['id']?.[key] || key;
  };

  if (!mounted) {
    // Return a placeholder t function during SSR
    return (
      <LanguageContext.Provider value={{ lang: 'id', setLang: () => {}, t: (key: string) => translations['id']?.[key] || key }}>
        {children}
      </LanguageContext.Provider>
    );
  }

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
