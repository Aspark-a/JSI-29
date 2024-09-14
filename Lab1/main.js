// bai 1: In ra mot array
// map == for each
const animals = [
    {
      name: "Lion",
      type: "Mammal",
      weight: 250
    },
    {
      name: "Giraffe",
      type: "Mammal",
      weight: 830
    },
    {
      name: "Kangaroo",
      type: "Marsupial",
      weight: 50
    },
    {
      name: "Elephant",
      type: "Mammal",
      weight: 5000
    },
    {
      name: "Penguin",
      type: "Bird",
      weight: 3
    }
  ];

const animals_name = animals.map(item => item.name)
document.write(animals_name)

// for each
const animals_name_2 = [];
animals.forEach((animals) => {
    animals_name_2.push(animals.name);
});
document.writeln(animals_name_2);
// bai 2: Lọc các số chẵn của array bên dưới (theo cú pháp ES6)
const num_list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
// for each
const rs = [];
num_list.forEach((item) => {
    if (item % 2 == 0) {
        rs.push(item);
    }
});

document.writeln(rs, `<br>`);

// filter
const rs_2 = num_list.filter((item) => item % 2 == 0);
document.writeln(rs_2);

// bai 3: Lọc ra các từ chứa âm "at"
const string_list = ["at", "aat", "java", "cat", "dog"];
// filter + includes
const filtered_list = string_list.filter((item) => item.includes("at"));
document.writeln(filtered_list);

//  bai 4: chuyển đổi array bên dưới
const playerProfile = [
    { name: "Ronaldo", team: "Al Nassr" },
    { name: "Messi", team: "Inter Miami" },
    { name: "Neymar", team: "Al Hilal" },
  ];

  const getUpFromArray = data => {
    return data.reduce((obj, item) => {
        obj[item.name] = { team: item.team };
        return obj;
    }, {});
  };
  const playerProfileModified = getUpFromArray(playerProfile)
  document.write(JSON.stringify(playerProfileModified))