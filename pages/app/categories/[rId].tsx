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
      sessionId: "-Mhn1ub6UEGjrGxxtEF1",
      gc: [
        {
          id: "001",
          name: "Choose Size",
          type: "one",
          values: [
            {
              name: "Small",
              price: 20,
            },
            {
              name: "Large",
              price: 40,
            },
          ],
        },
        {
          id: "002",
          name: "Choose Pasta Type",
          type: "one",
          values: [
            {
              name: "Penne",
              price: 0,
            },
            {
              name: "Spaghetti",
              price: 0,
            },
          ],
        },
        {
          id: "040",
          name: "Add On",
          type: "many",
          values: [
            {
              name: "Pepsi",
              price: 50,
            },
            {
              name: "Brownie",
              price: 60,
            },
          ],
        },
      ],
      categories: [
        {
          name: "Pizza",
          src: "https://freesvg.org/img/Gerald-G-Fast-Food-Lunch-Dinner-FF-Menu-6.png",
        },
        {
          name: "Burger",
          src: "https://freesvg.org/img/Gerald-G-Fast-Food-Lunch-Dinner-FF-Menu-6.png",
        },
        {
          name: "Pasta",
          src: "https://freesvg.org/img/Gerald-G-Fast-Food-Lunch-Dinner-FF-Menu-6.png",
        },
      ],
    }, // will be passed to the page component as props
  };
};
