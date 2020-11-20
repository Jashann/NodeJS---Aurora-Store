const products = {
  category: [
    {
      name: "Hats",
      img: "https://i.ibb.co/7J3styf/hat.jpg",
    },
    {
      name: "shoes",
      img: "https://i.ibb.co/BqbDzCQ/shoe.jpg",
    },
    {
      name: "Women",
      img: " https://i.ibb.co/2YtD6Fy/women-clothing.jpg",
    },
    {
      name: "Men",
      img: "https://i.ibb.co/NFcPrKM/men-clothing.jpg",
    },
  ],
  products: {
    hats: [
      {
        id: "hat1",
        name: "Puma Hat",
        price: "$19",
        img: `https://i.ibb.co/4W6Xdqs/4-min.jpg`,
      },
      {
        id: "hat2",
        name: "Nike Hat",
        price: "$29",
        img: "https://i.ibb.co/Ws857m5/2-min.jpg",
      },
      {
        id: "hat3",
        name: "Addidas Hat",
        price: "$25",
        img: "https://i.ibb.co/4YJW3PX/1-min.jpg",
      },
      {
        id: "hat4",
        name: "Addidas Premiun Hat",
        price: "$35",
        img: "https://i.ibb.co/h2FZ8mw/3-min.jpg",
      },
      {
        id: "hat5",
        name: "Limited Edition",
        price: "$50",
        img: "https://i.ibb.co/K2n1Pf9/5.jpg",
      },
      {
        id: "hat6",
        name: "Editor's Choice",
        price: "$49",
        img: "https://i.ibb.co/kyqkNf3/6.jpg",
      },
      {
        id: "hat7",
        name: "Sunshine",
        price: "$42",
        img: "https://i.ibb.co/f9nhDbz/7.jpg",
      },
      {
        id: "hat8",
        name: "Premiun Guard",
        price: "$39",
        img: "https://i.ibb.co/tcLFRpT/8.jpg",
      },
      {
        id: "hat9",
        name: "Sun Protectiom",
        price: "$35",
        img: "https://i.ibb.co/5W1qwBs/9.jpg",
      },
    ],

    women: [
      {
        id: "cloth1",
        name: "Long Black Coat",
        price: "$89",
        img: "https://i.ibb.co/0J4RF0k/long-black-coat.jpg",
      },
      {
        id: "cloth2",
        name: "Stylish Dress",
        price: "$109",
        img: "https://i.ibb.co/QfFBL8W/stylish-dress.jpg",
      },
      {
        id: "cloth3",
        name: "Black Leather Jacket",
        price: "$99",
        img: "https://i.ibb.co/TmQ86W7/black-leather.jpg",
      },

      {
        id: "cloth4",
        name: "Black Hoodie",
        price: "$69",
        img: "https://i.ibb.co/pbkCYJG/black-hoodie.jpg",
      },
      {
        id: "cloth5",
        name: "Blue Denim Jacket",
        price: "$79",
        img: " https://i.ibb.co/Q6VRp8S/blue-denim-jacket.jpg",
      },
      {
        id: "cloth6",
        name: "White Knit Sweater",
        price: "$89",
        img: "https://i.ibb.co/8rXP8MZ/white-knit-sweater.jpg",
      },
      {
        id: "cloth7",
        name: "Brown Coat",
        price: "$81",
        img: " https://i.ibb.co/d4mFNJp/brown-coat.jpg",
      },
      {
        id: "cloth8",
        name: "Limited Edition Sweater",
        price: "$75",
        img: "https://i.ibb.co/x8qSLg2/sweater.jpg",
      },
    ],
    shoes: [
      {
        id: "shoe1",
        name: "Nike Limited Edition",
        price: "$89",
        img: "https://i.ibb.co/gDY837v/nike-1.jpg",
      },
      {
        id: "shoe2",
        name: "Special Limited Edition",
        price: "$79",
        img: "https://i.ibb.co/khL16bF/1.jpg",
      },
      {
        id: "shoe3",
        name: "X Limited Edition",
        price: "$49",
        img: "https://i.ibb.co/4jSGT1W/3.jpg",
      },
      {
        id: "shoe4",
        name: "Nike Premium ",
        price: "$59",
        img: "https://i.ibb.co/zmDnL0V/nike-2.jpg",
      },

      {
        id: "shoe5",
        name: "All Star Comfy",
        price: "$99",
        img: "https://i.ibb.co/LnnhgS6/all-star.jpg",
      },
      {
        id: "shoe6",
        name: "Comfy Leather Shoe",
        price: "$87",
        img: "https://i.ibb.co/L58RGTQ/leather.jpg",
      },
      {
        id: "shoe7",
        name: "Nike Comfy",
        price: "$59",
        img: "https://i.ibb.co/dWZmY8t/nike-3.jpg",
      },
    ],

    men: [
      {
        id: "men1",
        name: "Black Jacket",
        price: "$89",
        img: "https://i.ibb.co/RhGNkDV/black-jacket.jpg",
      },
      {
        id: "men2",
        name: "Black Leather Jacket",
        price: "$99",
        img: "https://i.ibb.co/T26f0mV/black-leather-jacket.jpg",
      },
      {
        id: "men3",
        name: "Denim Jacket",
        price: "$69",
        img: "https://i.ibb.co/xX0gdt2/denim-jacket.jpg",
      },

      {
        id: "men4",
        name: "Long Black Blazer",
        price: "$99",
        img: "https://i.ibb.co/xJ6KYDJ/long-black-blazer.jpg",
      },
      {
        id: "men5",
        name: "Long Coat",
        price: "$89",
        img: "https://i.ibb.co/rxtPFzy/long-coat.jpg",
      },
      {
        id: "men6",
        name: "Wool Jacket",
        price: "$119",
        img: "https://i.ibb.co/vk2rcm7/wool-jacket.jpg",
      },
      {
        id: "men7",
        name: "White Hoodie",
        price: "$59",
        img: "https://i.ibb.co/vm3SQhD/white-hoodie.jpg",
      },

      {
        id: "men8",
        name: "White Crew T-shirt",
        price: "$25",
        img: "https://i.ibb.co/0Gr3Dfn/white-crew-neck-t-sh-r-X3iy.jpg",
      },
      {
        id: "men9",
        name: "Outcast T-shirt",
        price: "$19",
        img: "https://i.ibb.co/qxZWSSk/outcast-tshirt.jpg",
      },
    ],
  }, //End of products
};

export default products;
