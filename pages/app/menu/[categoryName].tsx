import { useRouter } from "next/router";
import Menu from "../../../components/menu/Menu";
import { GetServerSideProps } from "next";
import Script from "next/script";
export default function MenuPage(props: { gc: Igc[] }) {
  const router = useRouter();
  console.log(router.query);
  return (
    <>
      <Script
        type="module"
        src="https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js"
      />
      <Menu
        categoryName={router.query.categoryName as string}
        bgColor={router.query.bgColor as string}
        imgUrl={router.query.imageUrl as string}
        categoryId={router.query.categoryId as string}
        gc={props.gc}
      />
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  // const { params } = context;
  // const res = await fetch(`https://...`)
  // const data = await res.json()

  // if (!data) {
  //   return {
  //     notFound: true,
  //   }
  // }
  return {
    props: {
      gc: [
        {
          id: "001",
          name: "Choose",
          type: "one",
          values: [
            {
              name: "Noodle",
              price: 0,
            },
            {
              name: "Rice",
              price: 0,
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
          id: "130",
          name: "Choose Size",
          type: "one",
          values: [
            { name: "Large", price: 30 },
            { name: "Small", price: 0 },
          ],
        },
        {
          id: "150",
          name: "Choose Size",
          type: "one",
          values: [
            {
              name: "Large",
              price: 50,
            },
            {
              name: "Small",
              price: 0,
            },
          ],
        },
        {
          id: "155",
          name: "Choose Size",
          type: "one",
          values: [
            {
              name: "Large",
              price: 55,
            },
            {
              name: "Small",
              price: 0,
            },
          ],
        },
        {
          id: "165",
          name: "Choose Size",
          type: "one",
          values: [
            {
              name: "Large",
              price: 65,
            },
            {
              name: "Small",
              price: 0,
            },
          ],
        },
        {
          id: "020",
          name: "Choose",
          type: "one",
          values: [
            {
              name: "Veg",
              price: 0,
            },
            {
              name: "Non-Veg",
              price: 20,
            },
          ],
        },
        {
          id: "030",
          name: "Choose",
          type: "one",
          values: [
            {
              name: "Veg",
              price: 0,
            },
            {
              name: "Non-Veg",
              price: 30,
            },
          ],
        },
        {
          id: "040",
          name: "Choose Size",
          type: "one",
          values: [
            {
              name: "Large(10 Inches)",
              price: 40,
            },
            {
              name: "Regular(8 Inches)",
              price: 0,
            },
          ],
        },
        {
          id: "050",
          name: "Choose Size",
          type: "one",
          values: [
            {
              name: "Large(10 Inches)",
              price: 50,
            },
            {
              name: "Regular(8 Inches)",
              price: 0,
            },
          ],
        },
        {
          id: "060",
          name: "Choose Size",
          type: "one",
          values: [
            {
              name: "Large(10 Inches)",
              price: 60,
            },
            {
              name: "Regular(8 Inches)",
              price: 0,
            },
          ],
        },
        {
          id: "070",
          name: "Choose Size",
          type: "one",
          values: [
            {
              name: "Large(10 Inches)",
              price: 70,
            },
            {
              name: "Regular(8 Inches)",
              price: 0,
            },
          ],
        },
        {
          id: "080",
          name: "Choose Size",
          type: "one",
          values: [
            {
              name: "Large(10 Inches)",
              price: 80,
            },
            {
              name: "Regular(8 Inches)",
              price: 0,
            },
          ],
        },
        {
          id: "090",
          name: "Choose Size",
          type: "one",
          values: [
            {
              name: "Large(10 Inches)",
              price: 90,
            },
            {
              name: "Regular(8 Inches)",
              price: 0,
            },
          ],
        },

        {
          id: "325",
          name: "Add On",
          type: "many",
          values: [
            {
              name: "Pepsi",
              price: 100,
            },
            {
              name: "Fries",
              price: 499,
            },
          ],
        },
      ],
    }, // will be passed to the page component as props
  };
};
