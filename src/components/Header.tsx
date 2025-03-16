'use client'

import { useState } from 'react'
import Logo from '@/components/Logo'
import { MoonIcon, SunIcon } from '@heroicons/react/24/outline'

interface HeaderProps {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
  e.preventDefault();
  const element = document.getElementById(sectionId);
  if (element) {
    const headerOffset = 80;
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth"
    });
  }
};

export default function Header({ isDarkMode, toggleDarkMode }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-background py-4 fixed w-full top-0 z-50 shadow-custom-light dark:shadow-custom-dark text-text1">
      <div className="container flex items-center justify-between">
        <a href="/" className="flex items-center gap-2">
          <Logo />
          <span className="text-2xl font-light">TaPago</span>
        </a>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#inicio" onClick={(e) => scrollToSection(e, 'inicio')} className="hover:text-primary transition-colors">Início</a>
          <a href="#funcionalidades" onClick={(e) => scrollToSection(e, 'funcionalidades')} className="hover:text-primary transition-colors">Funcionalidades</a>
          <a href="#depoimentos" onClick={(e) => scrollToSection(e, 'depoimentos')} className="hover:text-primary transition-colors">Depoimentos</a>
          <a href="#design" onClick={(e) => scrollToSection(e, 'design')} className="hover:text-primary transition-colors">Design</a>
          <a href="#solucao-moderna" onClick={(e) => scrollToSection(e, 'solucao-moderna')} className="btn-primary">Começar Agora</a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2 rounded-lg hover:bg-background2"
        >
          <svg
            className="w-6 h-6 text-text1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-background2 dark:bg-background2 shadow-lg md:hidden">
            <nav className="container py-4">
              <div className="flex flex-col space-y-4">
                <a
                  href="#inicio"
                  className="text-text1 hover:text-primary transition-colors"
                  onClick={(e) => {
                    scrollToSection(e, 'inicio');
                    setIsMenuOpen(false);
                  }}
                >
                  Início
                </a>
                <a
                  href="#funcionalidades"
                  className="text-text1 hover:text-primary transition-colors"
                  onClick={(e) => {
                    scrollToSection(e, 'funcionalidades');
                    setIsMenuOpen(false);
                  }}
                >
                  Funcionalidades
                </a>
                <a
                  href="#depoimentos"
                  className="text-text1 hover:text-primary transition-colors"
                  onClick={(e) => {
                    scrollToSection(e, 'depoimentos');
                    setIsMenuOpen(false);
                  }}
                >
                  Depoimentos
                </a>
                <a
                  href="#design"
                  className="text-text1 hover:text-primary transition-colors"
                  onClick={(e) => {
                    scrollToSection(e, 'design');
                    setIsMenuOpen(false);
                  }}
                >
                  Design
                </a>
                <a
                  href="#solucao-moderna"
                  className="btn-primary w-full text-center"
                  onClick={(e) => {
                    scrollToSection(e, 'solucao-moderna');
                    setIsMenuOpen(false);
                  }}
                >
                  Começar Agora
                </a>
              </div>
            </nav>
          </div>
        )}

        <button
          onClick={toggleDarkMode}
          className="p-2 rounded-lg hover:bg-background1"
        >
          {isDarkMode ? (
            <SunIcon className="w-6 h-6 text-text2" />
          ) : (
            <MoonIcon className="w-6 h-6 text-text2" />
          )}
        </button>
      </div>
    </header>
  )
} 