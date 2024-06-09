let stocks = {
    Fruits : ['strawberry', 'grapes', 'banana', 'apple'],
    liquid : ['water', 'ice'],
    holder: ['cone', 'cup', 'sticks'],
    toppings:['chocolate','peanuts']
};
/*
let order =( fruit_name,call_production) =>{
setTimeout(()=>{
    console.log(`${stocks.Fruits[fruit_name]} was selected`)
    call_production()
}, 2000);

}
let production =()=>{
    setTimeout(()=>{
        console.log('production has started');

        setTimeout(()=>{
         console.log('the fruit has been chopped')

         setTimeout(()=>{
            console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was added`);

            setTimeout(()=>{
                console.log('the machine was started')

                setTimeout(()=>{
               console.log(`ice cream was place on ${stocks.holder[0]}`)

               setTimeout(()=>{
                console.log(`${stocks.toppings[0]} was added as toppings`)

                setTimeout(() =>{
                    console.log('your ice cream is ready to be serve')
                }, 2000)  

               },3000)

                }, 2000)

            }, 1000)

         }, 1000);

        },2000);

    }, 1000);
};
order(0,production) */


let is_shop_open = true;
/*
let order = (time, work) =>{
    return new Promise(  (resolve, reject) =>{
        if (is_shop_open){
            setTimeout(()=>{
                resolve( work())
            }, time)
        }
        else{
            reject(console.log('our shop is closed'))
        }
    });
};
order(2000, () => console.log(`${stocks.Fruits[2]} was selected`))

.then(()=>{
    return order(1000, () => console.log('production has started'));
})

.then(()=>{
    return order (2000, ()=> console.log('the fruit was chopped'));
})

.then(()=>{
    return order(2000, ()=> console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was added`));
})

.then(()=>{
    return order(2000, ()=> console.log('the machine was started'));
})

.then(()=>{
    return order(2000, ()=> console.log(`the ice cream was placed in ${stocks.holder[1]}`));
})

.then(()=>{
    return order(2000, ()=> console.log(`${stocks.toppings[1]} was added as toppings`))
})

.then(()=>{
    return order(2000, ()=> console.log('we are ready to serve your ice cream'))
})

.catch(()=>{
    console.log('customer left')
})

.finally(()=>{
    console.log('day ended, shop closed')
}) */
/*
let order = () =>{
    return new Promise ((resolve, reject) =>{
        if (true){
            resolve()
        }
        else{
            reject()
        }
    })
}
.then()
.then()
.then()
.catch()
.finally() *//*
async function order (){
    try{
     await abc;
    }
    catch(error){
     console.log('abc doesnt exis', error)
    }
    finally{
    console.log('it runs anyways')
    }
}
order()

.then(()=>{
    console.log('it runs after order ')
}) */
/*
let topping_chioce = ()=>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
    resolve (console.log('which topping would you like?')) 
        }, 3000)
    })
}
async function kitchen(){
    console.log(' A ');
    console.log(' B ');
    console.log(' C ');
    await topping_chioce();
    console.log(' D ');
    console.log(' E ');
}
kitchen();
console.log('doing dishes');
console.log('cleaning the tables');
console.log('taking others order'); */
/*
function time(ms){
    return new Promise((resolve, reject) =>{
        if (is_shop_open){
            setTimeout(resolve,ms);
        }else {
            reject(console.log('shop is closed'));
        }
    })
}
async function kitchen(){
    try{
        await time(2000);
        console.log(`${stocks.Fruits[1]} was seleted`);

        await time(1000)
        console.log('start the producting')

        await time(2000)
        console.log('cut the fruit')

        await time (1000)
        console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was added`)

        await time (2000)
        console.log('start the machine')

        await time (2000)
        console.log(`ice cream was placed in ${stocks.holder[1]}`)

        await time (2000)
        console.log(`${stocks.toppings[0]} was selected`)

        await time (2000)
        console.log('serve ice cream')
    }
    catch(error){
        console.log('customer left',error)
    }
    finally{
        console.log('day ended, shop is closed')
    }
}
kitchen()  */

// fetch api 
/*

const url = 'http://worldtimeapi.org/api/timezone/America/New_york'

async function getData(){
 const response = await fetch(url)
 const data = await response.json()
 console.log(data)
}
getData() */
/*
const url = 'https://freetestapi.com/api/v1/countries'
const request = new Request (url)
async function getData(){
    try{
        const response = await fetch(request)
        if (response.status === 200){
            const data = await response.json()
            console.log('success', data)
        }else{
            console.log('server Error', response)
        }
        }catch(error){
            console.log('error', error)
    }
}
getData()
*/
