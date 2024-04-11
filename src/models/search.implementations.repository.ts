import { PersonResponse } from 'src/models/Person.Respones';

export interface Repository {
  findAll(searchTerm: string): Promise<Array<PersonResponse>>;
}
