import Categories from "../../../components/categories/Categories";
import { GetServerSideProps } from "next";

export default function categories(props: {
  tableId: string;
  eateryId: string;
  sessionId: string;
  categories: Icategory[];
}) {
  return (
    <>
      <Categories sessionProps={props} />
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

  /**
   * API call to get tableID eateryID sessionID /:rId (random ID)
   * API call to get Catergories for a Eatery /:eateryId
   *
   */
  return {
    props: {
      tableId: "T-070",
      eateryId: "E-001",
      sessionId: "-MglGB1mqNf5eF4QWPfZ",
      categories: [
        {
          name: "Pizza",
          src: "https://drive.google.com/uc?export=download&id=1SBzVzPJCIJJgxYxHm8HEL0jWgr_yIW10",
          bgColor: "bg-indigo-100",
        },
        {
          name: "Burgers & Combos",
          src: "https://drive.google.com/uc?export=download&id=1rHN4g_ukLioYWN_ZXsV-qhaoIz2D9xG6",
          bgColor: "bg-yellow-100",
        },
        {
          name: "Pasta",
          src: "https://drive.google.com/uc?export=download&id=1YvNz_1KAeJIgkU_0wfEMUthDu9vIjiNH",
          bgColor: "bg-red-100",
        },
        {
          name: "Main Course",
          src: "https://drive.google.com/uc?export=download&id=1j2DX3dw26Ompaw9l9jWAHPjJMm7TATPP",
          bgColor: "bg-blue-100",
        },
        {
          name: "Snacks",
          src: "https://drive.google.com/uc?export=download&id=1kBb64qpauRS_KiReJXDPxz3VMd14ZuUI",
          bgColor: "bg-gray-100",
        },
        {
          name: "Soups & Salads",
          src: "https://drive.google.com/uc?export=download&id=19xkoPqn86GhC2ebIwKxNFZ7VZJtUKxNd",
          bgColor: "bg-green-100",
        },
        {
          name: "Breakfast",
          src: "https://drive.google.com/uc?export=download&id=1THzo3FxmdwW0mih3ZkKkTN5FVYFQYTTS",
          bgColor: "bg-pink-100",
        },
        {
          name: "Starters",
          src: "https://drive.google.com/uc?export=download&id=1I2rAdwC3_gQyGRN2wsVJxiOSPMH_g1Jy",
          bgColor: "bg-indigo-100",
        },
        {
          name: "Eggs & Pancake",
          src: "https://drive.google.com/uc?export=download&id=15UN2qcs0a3_G_tVwp9QGBK6b4MPvuNKn",
          bgColor: "bg-purple-100",
        },
        {
          name: "Desserts",
          src: "https://drive.google.com/uc?export=download&id=1NyA-y5mT7Hg8JNE7fw6cQhwnzaNfp3aW",
          bgColor: "bg-red-100",
        },
        {
          name: "Sandwiches",
          src: "https://drive.google.com/uc?export=download&id=1Uhsu63D5EkQnbc6sYi5Sy3iM6Y9aHPA-",
          bgColor: "bg-green-100",
        },
        {
          name: "Beverages",
          src: "https://drive.google.com/uc?export=download&id=1teHp4RCP5bTQujv38Qd-17Bf5biJzCPi",
          bgColor: "bg-purple-100",
        },
      ],
    }, // will be passed to the page component as props
  };
};
