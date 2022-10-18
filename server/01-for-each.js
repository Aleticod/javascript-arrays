const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];

for (let i = 0; i < letters.length; i++) {
    console.log('for', letters[i]);
}

// Language: javascript
// forEach
letters.forEach((item, index) => console.log('foreach', item, index));