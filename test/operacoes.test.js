const {
  soma, subtracao, multiplicacao, divisao, potencia, raizQuadrada, restoDivisao,
  fatorial, mediaArray, somaArray, maximoArray, minimoArray, valorAbsoluto,
  arredondar, isPar, isImpar, calcularPorcentagem, aumentarPorcentagem,
  diminuirPorcentagem, inverterSinal, seno, cosseno, tangente, logaritmoNatural,
  logaritmoBase10, arredondarParaBaixo, arredondarParaCima, hipotenusa,
  grausParaRadianos, radianosParaGraus, mdc, mmc, isPrimo, fibonacci,
  produtoArray, clamp, isDivisivel, celsiusParaFahrenheit, fahrenheitParaCelsius,
  inverso, areaCirculo, areaRetangulo, perimetroRetangulo, isMaiorQue,
  isMenorQue, isEqual, medianaArray, dobro, triplo, metade
} = require('../src/operacoes');

describe('Suíte de Testes Fraca para 50 Operações Aritméticas', () => {
  // === Testes para o Bloco 1 (1-10) ===
  test('1. deve somar dois números positivos', () => { expect(soma(2, 3)).toBe(5); });
  test('2. deve subtrair dois números positivos', () => { expect(subtracao(5, 2)).toBe(3); });
  test('3. deve multiplicar dois números positivos', () => { expect(multiplicacao(3, 4)).toBe(12); });
  test('4. deve dividir e lançar erro para divisão por zero', () => {
    expect(divisao(10, 2)).toBe(5);
    expect(() => divisao(5, 0)).toThrow();
  });
  test('5. deve calcular a potência com expoente positivo', () => { expect(potencia(2, 3)).toBe(8); });
  test('6. deve calcular a raiz quadrada de um quadrado perfeito', () => { expect(raizQuadrada(16)).toBe(4); });
  test('7. deve retornar o resto da divisão', () => { expect(restoDivisao(10, 3)).toBe(1); });
  test('8. deve calcular o fatorial de um número maior que 1', () => { expect(fatorial(4)).toBe(24); });
  test('9. deve calcular a média de um array com múltiplos elementos', () => { expect(mediaArray([10, 20, 30])).toBe(20); });
  test('10. deve somar um array com múltiplos elementos', () => { expect(somaArray([1, 2, 3])).toBe(6); });

  // === Testes para o Bloco 2 (11-20) ===
  test('11. deve encontrar o valor máximo em um array', () => { expect(maximoArray([1, 50, 10])).toBe(50); });
  test('12. deve encontrar o valor mínimo em um array', () => { expect(minimoArray([10, 2, 100])).toBe(2); });
  test('13. deve retornar o valor absoluto de um número negativo', () => { expect(valorAbsoluto(-5)).toBe(5); });
  test('14. deve arredondar um número para cima', () => { expect(arredondar(9.8)).toBe(10); });
  test('15. deve retornar true para um número par', () => { expect(isPar(100)).toBe(true); });
  test('16. deve retornar true para um número ímpar', () => { expect(isImpar(7)).toBe(true); });
  test('17. deve calcular uma porcentagem simples', () => { expect(calcularPorcentagem(50, 200)).toBe(100); });
  test('18. deve aumentar um valor em uma porcentagem', () => { expect(aumentarPorcentagem(100, 10)).toBeCloseTo(110); });
  test('19. deve diminuir um valor em uma porcentagem', () => { expect(diminuirPorcentagem(100, 10)).toBeCloseTo(90); });
  test('20. deve inverter o sinal de um número positivo', () => { expect(inverterSinal(42)).toBe(-42); });
  
  // === Testes para o Bloco 3 (21-30) ===
  test('21. deve calcular o seno de 0', () => { expect(seno(0)).toBe(0); });
  test('22. deve calcular o cosseno de 0', () => { expect(cosseno(0)).toBe(1); });
  test('23. deve calcular a tangente de 0', () => { expect(tangente(0)).toBe(0); });
  test('24. deve calcular o logaritmo natural de Euler', () => { expect(logaritmoNatural(Math.E)).toBe(1); });
  test('25. deve calcular o logaritmo na base 10', () => { expect(logaritmoBase10(100)).toBe(2); });
  test('26. deve arredondar para baixo', () => { expect(arredondarParaBaixo(5.9)).toBe(5); });
  test('27. deve arredondar para cima', () => { expect(arredondarParaCima(5.1)).toBe(6); });
  test('28. deve calcular a hipotenusa de um triângulo retângulo', () => { expect(hipotenusa(3, 4)).toBe(5); });
  test('29. deve converter graus para radianos', () => { expect(grausParaRadianos(180)).toBeCloseTo(Math.PI); });
  test('30. deve converter radianos para graus', () => { expect(radianosParaGraus(Math.PI)).toBeCloseTo(180); });

  // === Testes para o Bloco 4 (31-40) ===
  test('31. deve calcular o MDC de dois números', () => { expect(mdc(10, 5)).toBe(5); });
  test('32. deve calcular o MMC de dois números', () => { expect(mmc(10, 5)).toBe(10); });
  test('33. deve verificar que um número é primo', () => { expect(isPrimo(7)).toBe(true); });
  test('34. deve calcular o 10º termo de Fibonacci', () => { expect(fibonacci(10)).toBe(55); });
  test('35. deve calcular o produto de um array', () => { expect(produtoArray([2, 3, 4])).toBe(24); });
  test('36. deve manter um valor dentro de um intervalo (clamp)', () => { expect(clamp(5, 0, 10)).toBe(5); });
  test('37. deve verificar se um número é divisível por outro', () => { expect(isDivisivel(10, 2)).toBe(true); });
  test('38. deve converter Celsius para Fahrenheit', () => { expect(celsiusParaFahrenheit(0)).toBe(32); });
  test('39. deve converter Fahrenheit para Celsius', () => { expect(fahrenheitParaCelsius(32)).toBe(0); });
  test('40. deve calcular o inverso de um número', () => { expect(inverso(4)).toBe(0.25); });

  // === Testes para o Bloco 5 (41-50) ===
  test('41. deve calcular a área de um círculo', () => { expect(areaCirculo(10)).toBeCloseTo(314.159); });
  test('42. deve calcular a área de um retângulo', () => { expect(areaRetangulo(5, 4)).toBe(20); });
  test('43. deve calcular o perímetro de um retângulo', () => { expect(perimetroRetangulo(5, 4)).toBe(18); });
  test('44. deve verificar se um número é maior que outro', () => { expect(isMaiorQue(10, 5)).toBe(true); });
  test('45. deve verificar se um número é menor que outro', () => { expect(isMenorQue(5, 10)).toBe(true); });
  test('46. deve verificar se dois números são iguais', () => { expect(isEqual(7, 7)).toBe(true); });
  test('47. deve calcular a mediana de um array ímpar e ordenado', () => { expect(medianaArray([1, 2, 3, 4, 5])).toBe(3); });
  test('48. deve calcular o dobro de um número', () => { expect(dobro(10)).toBe(20); });
  test('49. deve calcular o triplo de um número', () => { expect(triplo(10)).toBe(30); });
  test('50. deve calcular a metade de um número', () => { expect(metade(20)).toBe(10); });
});

