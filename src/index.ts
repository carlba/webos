function greet(name: string) {
  console.log(`Welcome ${name}`);

  if (process.env.PORT) {
    console.log(`Application running on port ${process.env.PORT}`);
  }
}

greet('Carl');
