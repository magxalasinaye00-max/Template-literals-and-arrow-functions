const multilineString = `
That's me Sinaye Magxala
navigating life's twist and turns with curiosity and grit,
and finding joy in the journey
`;

console.log(multilineString);

const createUserCard = (user) => {
  return `
    <div class="user-card">
      <h2>${user.name}</h2>
      <p>Email: ${user.email}</p>
      <p>Age: ${user.age}</p>
    </div>
  `;
};

const user = { name: "Sinaye", email: "magxalasinaye00@gmail.com", age: 22 };
console.log(createUserCard(user));

const numbers = [1, 2, 3, 4, 5]

const doubled = numbers.map(num=> num * 2);
const evens = numbers.filter(num => num % 2 ===0);
const sum = numbers.reduce((acc, num) => acc + num, 0);

console.log("Doubled:", doubled);
console.log("Even numbers:", evens);
console.log("Sum:", sum);
