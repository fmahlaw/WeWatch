

// const a = 
// [
//   'https://images.tokopedia.net/img/cache/200-square/VqbcmM/2022/10/27/1a47e359-3102-4a69-bf41-64098bcaf2f9.png',
//   'https://images.tokopedia.net/img/cache/200-square/VqbcmM/2022/9/7/3f8fc689-2918-434c-a885-28f8d9c9103d.jpg',
//   'https://images.tokopedia.net/img/cache/200-square/VqbcmM/2022/9/28/67ef7588-8bc1-4bef-80c0-2753a002ab36.jpg',
//   'https://images.tokopedia.net/img/cache/200-square/VqbcmM/2022/8/31/c67810eb-6db1-490a-85e9-fc992228a6bf.jpg',
//   'https://assets.tokopedia.net/assets-tokopedia-lite/v2/zeus/kratos/85cc883d.svg',
//   'https://images.tokopedia.net/img/cache/200-square/VqbcmM/2022/8/31/32600bde-64f3-4c9a-b0f4-070e6dafe535.jpg',
//   'https://images.tokopedia.net/img/cache/200-square/VqbcmM/2022/8/1/7fca7eea-5863-4e10-8062-2cf43cf4fc58.jpg',
//   'https://images.tokopedia.net/img/cache/200-square/VqbcmM/2022/9/28/d652dcc6-b6b6-4f16-a7d2-fe07946511da.jpg',
//   'https://images.tokopedia.net/img/cache/200-square/VqbcmM/2022/9/28/4b643786-119a-4d6e-9eb9-4c828b7d4e33.jpg',
//   'https://assets.tokopedia.net/assets-tokopedia-lite/v2/zeus/kratos/85cc883d.svg'
// ]

function resolveAfter2Seconds() {
  console.log("starting slow promise");
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("slow");
      console.log("slow promise is done");
    }, 2000);
  });
}

function resolveAfter1Second() {
  console.log("starting fast promise");
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("fast");
      console.log("fast promise is done");
    }, 1000);
  });
}

async function sequentialStart() {
  console.log("==SEQUENTIAL START==");

  // 1. Execution gets here almost instantly
  const slow = await resolveAfter2Seconds();
  console.log(slow); // 2. this runs 2 seconds after 1.

  const fast = await resolveAfter1Second();
  console.log(fast); // 3. this runs 3 seconds after 1.
}

async function concurrentStart() {
  console.log("==CONCURRENT START with await==");
  const slow = resolveAfter2Seconds(); // starts timer immediately
  const fast = resolveAfter1Second(); // starts timer immediately

  // 1. Execution gets here almost instantly
  console.log(await slow); // 2. this runs 2 seconds after 1.
  console.log(await fast); // 3. this runs 2 seconds after 1., immediately after 2., since fast is already resolved
}

function concurrentPromise() {
  console.log("==CONCURRENT START with Promise.all==");
  return Promise.all([resolveAfter2Seconds(), resolveAfter1Second()]).then(
    (messages) => {
      console.log(messages[0]); // slow
      console.log(messages[1]); // fast
    }
  );
}

async function parallel() {
  console.log("==PARALLEL with await Promise.all==");

  // Start 2 "jobs" in parallel and wait for both of them to complete
  await Promise.all([
    (async () => console.log(await resolveAfter2Seconds()))(),
    (async () => console.log(await resolveAfter1Second()))(),
  ]);
}

sequentialStart(); // after 2 seconds, logs "slow", then after 1 more second, "fast"

// // wait above to finish
// setTimeout(concurrentStart, 4000); // after 2 seconds, logs "slow" and then "fast"

// // wait again
// setTimeout(concurrentPromise, 7000); // same as concurrentStart

// // wait again
// setTimeout(parallel, 10000); // truly parallel: after 1 second, logs "fast", then after 1 more second, "slow"



//-----------------------------------------------------------------------------------
// let a = 'https://www.tokopedia.com/namatoko'

// console.log(a-'namatoko')


//-------------------------------------------------------------------------------------------------------------------

// let a = ['https://www.tokopedia.com/ namatoko ',' https://www.tokopedia.com/namatoko2 ', ' https://www.tokopedia.com/namatoko/'  ]

