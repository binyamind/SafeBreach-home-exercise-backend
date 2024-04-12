export function ageParsesr(birthday: string) {
  const splitedBirthdate = birthday.split(':')[0].slice(0, -3);
  const birthYear = new Date(splitedBirthdate).getFullYear();
  const currentYear = new Date().getFullYear();
  const age = currentYear - birthYear;
  return age.toString();
}
