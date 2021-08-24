import {
  SET_CATEGORIES,
  SET_LOADING,
  SET_STAGED,
  SET_USERNAME,
} from './actionType'

import SessionContext from './context'
// import Data from '../../db/claytopia.json'
import { useReducer, useState } from 'react'
import sessionReducer from './reducer'
import { useRouter } from 'next/router'

const SessionState = ({ children, db }: Iprops) => {
  const initialState: IinitialState = {
    isLoading: false,
    categories: [],
    orderedItems: [],
    stagedItems: [],
    username: '',
    items: [],
    currentItem: {},
  }

  // console.log({ sessionProps })
  const [state, dispatch] = useReducer(sessionReducer, initialState)
  // const [isLoading, setIsLoading] = useState<boolean>(false)
  const [gcState, setGcState] = useState<Igc[]>([])
  const [miniGC, setminiGC] = useState<Igc[]>([])
  const router = useRouter()

  const {
    isLoading,
    categories,
    orderedItems,
    stagedItems,
    username,
    items,
    currentItem,
  } = state

  /**
   *  Functions to Add
   *
   * 1) Update Staged Items on Add to cart AND update firebase
   * 2) Update Ordered Items (copy of Stage Items) on Place order AND update firebase
   * 3) Update Category after calling Category API on Continue
   * 4) Update Items after calling Items API on Category Click
   * 5) Create itemGC if cust is in Item [DO THIS IN THE COMPONENT LEVEL ITSELF] => State will send the GC state
   *
   */

  const setLoading = async (val: boolean) => {
    await dispatch({
      type: SET_LOADING,
      payload: val,
    })
  }

  const setCurrentItem = async (item: Iitem) => {
    await setLoading(true)
    await dispatch({
      type: 'SET_CURRENT_ITEM',
      payload: item,
    })
    await setLoading(false)
  }
  const setUsername = async (username: string) => {
    // setIsLoading(true)
    await setLoading(true)
    await dispatch({
      type: SET_USERNAME,
      payload: username,
    })
    await localStorage.setItem('username', username)
    // const rId = localStorage.getItem('rId')
    // setIsLoading(false)
    await setLoading(false)
  }

  const populateGc = async (gc: Igc[]) => {
    // console.log(gc)
    await setLoading(true)
    await setGcState([...gc])
    await setLoading(false)
  }

  // const getCategories = async (eataryId: string) => {
  //   // Call api
  //   // console.log(eataryId)
  //   // setTimeout(() => {}, 3000)
  //   // setIsLoading(true)
  //   await setLoading(true)
  //   const data: Icategory[] = [
  //     {
  //       name: 'Pizza',
  //       src: 'https://freesvg.org/img/Gerald-G-Fast-Food-Lunch-Dinner-FF-Menu-6.png',
  //     },
  //     {
  //       name: 'Burger',
  //       src: 'https://freesvg.org/img/Gerald-G-Fast-Food-Lunch-Dinner-FF-Menu-6.png',
  //     },
  //     {
  //       name: 'Pasta',
  //       src: 'https://freesvg.org/img/Gerald-G-Fast-Food-Lunch-Dinner-FF-Menu-6.png',
  //     },
  //   ]

  //   await dispatch({
  //     type: SET_CATEGORIES,
  //     payload: data,
  //   })

  //   await setLoading(false)
  //   // setIsLoading(false)
  // }

  const setCategoryItems = async (categoryName: string) => {
    // Call API
    // setIsLoading(true)
    await setLoading(true)
    const data: Iitem[] = [
      {
        bannerUrl:
          'https://drive.google.com/uc?export=download&id=1jw7MKjy4PaP7zR5U3J3m3ePlyrGuSh5z',
        category: 'Burgers & Combos',
        desc: '',
        itemId: 'BC-002',
        itemName: 'Spicy BBQ Chicken Combo',
        objectUrl:
          'https://drive.google.com/uc?export=download&id=1nm3rqDM1NFoL7MFNix87Ob8nTn6CgodL',
        price: '350',
      },

      {
        bannerUrl:
          'https://drive.google.com/uc?export=download&id=17AFInAwDwXUOLYEQAakLzow3Ner2X7qw',
        category: 'Pasta',
        cust: ['002', '040', '001'],
        desc: '',
        itemId: 'BC-005',
        itemName: 'Wild Mushroom Pasta ',
        objectUrl:
          'https://drive.google.com/uc?export=download&id=182Rs-oOni7C0yHd5qcfgC1iIHOYtz0kk',
        price: '295',
      },
      {
        bannerUrl:
          'https://drive.google.com/uc?export=download&id=1uopz02oTWLrITiDHVs9Gn8fOViVuXhQr',
        category: 'Breakfast',
        desc: '',
        itemId: 'BC-010',
        itemName: 'Bistro Heavenly Rolls',
        objectUrl:
          'https://drive.google.com/uc?export=download&id=1DYZej3r0NxZ7A6IYLm_B8g_L2bBY4Mqy',
        price: '300',
      },
      {
        bannerUrl:
          'https://drive.google.com/uc?export=download&id=1fMxyyYdRYpXsm3u0OWnfBgCkzElHGO0E',
        category: 'Soups & Salads',
        desc: '',
        itemId: 'BC-011',
        itemName: 'Classic Ceaser Salad',
        objectUrl:
          'https://drive.google.com/uc?export=download&id=15JVQk8Ysh263m89ud4_YNGl0o9ICKJFX',
        price: '220/250',
      },
      {
        bannerUrl:
          'https://drive.google.com/uc?export=download&id=1B4wmQm1QXc5c73EhOrRXPXaIlSJGJrtz',
        category: 'Main Course',
        desc: '',
        itemId: 'BC-012',
        itemName: 'Herb Roasted Chicken',
        objectUrl:
          'https://drive.google.com/uc?export=download&id=1B4tGVggAHrQG_VaOsCeEz_zZj7hL1wPK',
        price: '330',
      },
    ]

    await dispatch({
      type: 'SET_CATEGORY_ITEM',
      payload: data,
    })
    await setLoading(false)
    // setIsLoading(false)
  }

  // get the data for item cust
  const getCustForItem = async (item: Iitem) => {
    console.log({ item, gcState })
    localStorage.setItem('currentItemName', item.itemName)
    let tempArray = []
    item.cust.map((ic) => {
      let itemCObj = gcState.find((gc) => {
        console.log(gc.id, typeof gc.id, ic, typeof ic)
        return gc.id === ic
      })
      tempArray.push(itemCObj)
    })
    setminiGC([...tempArray])
  }

  const setStagedItem = async (item: Iitem, type: string) => {
    // setIsLoading(true)
    await setLoading(true)
    switch (type) {
      case 'SET_WITH_CUST': {
        const itemCust = getCustForItem(item)
        const newItem = {
          ...item,
          cust: itemCust,
        }
        console.log(newItem, 'from setStaged newItems')

        await dispatch({ type: 'SET_STAGED', payload: newItem })

        // Firebase API to set Staged with call back
      }
      case 'SET_WITHOUT_CUST': {
        console.log('set staged item function ', item)

        /**
         *
         *
         * stagedItem = [
         *
         * {
         * item: {item},
         * count : 2,
         * username
         * }
         * ]
         */

        let stageItem = {
          item,
          qty: 1,
          username,
          delivered: false,
        }
        await dispatch({ type: SET_STAGED, payload: stageItem })
        // api for firebase
        db.ref('sessions')
          .child('-MfXwG_o6gXl_fHuY0V8')
          .get()
          .then((snapshot) => {
            if (snapshot.exists()) {
              console.log(snapshot.val())
            } else {
              console.log('No data available')
            }
          })
          .catch((error) => {
            console.error(error)
          })
      }
    }
    await setLoading(false)
    // setIsLoading(false)
  }

  // console.log(categories)
  // console.log(username)
  // console.log(miniGC)
  // console.log(stagedItems, 'from state')

  return (
    <>
      <SessionContext.Provider
        value={{
          isLoading,
          setUsername,
          // getCategories,
          populateGc,
          categories,
          username,
          items,
          setCategoryItems,
          gcState,
          stagedItems,
          orderedItems,
          setStagedItem,
          getCustForItem,
          miniGC,
          currentItem,
          setCurrentItem,
        }}
      >
        {children}
      </SessionContext.Provider>
    </>
  )
}

export default SessionState
