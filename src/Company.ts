import { faker } from '@faker-js/faker';

import { Mappable } from './CustomMap';

// class Company satisfy the Mappable interface
export class Company implements Mappable {
  name: string;
  catchPhrase: string;
  location: {
    lat: number;
    lng: number;
  };

  constructor() {
    this.name = faker.company.name();
    this.catchPhrase = faker.company.catchPhrase();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    };
  }

  markerContent(): string {
    return `<div>
    <h1>Company name: ${this.name}</h1>
    <h3>Company catchphrase: ${this.catchPhrase}</h3></div>
    `;
  }
}
