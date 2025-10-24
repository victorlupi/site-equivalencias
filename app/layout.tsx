import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Tabela de Equivalências Culinárias',
  description: 'Tabela de Conversão de Equivalências Culinárias',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-br">
      <body className="min-h-screen bg-gray-50 text-gray-900 dark:bg-gray-950 dark:text-gray-50">
        <main className="container mx-auto p-4">
          {children}
        </main>
      </body>
    </html>
  );
}
