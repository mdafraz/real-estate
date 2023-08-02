const fs = require("fs");
const { faker } = require("@faker-js/faker");
function generateDummyData(count) {
  const data = [];
  const propertyTypes = ["House", "Apartment", "Townhouse", "Villa", "Condo"];

  for (let i = 0; i < count; i++) {
    const entry = {
      ratePerMonth: faker.number.int({ min: 500, max: 10000 }),
      name: faker.person.firstName(),
      streetName: faker.location.streetAddress(),
      location: faker.location.city() + ", " + faker.location.country(),
      beds: faker.number.int({ min: 1, max: 10 }),
      bathRooms: faker.number.int({ min: 1, max: 5 }),
      propertyType:
        propertyTypes[
          faker.number.int({ min: 0, max: propertyTypes.length - 1 })
        ],
    };

    data.push(entry);
  }
  console.log(data);
  return data;
}

fs.writeFile(
  "dummyData.json",
  JSON.stringify(generateDummyData(100)),
  function (err) {
    if (err) throw err;
  }
);
