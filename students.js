let Grup = [
        {firstName: 'Vadym' ,  lastName:  'Samoylov',   ratting:  '77'},
        {firstName: 'Vasil' ,  lastName:  'Vaskiv',     ratting:  '95'},
        {firstName: 'Vitaly',  lastName:  'Suhodolski', ratting:  '88'},
        {firstName: 'Vlad'  ,  lastName:  'Berkischuk', ratting:  '79',},
        {firstName: 'Maxim' ,  lastName:  'Koloda',     ratting:  '84',},
        {firstName: 'Den'   ,  lastName:  'Shapoval',   ratting:  '82',},
        {firstName: 'Andriy',  lastName:  'Tsyniuk',    ratting:  '93',},
        {firstName: 'Dmitro',  lastName:  'Koval',      ratting:  '75',},
        {firstName: 'Igor'  ,  lastName:  'Kohut',      ratting:  '93',},
    ]

    const sortObj = (arr, id) => {
        let compare = (a, b) => a[id] > b[id] ? 1 : a[id] == b[id] ? 0 : -1;
        arr.sort(compare);
    }

    const compare = (arr, key, callback) => arr.reduce((prev, curr) =>
        (callback(prev[key], curr[key]) ? prev : curr), {})[key];

    const rateMin = compare(Grup, 'ratting', (a, b) => a < b);
    const rateMax = compare(Grup, 'ratting', (a, b) => a > b);


    function seredina () {
        let suma=0;
        for (const key in Grup){
            suma += +Grup[key].ratting;
        };
        let seredina = Math.ceil(suma/Grup.length);
        return seredina.toString();
    }

    function rate (){
        for (const key in Grup) {
            let value;
            value = Math.round(((rateMax/Grup[key].ratting)*100)-100);
            Grup[key].rate = value;
        }
    }
  //Sorting
    sortObj(Grup, 'firstName');
    console.log(Grup);
    console.log('\n')
    sortObj(Grup, 'lastName');
    console.log(Grup);
    console.log('\n')
    sortObj(Grup, 'ratting');
    console.log(Grup);
    console.log('\n');
  //

    console.log('Мінімальне та Максимальне значення'+'\n'+Min: ${rateMin}, Max: ${rateMax});
    console.log(Grup.find(x => x.ratting === seredina()));
    console.log(Grup.find(x => x.ratting === rateMin));
    console.log(Grup.find(x => x.ratting === rateMax));

    rate();
    console.log('\n'+'Добавлення поля rate: ')
    console.log(Grup);
