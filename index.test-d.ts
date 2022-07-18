import {expectType} from 'tsd';
import splitChars from './index.js';

expectType<Iterable<string>>(splitChars('🏴󠁧󠁢󠁥󠁮󠁧󠁿❤️谢👪'));
