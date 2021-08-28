import Categories from "../../../components/categories/Categories";
import { GetServerSideProps } from "next";

export default function categories(props) {
  return (
    <>
      <Categories sessionProps={props} />
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { params } = context;
  // const res = await fetch(`https://...`)
  // const data = await res.json()

  // if (!data) {
  //   return {
  //     notFound: true,
  //   }
  // }
  return {
    props: {
      tableId: "T-070",
      eateryId: "E-001",
      sessionId: "-MglGB1mqNf5eF4QWPfZ",

      categories: [
        {
          name: "Pizza",
          src: "https://freesvg.org/img/Gerald-G-Fast-Food-Lunch-Dinner-FF-Menu-6.png",
        },
        {
          name: "Burger & Combos",
          src: "https://freesvg.org/img/Gerald-G-Fast-Food-Lunch-Dinner-FF-Menu-6.png",
        },
        {
          name: "Pasta",
          src: "https://freesvg.org/img/Gerald-G-Fast-Food-Lunch-Dinner-FF-Menu-6.png",
        },
        {
          name: "Main Course",
          src: "https://freesvg.org/img/Gerald-G-Fast-Food-Lunch-Dinner-FF-Menu-6.png",
        },
        {
          name: "Snacks",
          src: "https://freesvg.org/img/Gerald-G-Fast-Food-Lunch-Dinner-FF-Menu-6.png",
        },
        {
          name: "Soups & Salads",
          src: "https://freesvg.org/img/Gerald-G-Fast-Food-Lunch-Dinner-FF-Menu-6.png",
        },
        {
          name: "Breakfast",
          src: "https://freesvg.org/img/Gerald-G-Fast-Food-Lunch-Dinner-FF-Menu-6.png",
        },
        {
          name: "Starters",
          src: "https://freesvg.org/img/Gerald-G-Fast-Food-Lunch-Dinner-FF-Menu-6.png",
        },
        {
          name: "Eggs & Pancake",
          src: "https://freesvg.org/img/Gerald-G-Fast-Food-Lunch-Dinner-FF-Menu-6.png",
        },
        {
          name: "Desserts",
          src: "https://freesvg.org/img/Gerald-G-Fast-Food-Lunch-Dinner-FF-Menu-6.png",
        },
        {
          name: "Sandwiches",
          src: "https://freesvg.org/img/Gerald-G-Fast-Food-Lunch-Dinner-FF-Menu-6.png",
        },
        {
          name: "Beverages",
          src: "https://freesvg.org/img/Gerald-G-Fast-Food-Lunch-Dinner-FF-Menu-6.png",
        },
      ],
    }, // will be passed to the page component as props
  };
};
