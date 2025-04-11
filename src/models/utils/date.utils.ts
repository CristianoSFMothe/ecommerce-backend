export function validateDateFormatPtBr(dateString: string): void {
  const regex = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/;

  if (!regex.test(dateString)) {
    throw new Error(
      `Formato de data inválido: ${dateString}. Use o formato dd/mm/yyyy.`,
    );
  }
}

export function calculateAgeFromDatePtBr(dateString: string): number {
  const [day, month, year] = dateString.split('/').map(Number);
  const birthDate = new Date(year, month - 1, day);
  const today = new Date();

  let age = today.getFullYear() - birthDate.getFullYear();
  const hasHadBirthdayThisYear =
    today.getMonth() > birthDate.getMonth() ||
    (today.getMonth() === birthDate.getMonth() &&
      today.getDate() >= birthDate.getDate());

  if (!hasHadBirthdayThisYear) {
    age--;
  }

  return age;
}