describe('raizQuadrada', () => {
  test('deve aceitar zero e rejeitar negativos com a mensagem exata', () => {
    // mata mutante: n < 0 -> n <= 0 e remoção da condição
    expect(raizQuadrada(0)).toBe(0);
    expect(() => raizQuadrada(-1)).toThrow(
      new Error('Não é possível calcular a raiz quadrada de um número negativo.')
    );
  });
});

describe('divisao', () => {
  test('deve informar exatamente a causa da divisão por zero', () => {
    // mata mutante: StringLiteral da mensagem de erro
    expect(() => divisao(5, 0)).toThrow(new Error('Divisão por zero não é permitida.'));
  });
});

describe('fatorial', () => {
  test('deve cobrir as fronteiras zero, um e o erro para negativo', () => {
    // mata mutantes: n < 0, n === 0 || n === 1 e operadores lógicos
    expect(fatorial(0)).toBe(1);
    expect(fatorial(1)).toBe(1);
    expect(() => fatorial(-1)).toThrow(
      new Error('Fatorial não é definido para números negativos.')
    );
  });
});

describe('mediaArray', () => {
  test('deve retornar zero para um array vazio', () => {
    // mata mutante: remoção do retorno para array vazio
    expect(mediaArray([])).toBe(0);
  });
});

