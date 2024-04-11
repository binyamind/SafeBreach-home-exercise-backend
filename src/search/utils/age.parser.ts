export function ageParsesr(birthday: string) {
  const splitedBirthdate = birthday.split('t')[0];
  const birthYear = new Date(splitedBirthdate).getFullYear();
  const currentYear = new Date().getFullYear();
  const age = currentYear - birthYear;
  return age.toString();
}
