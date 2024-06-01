//I am changing the image links from firebase to amazon, firebase has issues with these direct links. Please remember to add the amazon link(that will show up at the error) instead of firebase at the cofig for it to work out.

import { ImageResponse } from "next/server";
import { MdDescription } from "react-icons/md";

export const products = [
    {
      id: "64a654593e91b8e73a351e9b",
      name: "Manchester United 2024/25 Home Jersey",
      description: "We get the first detailed look at the authentic version of the Manchester United 24-25 home kit today. It is made by Adidas and will be worn in the 2024-2025 Premier League.",
      price: 2000,
      brand: "Adidas",
      category: "Jersey",
      inStock: true,
      images: [
        {
          color: "Red",
          colorCode: "#FF0000",
          image:
            "/Manchester_United_24-25_Home.jpg",
        },
        {
          color: "Red",
          colorCode: "#FF0000",
          image:
            "/Manchester_United_24-25_Home_Kit.jpg",
        },
      ],
      reviews: [],
    },
    {
        id: "64a4ebe300900d44bb50628a",
        name: "Arsenal 2024/25 Home Jersey",
        description: "",
        price: 2000,
        brand: "Adidas",
        category: "Jersey",
        inStock: true,
        images: [
            {
            color: "Red",
            colorCode: "#FF0000",
            image:
                 "/Arsenal.jpg",
            },
        ],
        reviews: [],
    },
];