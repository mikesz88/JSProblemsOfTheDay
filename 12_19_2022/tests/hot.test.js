import { describe, it, expect, beforeEach } from 'vitest';
import { readFileSync } from 'fs';

const fileText = `
${readFileSync('hot/hot.js', {
  encoding: 'utf-8',
})};
`;

it('should have a function named pigLatinTranslator()', () => {
  const pigLatinTranslator = eval(`${fileText}; pigLatinTranslator`);
  expect(pigLatinTranslator).toBeInstanceOf(Function);
});

it('should have a function named translate()', () => {
  const translate = eval(`${fileText}; translate`);
  expect(translate).toBeInstanceOf(Function);
});

describe('translate()', () => {
  let translateFn;
  beforeEach(() => {
    eval(`
      ${fileText};
      translateFn = translate
    `);
  });

  it('word starts with a vowel should return the word + way', () => {
    const word = 'answer';
    const result = translateFn(word);
    expect(result).toBe('answerway');
  });

  it('word starts with a consonant and a vowel returns first letter of the word at the end of the word and add "ay."', () => {
    const word = 'word';
    const result = translateFn(word);
    expect(result).toBe('ordway');
  });

  it('word starts with two consonants returns word that moves the two consonants to the end of the word and add "ay"', () => {
    const word = 'stack';
    const result = translateFn(word);
    expect(result).toBe('ackstay');
  });
});

describe('pigLatinTranslator()', () => {
  let pigLatinTranslatorFn;
  beforeEach(() => {
    eval(`
      ${fileText};
      pigLatinTranslatorFn = pigLatinTranslator
    `);
  });

  it('should return "At\'swhay upway" if the phrase is "What\'s Up"', () => {
    const phrase = "What's Up";
    const result = pigLatinTranslatorFn(phrase);
    expect(result).toBe("At'swhay upway");
  });

  it('should return "Atwhay areway ouyay oingday aterlay" if the phrase is "What are you doing later"', () => {
    const phrase = 'What are you doing later';
    const result = pigLatinTranslatorFn(phrase);
    expect(result).toBe('Atwhay areway ouyay oingday aterlay');
  });

  it('should return "Ancay ouyay eakspay igpay atinlay" if the phrase is "Can you speak Pig Latin"', () => {
    const phrase = 'Can you speak Pig Latin';
    const result = pigLatinTranslatorFn(phrase);
    expect(result).toBe('Ancay ouyay eakspay igpay atinlay');
  });

  it('should throw an error message: "Not a string" if the parameter is not a string.', () => {
    const nonString = 5;
    expect(() => pigLatinTranslatorFn(nonString)).toThrowError('Not a string');
  });

  it('should return the first word capitalized like a normal sentence.', () => {
    const phrase = "It's really not that hard";
    const result = pigLatinTranslatorFn(phrase);
    expect(result).toBe("It'sway eallyray otnay atthay ardhay");
  });
});
