import test from 'ava';
import splitChars from './index.js';

test('main', t => {
	t.deepEqual([...splitChars('🏴󠁧󠁢󠁥󠁮󠁧󠁿❤️谢👪')], ['🏴󠁧󠁢󠁥󠁮󠁧󠁿', '❤️', '谢', '👪']);
	t.deepEqual([...splitChars('Iñtërnâtiônàlizætiøn☃💩')], ['I', 'ñ', 't', 'ë', 'r', 'n', 'â', 't', 'i', 'ô', 'n', 'à', 'l', 'i', 'z', 'æ', 't', 'i', 'ø', 'n', '☃', '💩']);
	t.deepEqual([...splitChars('')], []);
});

test('zalgo', t => {
	t.deepEqual([...splitChars('Z͑ͫ̓ͪ̂ͫ̽͏̴̙̤̞͉͚̯̞̠͍A̴̵̜̰͔ͫ͗͢L̠ͨͧͩ͘G̴̻͈͍͔̹̑͗̎̅͛́Ǫ̵̹̻̝̳͂̌̌͘!͖̬̰̙̗̿̋ͥͥ̂ͣ̐́́͜͞')], ['Z͑ͫ̓ͪ̂ͫ̽͏̴̙̤̞͉͚̯̞̠͍', 'A̴̵̜̰͔ͫ͗͢', 'L̠ͨͧͩ͘', 'G̴̻͈͍͔̹̑͗̎̅͛́', 'Ǫ̵̹̻̝̳͂̌̌͘', '!͖̬̰̙̗̿̋ͥͥ̂ͣ̐́́͜͞']);
});
