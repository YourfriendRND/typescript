
// ^ Тип Record<key,value> 

// * Это дженерик с двумя типами-параметрами. 

// * Первый тип-параметр — тип значения ключа. 

// * Второй параметр — тип значения значения (как-то много слов о значении, да?)

// * С помощью Record<key,value> можно легко определить словарь для локализации терминов на разные языки:


const dictionaryRu: Record<string,string> = {'dictionary': 'словарь'};

// * Или определить карту соответствия:

const wordNumber: Record<string, number> = {'Golden ratio': 1.6, 'Euler\'s Number ': 2.7, 'Pi': 3.14};

// * Если тип значения значения «пока ещё» неизвестен, можно определить тип словаря-карты как:

const nonTrivialObject: Record<string, unknown> = {};

