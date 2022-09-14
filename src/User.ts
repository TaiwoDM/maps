import { faker } from '@faker-js/faker';
// we no longer need a type definition file for faker cause faker now provides its own type definitions

export class User {
  name: string;
  location: { lat: number; lng: number };

  constructor() {
    this.name = faker.name.fullName();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    };
  }

  markerContent(): string {
    return `User name: ${this.name}`;
  }
}
