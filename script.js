/*products*/

let products = [
  {
    name: 'SkinCare Storage Bag',
    img: 'src="images/bag.jpg" alt="Clear Bag" ',
    price: 33.99,
    tags: 'Women',
    description: 'Can used it when you travel, it is waterproof and made up with PVC material'
  },
  {
    name: 'EACHY makeup bag',
    img: 'src="images/bag1.jpg" alt="Pink Bag"',
    price: 49.99,
    tags: 'Women',
    description:
      'Inside and outside double waterproof design, thickened sponge all wrapped and made up with PU material.'
  },
  {
    name: 'Jansport Backpack Bag',
    img: 'src="images/schoolbag.jpg" alt="Yellow Bag"',
    price: 30.99,
    tags: 'Women',
    description:
      'The classic Jansport backpack in an electric color! 2 adjustable straps, 1 compartment, 1 front pocket'
  },
  {
    name: 'Mini Backpack',
    img: 'src="images/bag2.jpg" alt="olive Bag"',
    price: 139.0,
    tags: 'Women',
    description:
      'It is 21 centimeters high, 21 inches wide and 11 centimeters thick. It can hold mobile phones, wallets and other items.'
  },
  {
    name: 'Bucket bag',
    img: 'src="images/bag3.jpg" alt="Brown Bag"',
    price: 149.0,
    tags: 'Women',
    description:
      'Soft shoulder bag with fuzzy detail and made of PU material. Only 0.32kg and easy to go.'
  },
  {
    name: 'Depound bag',
    img: 'src="images/bag4.jpg" alt="Brown Bag"',
    price: 109.0,
    tags: 'Women',
    description:
      'Literature and art and fresh style, soft material, it is very comfortable with a French style.'
  },
  {
    name: 'Todaynowind Tote Bag',
    img: 'src="images/bag5.jpg" alt="Blue-White Bag"',
    price: 169.0,
    tags: 'Men',
    description:
      'One-shouldered canvas bag. Washing is not recommended. The cloth bag will shrink by 2cm after entering the water.'
  },
  {
    name: 'Double Side Tote Bag',
    img: 'src="images/bag6.jpg" alt="TodayNoWind-Bag"',
    price: 139.0,
    tags: 'Men',
    description:
      'One side is cotton and the other is nylon waterproof. Two color available, green and light-blue.'
  },
  {
    name: "Horween Men's Backpack",
    img: 'src="images/bag8.jpg" alt="Brown backup"',
    price: 132.95,
    tags: 'Men',
    description:
      'It made of Horween leather plant produced a kind of leather - Chromexcel with high density high brightness.'
  },
  {
    name: '5monker x TodayNoWind',
    img: 'src="images/bag9.jpg" alt="Blue Bag"',
    price: 159.0,
    tags: 'Men',
    description:
      'A small bag with a drawstring strap pocket. High density cotton fabric, cold water hand washing is recommended'
  },
  {
    name: 'Filson army Green',
    img: 'src="images/bag10.jpg" alt="stripped collar shirt"',
    price: 289.99,
    tags: 'Men',
    description:
      'It made of heavy canvas and hard leather in classic khaki and army green. Especially suitable for dating.'
  },
  {
    name: 'British style retro satchel',
    img: 'src="images/bag11.jpg" alt="Brown backup"',
    price: 180.95,
    tags: 'Men',
    description:
      'It is mostly made of cowhide, waterproof and durable, suitable for commuting, will accompany you for many years.'
  }
];

/** Add any JavaScript you need to this file. */
function insertitems(load) {
  load.forEach(products => {
    var div = document.getElementById('productloader');
    div.innerHTML =
      div.innerHTML +
      `
   <div class="product-card">
            <div class="product-pic">
                <img ${products.img}/>
          </div>
            <div class="product-details">
                <span class="product-catagory">${products.tags}</span>
                <h4 class="card-title">${products.name}</h4>
                <p class="card-text">
                    ${products.description}
                </p>
                <div class="product-bottom-details">
                    <div class="product-price">
                       $ ${products.price}
                    </div>
                </div>
            </div>
        </div>


  `;
  });
}

// List
function cleareverything() {
  var kill = document.getElementById('productloader');
  kill.innerHTML = ' ';

  //sort by tags function
}
function sort(category) {
  let Table = document.getElementById('productloader');
  Table.innerHTML = '';

  let arr = [];

  for (var i = 0; i < products.length; i++) {
    if (products[i].tags === category) arr.unshift(products[i]);
  }
  insertitems(arr);
}

if (document.getElementById('all') !== null) {
  document.getElementById('all').addEventListener('click', function() {
    cleareverything();
    insertitems(products);
  });

  document.getElementById('men').addEventListener('click', function() {
    cleareverything();
    sort('Men');

    //sorts by tags that match leash
  });
  document.getElementById('women').addEventListener('click', function() {
    cleareverything();
    sort('Women');
  });
}
