import Categories from '../../../components/categories/Categories'
import { GetServerSideProps } from 'next'

export default function categories(props: {
  tableId: string
  eateryId: string
  gc: Igc[]
}) {
  return (
    <>
      <Categories sessionProps={props} />
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { params } = context
  // const res = await fetch(`https://...`)
  // const data = await res.json()

  // if (!data) {
  //   return {
  //     notFound: true,
  //   }
  // }
  return {
    props: {
      tableId: 'T-070',
      eateryId: 'E-001',
      sessionId: '123',
      gc: [
        {
          id: '001',
          name: 'Choose',
          type: 'one',
          values: [
            {
              name: 'Penne',
              price: 1010,
            },
          ],
        },
      ],
      categories: [
        {
          name: 'Pizza',
          src: 'https://freesvg.org/img/Gerald-G-Fast-Food-Lunch-Dinner-FF-Menu-6.png',
        },
        {
          name: 'Burger',
          src: 'https://freesvg.org/img/Gerald-G-Fast-Food-Lunch-Dinner-FF-Menu-6.png',
        },
        {
          name: 'Pasta',
          src: 'https://freesvg.org/img/Gerald-G-Fast-Food-Lunch-Dinner-FF-Menu-6.png',
        },
      ],
    }, // will be passed to the page component as props
  }
}
