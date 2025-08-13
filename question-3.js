// เริ่มเขียนโค้ดตรงนี้
async function getUsers() {
  try {
    const Jsonplaceholder = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await Jsonplaceholder.json();

    const result = users
      .map(user => user.name)
      .filter(name => name.length > 17);

    console.log(result);
  } catch (error) {
    console.error("An error occurred:", error);
  }
}

getUsers();

