// object
let summary = {
    x: 'saludo1',
    y: 'saludo2',
    z: 'saludo3'
};

// asigna nuevos valores al objeto
Object.assign(summary, {z: 'saludo_nuevo', t: 'saludo en t'})

console.log(summary.x);

// array with objects inside
let journal = [
    {
        events: [
            'work',
            'touched tree'
        ],
        squirrel: false
    },
    {
        events: [
            'work',
            'ice cream'
        ],
        squirrel: false
    }
];

console.log(Object.keys(summary));

console.log(journal[0].events[0]);
