export function validateDateFormatPtBr(dateString: string): void {
  const regex = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/;

  if (!regex.test(dateString)) {
    throw new Error(
      `Formato de data inválido: ${dateString}. Use o formato dd/mm/yyyy.`,
    );
  }
}