describe('maximoArray', () => {
  test('deve rejeitar um array vazio com a mensagem exata', () => {
    // mata mutante: remoção da condição de array vazio
    expect(() => maximoArray([])).toThrow(new Error('Array vazio не possui valor máximo.'));
  });
});

describe('minimoArray', () => {
  test('deve rejeitar um array vazio com a mensagem exata', () => {
    // mata mutante: remoção da condição de array vazio
    expect(() => minimoArray([])).toThrow(new Error('Array vazio не possui valor mínimo.'));
  });
});

describe('isPar', () => {
  test('deve identificar como falso um número ímpar', () => {
    // mata mutante: substituição da expressão por true
    expect(isPar(3)).toBe(false);
  });
});

describe('isImpar', () => {
  test('deve identificar como falso um número par', () => {
    // mata mutantes: substituição por true e troca de % por *
    expect(isImpar(2)).toBe(false);
  });
});

describe('isPrimo', () => {
  test('deve tratar um e um composto como não primos', () => {
    // mata mutantes: limite <= 1, remoção do laço e da verificação de divisor
    expect(isPrimo(1)).toBe(false);
    expect(isPrimo(4)).toBe(false);
  });
});

describe('produtoArray', () => {
  test('deve retornar o elemento neutro para array vazio', () => {
    // mata mutante: remoção do retorno para array vazio
    expect(produtoArray([])).toBe(1);
  });
});

describe('clamp', () => {
  test('deve limitar valores abaixo e acima do intervalo', () => {
    // mata mutantes: remoção das condições de limite
    expect(clamp(-1, 0, 10)).toBe(0);
    expect(clamp(11, 0, 10)).toBe(10);
  });

  test('deve preservar valores nos limites do intervalo', () => {
    // As trocas < por <= e > por >= são equivalentes para os valores retornados.
    expect(clamp(0, 0, 10)).toBe(0);
    expect(clamp(10, 0, 10)).toBe(10);
  });
});

describe('isDivisivel', () => {
  test('deve retornar falso quando há resto', () => {
    // mata mutante: substituição da condição por true
    expect(isDivisivel(10, 3)).toBe(false);
  });
});

describe('celsiusParaFahrenheit', () => {
  test('deve converter uma temperatura diferente de zero', () => {
    // mata mutantes: trocas aritméticas na conversão
    expect(celsiusParaFahrenheit(10)).toBe(50);
  });
});

describe('fahrenheitParaCelsius', () => {
  test('deve converter uma temperatura diferente do ponto de congelamento', () => {
    // mata mutantes: trocas aritméticas na conversão
    expect(fahrenheitParaCelsius(50)).toBe(10);
  });
});

describe('inverso', () => {
  test('deve rejeitar zero com a mensagem exata', () => {
    // mata mutante: remoção da condição de erro
    expect(() => inverso(0)).toThrow(new Error('Não é possível inverter o número zero.'));
  });
});

describe('isMaiorQue', () => {
  test('deve retornar falso para valores menores e iguais', () => {
    // mata mutantes: substituição por true e troca > por >=
    expect(isMaiorQue(4, 5)).toBe(false);
    expect(isMaiorQue(5, 5)).toBe(false);
  });
});

describe('isMenorQue', () => {
  test('deve retornar falso para valores maiores e iguais', () => {
    // mata mutantes: substituição por true e troca < por <=
    expect(isMenorQue(6, 5)).toBe(false);
    expect(isMenorQue(5, 5)).toBe(false);
  });
});

describe('isEqual', () => {
  test('deve retornar falso para valores diferentes', () => {
    // mata mutante: substituição da comparação por true
    expect(isEqual(7, 8)).toBe(false);
  });
});

describe('medianaArray', () => {
  test('deve ordenar uma entrada ímpar não ordenada antes de obter a mediana', () => {
    // mata mutantes: remoção de sort e alterações no comparador
    expect(medianaArray([10, -1, 2])).toBe(2);
  });

  test('deve calcular a média dos dois valores centrais em entrada par', () => {
    // mata mutantes: remoção/alteração do ramo para comprimento par
    expect(medianaArray([4, 1, 3, 2])).toBe(2.5);
  });

  test('deve rejeitar um array vazio com a mensagem exata', () => {
    // mata mutante: remoção da condição de array vazio
    expect(() => medianaArray([])).toThrow(new Error('Array vazio не possui mediana.'));
  });
});