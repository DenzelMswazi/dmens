//I am changing the image links from firebase to amazon, firebase has issues with these direct links. Please remember to add the amazon link(that will show up at the error) instead of firebase at the cofig for it to work out.

import { ImageResponse } from "next/server";
import { comment } from "postcss";
import { GiBrandyBottle } from "react-icons/gi";
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
    {
        id: "649d775128b6744f0f497040",
        name: "Manchester City 2024/25 Home Jersey",
        description: "",
        price: 2000,
        brand: "puma",
        category: "Jersey",
        inStock: true,
        images: [
            {
            color: "Blue",
            colorCode: "#0000FF",
            image: 
              "/manchester-city-24-25-home.jpg"
            },
        ],
        reviews: [
          {
            id: "64a65a6158b470c6e06959ee",
            userId: "6475af156bad4917456e6e1e",
            productId: "649d775128b6744f0f497040",
            rating: 4,
            comment: "I love the new jersey, Great quality and fits perfectly.",
            createdDate: "2024-09-01T00:00:00Z",
            user: {
              id: "6475af156bad4917456e6e1e",
              name: "Denzel Mswazi",
              email: "example@email.com",
            },
          }
        ],
    },
    {
        id: "64a4ebe300900d44bb50628a",
        name: "Liverpool 2024-25 Home Jersey",
        description: " Inspired by Rome 84, Nike officially launched the Liverpool 24-25 home shirt with a unique YNWA pattern.",
        price: 2000,
        brand: "Nike",
        category: "Jersey",
        inStock: true,
        images: [
            {
            color: "Red",
            colorCode: "#FF0000",
            image: 
              "/liverpool-home.jpg"
            },
        ],
        reviews: [
          {
            id: "64a65a6158b470c6e06959ee",
            userId: "6475af156bad4917456e6e1e",
            productId: "64a4ebe300900d44bb50628a",
            rating: 4,
            comment: "I love the new jersey, Great quality and fits perfectly.",
            createdDate: "2024-09-01T00:00:00Z",
            user: {
              id: "6475af156bad4917456e6e1e",
              name: "Denzel Mswazi",
              email: "example@gmail.com",
              emailVerified: true,
              image: "",
              hashedPassword: "null",
              createdAt: "2024-09-01T00:00:00Z",
              updatedAt: "2024-09-01T00:00:00Z",
              role: "user",
            },

          },
        ],
    },
    {
      id: "64a4e9e77e7299078334019f",
      name: "Cadiz 2024-25 Home Jersey",
      description: "The Cadiz 24-25 home kit was officially unveiled today. It is made by Adidas and will be worn in the 2024-2025 La Liga.",
      price: 2000,
      brand: "Adidas",
      category: "Jersey",
      inStock: true,
      images: [
          {
          color: "Yellow",
          colorCode: "#FFFF00",
          image: 
            "/cadiz-24-25-home.jpg"
          },
      ],
      reviews: [
        {
          id: "6499a110efe4e4de451c7edc",
          userId: "6475af156bad4917456e6e1e",
          productId: "648437b38c44d52b9542e340",
          rating: 5,
          comment: "I love the new jersey, Great quality and fits perfectly.",
          createdDate: "2024-09-01T00:00:00Z",
          user: {
            id: "6475af156bad4917456e6e1e",
            name: "Denzel Mswazi",
            email: "example@gmail.com",
            emailVerified: true,
            image: "",
            hashedPassword: "null",
            createdAt: "2024-09-01T00:00:00Z",
            updatedAt: "2024-09-01T00:00:00Z",
            role: "user",
          },

        },
      ],
  },
  {
    id: "64a4e9e77e7299078334019f",
    name: "England Euros 2024 Home Jersey",
    description: "The Nike England Euro 2024 home shirt is a heavy change to the previous Nike England home shirts. The Nike England 2024 football shirt combines the country's classic white with a dark navy, plus maroon/light red detailing,Nike use a specially constructed collar, which is a combination of a classic v-collar with a Polo collar - it's a fake v Polo collar,The sleeve cuffs of the Nike England 2024 home kit come with sleek navy-blue-light red/maroon stripe detailing.",
    price: 2000,
    brand: "Nike",
    category: "Jersey",
    inStock: true,
    images: [
        {
        color: "White",
        colorCode: "#FFFFFF",
        image: 
          "/england-2024.jpg"
        },
    ],
    reviews: [
      {
        id: "6499a110efe4e4de451c7edc",
        userId: "6475af156bad4917456e6e1e",
        productId: "648437b38c44d52b9542e340",
        rating: 4,
        comment: "It was delivered on time. I love the new jersey, Great quality and fits perfectly.",
        createdDate: "2024-09-01T00:00:00Z",
        user: {
          id: "6475af156bad4917456e6e1e",
          name: "Wycliffe Mugo",
          email: "example@email.com",
        },
      },
    ],
  },
];