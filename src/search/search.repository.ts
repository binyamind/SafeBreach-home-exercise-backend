import { HttpStatus, Inject, Logger } from '@nestjs/common';
import { WINSTON_MODULE_PROVIDER } from 'nest-winston';
import { PersonResponse } from 'src/models/Person.Respones';
import { Repository } from 'src/models/search.implementations.repository';
import * as db from '../data/db.json';
import { PersonDb } from 'src/models/Person';
import { ageParsesr } from './utils/age.parser';
import { PersonKeys } from 'src/models/keys.enum';
import { Generic400Error } from 'src/models/Generic400Erorr';

export class SearchRepository implements Repository {
  constructor(
    @Inject(WINSTON_MODULE_PROVIDER) private readonly logger: Logger,
  ) {}
  private _db: Array<PersonDb> = db;
  async findAll(searchTerm: string): Promise<PersonResponse[]> {
    try {
      return this.search(searchTerm);
    } catch (error) {
      this.logger.error(error);
      throw new Generic400Error(
        'Requsted Resource Was Not Found',
        HttpStatus.NOT_FOUND,
      );
    }
  }
  private search(searchTerm: string): PersonResponse[] {
    const query = searchTerm.toLowerCase();
    const splitedQuerySearchTerm = query.split(' ');

    const results: Array<PersonDb> = this._db.filter((person) => {
      return splitedQuerySearchTerm.every((term) => {
        return this.getPepole(person, term);
      });
    });
    return results.map((item) => {
      return {
        address: item.address,
        age: ageParsesr(item.birthday.toString()),
        name: item.name,
        phone: item.phone_number,
        portrait: item.picture,
      };
    });
  }
  private getOnePepoleResult(
    value: string,
    key: string,
    term: string,
  ): boolean {
    switch (key) {
      case PersonKeys.NAME:
        return value.includes(term);
      case PersonKeys.BIRTHDAY:
        return ageParsesr(value).includes(term);
      case PersonKeys.PHONE_NUMBER:
        return value.includes(term);
      default:
        return false;
    }
  }
  private getPepole(person: PersonDb, term: string): boolean {
    return Object.keys(person).some((key) => {
      const value = person[key].toString().toLowerCase();
      return this.getOnePepoleResult(value, key, term);
    });
  }
}
