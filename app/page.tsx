'use client';

import { useState } from 'react';

export default function Page() {
  const ingredients: Record<string, {cup: number; tablespoon: number; teaspoon: number}> = {
    'Amêndôas, Nozes, Castanhas': { cup: 140, tablespoon: 0, teaspoon: 0 },
    'Aveia': { cup: 80, tablespoon: 5, teaspoon: 1.5 },
    'Chocolate em pó / Cacau': { cup: 80, tablespoon: 6, teaspoon: 2 },
    'Farinha de trigo': { cup: 120, tablespoon: 7.5, teaspoon: 2.5 },
    'Manteiga / Gordura': { cup: 200, tablespoon: 14, teaspoon: 0 },
    'Açúcar Refinado': { cup: 180, tablespoon: 12, teaspoon: 4 },
    'Coco Ralado': { cup: 80, tablespoon: 5, teaspoon: 0 },
    'Fubá': { cup: 110, tablespoon: 7, teaspoon: 0 },
    'Amido de Milho': { cup: 115, tablespoon: 7.5, teaspoon: 2.5 },
    'Polvilho Doce': { cup: 120, tablespoon: 7, teaspoon: 0 },
    'Queijo Parmesão Ralado': { cup: 90, tablespoon: 6, teaspoon: 0 },
    'Banha': { cup: 200, tablespoon: 40, teaspoon: 0 },
    'Mel': { cup: 300, tablespoon: 20, teaspoon: 7 },
  };

  const [ingredient, setIngredient] = useState('Aveia');
  const [unit, setUnit] = useState('cup');
  const [quantity, setQuantity] = useState(1);

  const handleIngredientChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setIngredient(e.target.value);
  };

  const handleUnitChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setUnit(e.target.value);
  };

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(e.target.value);
    setQuantity(isNaN(value) ? 0 : value);
  };

  const getResult = () => {
    const data = ingredients[ingredient];
    if (!data) return 0;
    const valuePerUnit = (data as any)[unit] || 0;
    return valuePerUnit * quantity;
  };

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold mb-4">Tabela de Conversão de Equivalências Culinárias</h1>

      <section>
        <h2 className="text-2xl font-semibold mb-2">Conversor Dinâmico</h2>
        <div className="flex flex-col md:flex-row items-start md:items-end space-y-4 md:space-y-0 md:space-x-4">
          <div>
            <label className="block mb-1">Ingrediente</label>
            <select className="border rounded px-2 py-1" value={ingredient} onChange={handleIngredientChange}>
              {Object.keys(ingredients).map((name) => (
                <option key={name} value={name}>{name}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="block mb-1">Unidade</label>
            <select className="border rounded px-2 py-1" value={unit} onChange={handleUnitChange}>
              <option value="cup">Xícara</option>
              <option value="tablespoon">Colher de sopa</option>
              <option value="teaspoon">Colher de chá</option>
            </select>
          </div>
          <div>
            <label className="block mb-1">Quantidade</label>
            <input type="number" min="0" step="0.1" value={quantity} onChange={handleQuantityChange} className="border rounded px-2 py-1 w-24" />
          </div>
        </div>
        <p className="mt-4 text-lg font-medium">
          {quantity} {unit === 'cup' ? 'xícara(s)' : unit === 'tablespoon' ? 'colher(es) de sopa' : 'colher(es) de chá'} de {ingredient} ≈ {getResult()} g
        </p>
      </section>
    </div>
  );
}
