/** Textual markov chain generator */


class MarkovMachine {

  constructor(text) {
    let words = text.split(/[ \r\n]+/);
    this.words = words.filter(c => c !== "");
    this.makeChains();
  }

  /** set markov chains:
   *
   *  for text of "the cat in the hat", chains will be
   *  {"the": ["cat", "hat"], "cat": ["in"], "in": ["the"], "hat": [null]} */

  makeChains() {
    let markovChains = new Map();

    for (let i = 0; i < this.words.length; i += 1) {
      let word = this.words[i];
      let nextWord = this.words[i + 1] || null;

      if (markovChains.has(word)) markovChains.get(word).push(nextWord);
      else markovChains.set(word, [nextWord]);
    }

    this.markovChains = markovChains;
  }

  static choice(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }

  /** return random text from markovChains */

  makeText(numWords = 100) {
    let keys = Array.from(this.markovChains.keys());
    let key = MarkovMachine.choice(keys);
    let outputWords = [];

    while (outputWords.length < numWords && key !== null) {
      outputWords.push(key);
      key = MarkovMachine.choice(this.markovChains.get(key));
    }

    return outputWords.join(" ");
  }
}

module.exports = {
  MarkovMachine,
};
