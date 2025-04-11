export function formatCpf(cpf: string): string {
  const digitsOnly = cpf.replace(/\D/g, '');

  if (digitsOnly.length !== 11) {
    throw new Error(
      'CPF deve conter exatamente 11 dígitos numéricos para ser formatado.',
    );
  }

  return digitsOnly.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
}
