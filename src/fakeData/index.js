import product1 from './product1';
import product2 from './product3';
import product3 from './product2';

const fakeData = [...product1, ...product2, ...product3];


const shuffle = a => {
    for (let i = a.length; i; i--) {
        let j = Math.floor(Math.random() * i);
        [a[i - 1], a[j]] = [a[j], a[i - 1]];
    }
}

shuffle(fakeData);

export default fakeData;