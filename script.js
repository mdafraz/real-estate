const fs = require("fs");
const { faker } = require("@faker-js/faker");
function generateDummyData(count) {
  const data = [];
  const propertyTypes = ["House", "Apartment", "Townhouse", "Villa", "Condo"];
  for (let i = 0; i < count; i++) {
    const from = faker.date.anytime();
    const till = faker.date.future({ refDate: from });
    const city = faker.location.city();
    const entry = {
      ratePerMonth: faker.number.int({ min: 500, max: 10000 }),
      name: faker.location.street(),
      streetName: `${faker.location.streetAddress()}, ${city}, ${faker.location.state(
        { abbreviated: true }
      )}`,
      location: `${city} , ${faker.location.country()}`,
      beds: faker.number.int({ min: 1, max: 10 }),
      bathRooms: faker.number.int({ min: 1, max: 5 }),
      availableFrom: from,
      img: faker.image.urlLoremFlickr({ category: "house" }),
      availableTill: till,
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
