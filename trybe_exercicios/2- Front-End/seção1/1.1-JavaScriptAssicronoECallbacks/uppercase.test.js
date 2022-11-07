const uppercase = (str, callback) => {
  setTimeout(() => {
    callback(str.toUpperCase());
  }, 500);
};

const viewUppercase = (str) => {
  return str;
}



test('testando a função uppercase', () => {
  const callbackDeSucesso = palavra => {
    expect(palavra).toBe('LEGAL')
  }

  uppercase('legal', callbackDeSucesso);

})