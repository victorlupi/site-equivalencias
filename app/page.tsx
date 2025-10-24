export default function Page() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold mb-4">Tabela de Conversão de Equivalências Culinárias</h1>

      <section>
        <h2 className="text-2xl font-semibold mb-2">Medidas Básicas</h2>
        <ul className="list-disc ml-5 space-y-1">
          <li>1 colher de sopa = 5 g</li>
          <li>1 colher de chá = 1,5 g</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">Ingredientes Secos e Grãos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h3 className="text-xl font-medium">Amêndôas, Nozes, Castanhas</h3>
            <ul className="list-disc ml-5 space-y-1">
              <li>1 xícara = 140 g</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-medium">Aveia</h3>
            <ul className="list-disc ml-5 space-y-1">
              <li>1 xícara = 80 g</li>
              <li>1 colher de sopa = 5 g</li>
              <li>1 colher de chá = 1,5 g</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-medium">Chocolate em pó / Cacau</h3>
            <ul className="list-disc ml-5 space-y-1">
              <li>1 xícara = 80 g</li>
              <li>1 colher de sopa = 6 g</li>
              <li>1 colher de chá = 2 g</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-medium">Farinha de trigo</h3>
            <ul className="list-disc ml-5 space-y-1">
              <li>1 xícara = 120 g</li>
              <li>1 colher de sopa = 7,5 g</li>
              <li>1 colher de chá = 2,5 g</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-medium">Manteiga / Gordura</h3>
            <ul className="list-disc ml-5 space-y-1">
              <li>1 xícara = 200 g</li>
              <li>1 colher de sopa = 14 g</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-medium">Açúcar Refinado</h3>
            <ul className="list-disc ml-5 space-y-1">
              <li>1 xícara = 180 g</li>
              <li>1 colher de sopa = 12 g</li>
              <li>1 colher de chá = 4 g</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-medium">Coco Ralado</h3>
            <ul className="list-disc ml-5 space-y-1">
              <li>1 xícara = 80 g</li>
              <li>1 colher de sopa = 5 g</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-medium">Fubá</h3>
            <ul className="list-disc ml-5 space-y-1">
              <li>1 xícara = 110 g</li>
              <li>1 colher de sopa = 7 g</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-medium">Amido de Milho</h3>
            <ul className="list-disc ml-5 space-y-1">
              <li>1 xícara = 115 g</li>
              <li>1 colher de sopa = 7,5 g</li>
              <li>1 colher de chá = 2,5 g</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-medium">Polvilho Doce</h3>
            <ul className="list-disc ml-5 space-y-1">
              <li>1 xícara = 120 g</li>
              <li>1 colher de sopa = 7 g</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-medium">Queijo Parmesão Ralado</h3>
            <ul className="list-disc ml-5 space-y-1">
              <li>1 xícara = 90 g</li>
              <li>1 colher de sopa = 6 g</li>
            </ul>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">Ingredientes Líquidos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h3 className="text-xl font-medium">Água</h3>
            <ul className="list-disc ml-5 space-y-1">
              <li>1 litro = 5 copos americanos (200 ml) ou 4 copos tipo requeijão (250 ml)</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-medium">Leite</h3>
            <ul className="list-disc ml-5 space-y-1">
              <li>1 litro = 5 copos americanos (200 ml) ou 4 copos tipo requeijão (250 ml)</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-medium">Azeite ou Óleo</h3>
            <ul className="list-disc ml-5 space-y-1">
              <li>1 xícara de chá = 180 ml</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-medium">Banha</h3>
            <ul className="list-disc ml-5 space-y-1">
              <li>1 xícara de chá = 200 g</li>
              <li>1 colher de sopa = 40 g</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-medium">Mel</h3>
            <ul className="list-disc ml-5 space-y-1">
              <li>1 xícara = 300 g</li>
              <li>1 colher de sopa = 20 g</li>
              <li>1 colher de chá = 7 g</li>
            </ul>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">Ovos</h2>
        <ul className="list-disc ml-5 space-y-1">
          <li>1 ovo grande ≈ 50 g</li>
          <li>1 clara ≈ 30 g</li>
          <li>1 gema ≈ 20 g</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">Importante</h2>
        <p className="mt-2">
          Todas as medidas são usadas rasas; após encher a xícara ou colher, passe uma faca reta para nivelar o excesso. 
          Existem diferentes tamanhos de copos e xícaras, então utilize medidas padrão para garantir precisão.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">Temperaturas do Forno</h2>
        <ul className="list-disc ml-5 space-y-1">
          <li>Forno brando: 140 °C a 150 °C (270 °F a 300 °F)</li>
          <li>Forno regular: 175 °C a 190 °C (320 °F a 350 °F)</li>
          <li>Forno quente: 200 °C a 230 °C (400 °F a 450 °F)</li>
          <li>Forno muito quente: 240 °C a 275 °C (460 °F)</li>
        </ul>
      </section>
    </div>
  );
}
