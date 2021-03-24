const fakeUsers = [
  { id: 1, name: "TestUser1" },
  { id: 2, name: "TestUser2" },
];

export const getUsers = (): Promise<any> => {
  return new Promise((res) => {
    setTimeout(() => {
      res(fakeUsers);
    }, 5000);
  });
};
