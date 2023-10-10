const { MarkovMachine } = require('./markov'); 

describe('MarkovMachine', () => {
  let markov;

  beforeEach(() => {
    // Create a new MarkovMachine instance before each test
    markov = new MarkovMachine('The quick brown fox jumps over the lazy dog.');
  });

  describe('makeChains', () => {
    test('should set up markov chains correctly', () => {
      // Test if the chains are set up as expected
      const expectedChains = new Map([
        ['The', ['quick']],
        ['quick', ['brown']],
        ['brown', ['fox']],
        ['fox', ['jumps']],
        ['jumps', ['over']],
        ['over', ['the']],
        ['the', ['lazy']],
        ['lazy', ['dog.']],
        ['dog.', [null]],
      ]);

      expect(markov.markovChains).toEqual(expectedChains);
    });
  });

  describe('choice', () => {
    test('should return a random element from an array', () => {
      // Test if the choice function returns a valid random choice
      const arr = [1, 2, 3, 4, 5];
      const choice = MarkovMachine.choice(arr);
      expect(arr).toContain(choice);
    });
  });

  describe('makeText', () => {
    test('should generate random text of specified length', () => {
      // Test if makeText generates text of the correct length
      const numWords = 5;
      const text = markov.makeText(numWords);
      const words = text.split(' ');

      expect(words.length).toBe(numWords);
    });
  });
});