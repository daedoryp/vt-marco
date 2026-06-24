// Exercice 1 — TypeScript : map / filter + type guard
// Objectif : emails (minuscules) des utilisateurs actifs de plus de 18 ans.
// Le résultat doit être de type string[] (sans undefined), SANS cast `as`.

export type User = {
  id: number;
  email?: string;
  age: number;
  active: boolean;
};

export const users: User[] = [
  { id: 1, email: "Ada@Example.com", age: 36, active: true },
  { id: 2, email: "linus@Example.COM", age: 17, active: true },
  { id: 3, age: 42, active: true }, // pas d'email
  { id: 4, email: "grace@example.com", age: 50, active: false },
  { id: 5, email: "Dennis@Example.com", age: 28, active: true },
];

// 👉 À COMPLÉTER : produire `emails: string[]`
// Indice : un predicate `(u): u is ... => ...` dans le filter.
const emails: string[] = []; // remplacer par la chaîne filter().map()

console.log(emails);
// Attendu : ["ada@example.com", "dennis@example.com"]
