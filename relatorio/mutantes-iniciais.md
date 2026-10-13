# Apêndice — sobreviventes da primeira execução

Cada entrada registra um mutante sobrevivente do Stryker inicial em `src/operacoes.js`. “Equivalente” indica equivalência para o domínio válido da função; os demais apontam para a falta de caso, fronteira ou verificação que permitiu a sobrevivência.

| # | Linha | Mutador | Original → mutado | Classe e motivo da sobrevivência |
|---:|---:|---|---|---|
| 1 | 13 | EqualityOperator | `n < 0` → `n <= 0` | **(b) Fronteira:** nenhum teste de raiz quadrada para zero distinguia as condições. |
| 2 | 13 | ConditionalExpression | `if (n < 0)` → `if (false)` | **(a) Caso ausente:** nenhum teste negativo verificava a rejeição de entrada inválida. |
| 3 | 8 | StringLiteral | mensagem de divisão por zero → `""` | **(d) Erro não verificado:** `toThrow()` só verificava que algum erro era lançado. |
| 4 | 18 | ConditionalExpression | condição `n < 0` → `false` | **(a) Caso ausente:** nenhum fatorial negativo era testado. |
| 5 | 18 | EqualityOperator | `n < 0` → `n <= 0` | **(b) Fronteira:** zero não era testado em conjunto com a regra para negativos. |
| 6 | 19 | ConditionalExpression | `n === 0 || n === 1` → `false` | **(e) Equivalente:** para zero e um, o laço não executa e também retorna 1. |
| 7 | 19 | LogicalOperator | `||` → `&&` | **(e) Equivalente:** sem o retorno antecipado, o laço retorna 1 para zero e um. |
| 8 | 19 | ConditionalExpression | primeiro termo → `false` | **(e) Equivalente:** o caso zero segue pelo laço e produz 1. |
| 9 | 19 | ConditionalExpression | segundo termo → `false` | **(e) Equivalente:** o caso um segue pelo laço e produz 1. |
| 10 | 25 | ConditionalExpression | condição de array vazio → `false` | **(a) Caso ausente:** a média de array vazio não era verificada. |
| 11 | 34 | ConditionalExpression | condição de array vazio → `false` | **(a) Caso ausente:** nenhum teste verificava a exceção para máximo de array vazio. |
| 12 | 38 | ConditionalExpression | condição de array vazio → `false` | **(a) Caso ausente:** nenhum teste verificava a exceção para mínimo de array vazio. |
| 13 | 43 | ConditionalExpression | `isPar(n)` → `true` | **(c) Asserção/caso fraco:** só havia um exemplo par; faltava esperar `false`. |
| 14 | 44 | ConditionalExpression | `isImpar(n)` → `true` | **(c) Asserção/caso fraco:** só havia um exemplo ímpar, cujo resultado era `true`. |
| 15 | 44 | ArithmeticOperator | `n % 2 !== 0` → `n * 2 !== 0` | **(a) Caso ausente:** para 7, as duas expressões retornam `true`; faltava testar par. |
| 16 | 73 | EqualityOperator | `n <= 1` → `n < 1` | **(b) Fronteira:** o valor 1, que não é primo, não era testado. |
| 17 | 73 | ConditionalExpression | condição `n <= 1` → `false` | **(a) Caso ausente:** não havia caso de número não primo na fronteira inferior. |
| 18 | 74 | ConditionalExpression | condição do laço → `false` | **(a) Caso ausente:** o único exemplo era primo e não exigia encontrar divisor. |
| 19 | 74 | EqualityOperator | `i < n` → `i >= n` | **(a) Caso ausente:** nenhum composto permitia observar o efeito da condição do laço. |
| 20 | 74 | BlockStatement | remoção do bloco que rejeita divisor | **(a) Caso ausente:** sem número composto, a remoção não altera o resultado testado. |
| 21 | 75 | ConditionalExpression | `if (n % i === 0)` → `false` | **(a) Caso ausente:** nenhum valor composto exercitava o ramo que retorna `false`. |
| 22 | 75 | ArithmeticOperator | `n % i === 0` → `n * i === 0` | **(a) Caso ausente:** o primo 7 não expunha a diferença entre resto e produto. |
| 23 | 84 | ConditionalExpression | condição de array vazio → `false` | **(e) Equivalente:** `reduce` com semente 1 também retorna 1 para array vazio. |
| 24 | 88 | ConditionalExpression | condição `valor < min` → `false` | **(a) Caso ausente:** o teste só verificava um valor dentro do intervalo. |
| 25 | 88 | EqualityOperator | `valor < min` → `valor <= min` | **(e) Equivalente:** no limite, `min` é igual ao valor que seria retornado. |
| 26 | 89 | ConditionalExpression | condição `valor > max` → `false` | **(a) Caso ausente:** nenhum valor acima do limite era testado. |
| 27 | 89 | EqualityOperator | `valor > max` → `valor >= max` | **(e) Equivalente:** no limite, `max` é igual ao valor que seria retornado. |
| 28 | 92 | ConditionalExpression | expressão de `isDivisivel` → `true` | **(a) Caso ausente:** só se verificava um par divisível, que naturalmente retorna `true`. |
| 29 | 93 | ArithmeticOperator | `celsius * 9 / 5` → `celsius * 9 * 5` | **(a) Caso não coincidente:** zero produz 32 nas duas versões. |
| 30 | 93 | ArithmeticOperator | `celsius * 9 / 5` → `celsius / 9 / 5` | **(a) Caso não coincidente:** zero produz 32 nas duas versões. |
| 31 | 94 | ArithmeticOperator | `fahrenheit * 5 / 9` → `fahrenheit * 5 * 9` (após subtrair 32) | **(a) Caso não coincidente:** o ponto de congelamento produz zero nas duas versões. |
| 32 | 94 | ArithmeticOperator | `fahrenheit * 5 / 9` → `fahrenheit / 5 / 9` (após subtrair 32) | **(a) Caso não coincidente:** o ponto de congelamento produz zero nas duas versões. |
| 33 | 96 | ConditionalExpression | condição `n === 0` → `false` | **(a) Caso ausente:** não se testava inverso de zero nem a exceção correspondente. |
| 34 | 104 | ConditionalExpression | expressão de `isMaiorQue` → `true` | **(c) Asserção/caso fraco:** só havia um exemplo em que o resultado correto era `true`. |
| 35 | 104 | EqualityOperator | `a > b` → `a >= b` | **(b) Fronteira:** não havia comparação com operandos iguais. |
| 36 | 105 | ConditionalExpression | expressão de `isMenorQue` → `true` | **(c) Asserção/caso fraco:** só havia um exemplo cujo resultado era `true`. |
| 37 | 105 | EqualityOperator | `a < b` → `a <= b` | **(b) Fronteira:** não havia comparação com operandos iguais. |
| 38 | 106 | ConditionalExpression | expressão de `isEqual` → `true` | **(c) Asserção/caso fraco:** só havia uma comparação de valores iguais. |
| 39 | 108 | ConditionalExpression | condição de array vazio → `false` | **(a) Caso ausente:** nenhum teste verificava mediana de array vazio e sua exceção. |
| 40 | 109 | MethodExpression | remoção de `.sort(...)` | **(a) Caso ausente:** a única entrada de mediana já estava ordenada. |
| 41 | 109 | ArrowFunction | comparador `(a, b) => a - b` → `() => undefined` | **(a) Caso ausente:** sem entrada não ordenada, a ausência de ordenação não era observada. |
| 42 | 109 | ArithmeticOperator | comparador `a - b` → `a + b` | **(a) Caso ausente:** a entrada ordenada não distinguia os comparadores. |
| 43 | 111 | ConditionalExpression | condição de comprimento par → `false` | **(a) Caso ausente:** só havia exemplo de mediana com quantidade ímpar. |
| 44 | 111 | ArithmeticOperator | `sorted.length % 2 === 0` → `sorted.length * 2 === 0` | **(a) Caso ausente:** sem comprimento par, a condição mutada não altera o caso exercitado. |

Classificação: **(a)** falta de caso de teste; **(b)** falta de teste de fronteira; **(c)** asserção fraca/ausente; **(d)** mensagem/valor de erro não verificado; **(e)** possível mutante equivalente.
