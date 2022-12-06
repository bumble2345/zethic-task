import { faker } from "@faker-js/faker";

export default function createRandomUser(): any {
  const range = (min: any, max: any) =>
    [...Array(max - min + 1).keys()].map((i) => i + min);
  function random_rgba() {
    var o = Math.round,
      r = Math.random,
      s = 255;
    return (
      "rgba(" +
      o(r() * s) +
      "," +
      o(r() * s) +
      "," +
      o(r() * s) +
      "," +
      r().toFixed(1) +
      ")"
    );
  }

  return {
    userId: faker.datatype.uuid(),
    username: faker.internet.userName(),
    userAge: faker.helpers.arrayElement(range(21, 70)),
    number: faker.phone.number(),
    email: faker.internet.email(),
    userLocation: faker.address.country(),
    birthdate: faker.date.birthdate(),
    registeredAt: faker.date.past(),
    carModel: faker.vehicle.vehicle(),
    carManufacturer: faker.vehicle.manufacturer(),
    carAge: faker.helpers.arrayElement(
      Array.from({ length: 50 }, (_, i) => i + 1)
    ),
    pieColor: random_rgba(),
  };
}