// let b = []
// a.map((item)=>{
//   b.push(  item.slice(26).trim().replace(/[0-9]/g, "").replace(/['/-[\]']+/g, ""))

// })


//                 console.log(b)




//-------------------------------------------------------------------------------------------------------------------
// const tanggal = [
  
//     '2022/10/27', '2022/9/7',
//    '2022/8/31',  '2022/9/28',
//   'not found',  '2022/9/28',
//   '2022/8/31',  '2022/8/1',
//   '2022/9/28',  'not found'
  
// ]

// const tanggalEdit = []

// tanggal.map((item)=>{
//   if (item[0] === '2' ){


// if (item.length === 10){

//   tanggalEdit.push( item[8] + item[9] + "-" + item[5]+ item[6] + "-" + item[0]+ item[1]+ item[2]+ item[3])
// }

// else if( item.length === 9){
//   if (item[6]== '/'){

//     tanggalEdit.push(item[7] + item[8] + "-" + item[5] + "-" + item[0]+ item[1]+ item[2]+ item[3] )
//   }
//   else if (!(item[6]== '/')) {

//     tanggalEdit.push(item[8] + "-" + item[5]+ item[6] + "-" + item[0]+ item[1]+ item[2]+ item[3] )
//   }

// }

// else if ( item.length === 8){

//   tanggalEdit.push(item[7] + "-" + item[5] + "-" + item[0]+ item[1]+ item[2]+ item[3])
// }
//   }
// else{

//   tanggalEdit.push("not found");
// }


// })
// console.log(tanggalEdit)

// // let b = '2022/10/27'

// // let c = "as"


// // console.log([b[0]+b[1]])
//-------------------------------------------------------------------------------------------------------------------

// let result = []
// console.log( a[0].lastIndexOf("/"))

// a.map((item)=>{

//   tanggal.push((item.slice(item.indexOf(20, 50), item.lastIndexOf("/"))))

// })

//-------------------------------------------------------------------------------------------------------------------

// a.map((item) => {
//   result.push(item.slice(item.indexOf(20, 50), item.lastIndexOf("/", 50) + 10)
//       .replace(/[/]/g, "-"));
// });
//-------------------------------------------------------------------------------------------------------------------
// console.log(result)
// a.map((item) => {

//   if (!item.includes("assets")){

//     tanggalItem = [...tanggalItem, item
//     .slice(item.indexOf(20, 50), item.indexOf(20, 50) + 10)
//     .replace(/[/]/g, "-")];
//   }else{
//    tanggalItem.push("not found")
    
//   }
 
// });
// console.log(tanggalItem);
//-------------------------------------------------------------------------------------------------------------------
// const arr1 = [
//   {
//     number: 8,
//     nama: "XIAOMI OFFICIAL Redmi 10 5G 4/128GB Smartphone FHD+ 6,58” Kamera 50MP",
//     harga: "Rp 2.518.000",
//     img: null,
//     link: "https://www.tokopedia.com/xiaomi/xiaomi-official-redmi-10-5g-4-128gb-smartphone-fhd-6-58-kamera-50mp-chrome-silver?extParam=whid%3D13418340",
//     tanggal: null,
//   },
//   {
//     number: 9,
//     nama: "XIAOMI OFFICIAL Mi Curved Gaming Monitor 34 Inch",
//     harga: "Rp 5.999.000",
//     img: null,
//     link: "https://www.tokopedia.com/xiaomi/xiaomi-official-mi-curved-gaming-monitor-34-inch?extParam=whid%3D13418340",
//     tanggal: null,
//   },
// ];

// const arr2 = [
//   {
//     img: "images.tokopedia.net/img/cache/200-square/VqbcmM/2022/10/27/1a47e359-3102-4a69-bf41-64098bcaf2f9.png",
//     tanggal: "2022-10-27",
//   },
//    {
//     img: "images.tokopedia.net/img/cache/200-square/VqbcmM/2022/10/27/1a47e359-3102-4a69-bf41-64098bcaf2f9.png",
//     tanggal: "2022-10-27",
//   },
// ];

// arr1.map((item, index) => {
//   console.log({ ...item, img: arr2[index].img, tanggal: arr2[0].tanggal });
// });

// console.log();
