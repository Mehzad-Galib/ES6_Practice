const ages = [11, 12, 23, 45];
const ages2 = [13, 14, 15, 12];

const allAges = ages.concat(ages2);

// spread operator ...(3 dots)

const allAges2 = [...ages, ...ages2, 5];

// console.log(allAges2);

const business = 640;
const minister = 540;
const sochib = 222;

const takaPoisa = [business, minister, sochib];

const maximum = Math.max(...takaPoisa);

console.log(maximum);