# Teste de Software — PUC Minas

## Análise de Eficácia de Testes com Teste de Mutação

**Nome completo:** [MEU NOME COMPLETO]  
**Matrícula:** [MINHA MATRÍCULA]  
**Ferramentas:** Jest e StrykerJS

## 1. Análise inicial

A biblioteca contém 50 funções matemáticas em `src/operacoes.js`. A suíte original tinha 50 testes, em geral um exemplo positivo por função. Todos passaram, mas os resultados de cobertura e mutação mostraram níveis diferentes de eficácia:

| Métrica inicial | Resultado |
|---|---:|
| Statements | 85,41% |
| Branches | 58,82% |
| Functions | 100% |
| Lines | 98,64% |
| Score Stryker | 73,71% |
| Mutantes gerados | 213 |
| Mortos / timeouts / sobreviventes / sem cobertura | 154 / 3 / 44 / 12 |

A discrepância é esperada: cobertura registra se uma linha ou ramo foi executado; não garante que a asserção distinguiria a implementação correta de uma implementação defeituosa. Por exemplo, chamar `isMaiorQue(10, 5)` executa a função, mas não diferencia `a > b` de `a >= b`. Do mesmo modo, `toThrow()` sem verificar a mensagem aceita qualquer erro, inclusive um mutante que troca a mensagem por uma string vazia.

## 2. Análise de mutantes críticos

Os exemplos abaixo representam operadores e fraquezas diferentes observados no relatório da primeira execução.

| Local | Mutador e transformação | Por que sobreviveu |
|---|---|---|
| `src/operacoes.js:75` | **BlockStatement** — remove `if (n % i === 0) return false` de `isPrimo` | A suíte só verificava `isPrimo(7)`, um primo. O ramo que rejeita divisores não era exercitado por um número composto. |
| `src/operacoes.js:44` | **ArithmeticOperator** — `n % 2 !== 0` → `n * 2 !== 0` em `isImpar` | Para o único exemplo, `n = 7`, ambas as expressões resultam em `true`; faltava um valor par que produzisse resultado distinto. |
| `src/operacoes.js:104` | **EqualityOperator** — `a > b` → `a >= b` em `isMaiorQue` | O teste usava apenas valores distintos com `a > b`. Sem a fronteira `a === b`, os dois operadores retornavam `true`. |

[INSERIR SCREENSHOT: mutante BlockStatement em `isPrimo`, relatório `reports/mutation-inicial.html`]  
[INSERIR SCREENSHOT: mutante ArithmeticOperator em `isImpar`, relatório `reports/mutation-inicial.html`]  
[INSERIR SCREENSHOT: mutante EqualityOperator em `isMaiorQue`, relatório `reports/mutation-inicial.html`]

A listagem integral dos 44 sobreviventes iniciais, com código original/mutado, classificação e justificativa individual, está no apêndice [mutantes-iniciais.md](./mutantes-iniciais.md).

## 3. Solução implementada

Foram acrescentados 22 testes, organizados em `describe` por função, sem alterar as operações matemáticas. Os novos casos cobrem fronteiras, resultados falsos, entradas negativas, arrays vazios, conversões com valores não coincidentes e mensagens exatas de erro. Exemplos:

```js
describe('isPrimo', () => {
  test('deve tratar um e um composto como não primos', () => {
    expect(isPrimo(1)).toBe(false);
    expect(isPrimo(4)).toBe(false);
  });
});

describe('isMaiorQue', () => {
  test('deve retornar falso para valores menores e iguais', () => {
    expect(isMaiorQue(4, 5)).toBe(false);
    expect(isMaiorQue(5, 5)).toBe(false);
  });
});
```

O caso `isPrimo(4)` percorre o ramo de divisor e mata a remoção do bloco; `isImpar(2)` distingue o resto da multiplicação; e `isMaiorQue(5, 5)` mata a mutação de fronteira. Com o código original, todos os 72 testes passam.

Sete mutantes sobreviventes foram identificados como equivalentes no domínio considerado: quatro variantes da condição-base de `fatorial`, a remoção do retorno especial de `produtoArray([])` (a redução usa semente 1) e as duas trocas estritas do `clamp` (`<` por `<=` e `>` por `>=`), cujo retorno no limite é o próprio limite. Diretivas oficiais do Stryker registram essas justificativas. Por serem aplicadas por linha e operador, as diretivas também abrangem quatro variantes que uma execução sem diretivas mostrou como mortas; isso está explicitado nos comentários e nos resultados, em vez de ser apresentado como equivalência.

## 4. Resultados finais

| Métrica | Inicial | Final |
|---|---:|---:|
| Cobertura statements | 85,41% | 100% |
| Cobertura branches | 58,82% | 100% |
| Cobertura functions | 100% | 100% |
| Cobertura lines | 98,64% | 100% |
| Score Stryker | 73,71% | 100% |
| Mutantes gerados | 213 | 213 |
| Mortos | 154 | 199 |
| Timeouts | 3 | 3 |
| Sobreviventes | 44 | 0 |
| Sem cobertura | 12 | 0 |
| Ignorados | 0 | 11 |

O score final do Stryker é 100% porque seus três timeouts são contabilizados como mutantes detectados. Para uma leitura conservadora que conta apenas mutantes mortos, excluem-se os 11 ignorados do denominador: **199 / (213 − 11) = 98,51%**, acima da meta. Dos 11 ignorados, sete correspondem aos equivalentes descritos acima; quatro variantes adicionais foram abrangidas pela granularidade das diretivas, embora tenham sido mortas na execução anterior sem elas. Não houve sobreviventes nem mutantes sem cobertura na execução final.

[INSERIR SCREENSHOT: resumo do relatório final `reports/mutation-final.html`]

## 5. Conclusão

O experimento mostrou que cobertura alta não basta para demonstrar eficácia: a suíte inicial executava quase todas as linhas, mas deixava muitos defeitos plausíveis passarem por falta de asserções discriminantes e de casos de fronteira. O teste de mutação forneceu evidência direta sobre essa fraqueza e orientou novos testes que observam os resultados e erros relevantes.

Mutantes equivalentes limitam a métrica, pois não há entrada capaz de diferenciá-los no domínio válido; devem ser justificados e não “mortos” por testes artificiais. O Stryker gera principalmente mutantes de primeira ordem (FOM); mutantes de ordem superior (HOM), com defeitos combinados, podem mascarar uns aos outros e tornar a análise mais difícil. Por fim, o custo computacional cresce com o número de mutantes e execuções de teste: neste projeto, 213 mutantes foram analisados em aproximadamente sete segundos por execução, mas suítes maiores podem exigir mais tempo e recursos.
