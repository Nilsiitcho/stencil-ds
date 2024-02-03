export function toBRL(numberValue: number): string {
  if (isNaN(numberValue)) {
    return 'Valor inválido';
  }

  return numberValue.toLocaleString('pt-BR');
}
