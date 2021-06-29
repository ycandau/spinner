const spin = (cycles) => {
  for (let i = 0; i <= cycles * 8; i++) {
    setTimeout(
      () => process.stdout.write(`\r${['|', '/', '-', '\\'][i % 4]}   `),
      100 + i * 200
    );
  }
  setTimeout(() => process.stdout.write('\n'), 300 + 1600 * cycles);
};
spin(1);
