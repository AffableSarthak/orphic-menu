import { SET_CATEGORIES, SET_LOADING, GET_STAGED_ITEMS, SET_STAGED, SET_USERNAME } from "./actionType";

import SessionContext from "./context";
// import Data from '../../db/claytopia.json'
import { useReducer, useState } from "react";
import sessionReducer from "./reducer";
import { useRouter } from "next/router";

const sessionInfo = ({ children, db }: Iprops) => {
  const initialState: IinitialState = {
    isLoading: false,
    categories: [],
    orderedItems: [],
    stagedItems: [],
    username: "",
    items: [],
    // sessionInfo: null,
  };

  // console.log({ sessionProps })
  const [state, dispatch] = useReducer(sessionReducer, initialState);
  // const [isLoading, setIsLoading] = useState<boolean>(false)
  const [gcState, setGcState] = useState<Igc[]>([]);
  const router = useRouter();

  const { isLoading, categories, orderedItems, stagedItems, username, items, sessionInfo } = state;

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

  const setLoading = (val: boolean) => {
    dispatch({
      type: SET_LOADING,
      payload: val,
    });
  };

  const populateGc = (gc: Igc[]) => {
    setGcState(gc);
  };

  const setUsername = async (username: string) => {
    // setIsLoading(true)
    setLoading(true);
    await dispatch({
      type: SET_USERNAME,
      payload: username,
    });
    await localStorage.setItem("username", username);
    // const rId = localStorage.getItem('rId')
    // setIsLoading(false)
    setLoading(false);
  };

  const getCategories = async (eataryId: string) => {
    // Call api
    // console.log(eataryId)
    // setTimeout(() => {}, 3000)
    // setIsLoading(true)
    setLoading(true);
    const data: Icategory[] = [
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
    ];

    await dispatch({
      type: SET_CATEGORIES,
      payload: data,
    });

    setLoading(false);
    // setIsLoading(false)
  };

  const setCategoryItems = async (categoryName: string) => {
    // Call API
    // setIsLoading(true)
    setLoading(true);
    const data: Iitem[] = [
      {
        bannerUrl: "",
        category: "Pasta",
        cust: ["002"],
        desc: "",
        itemId: "BC-001",
        itemName: "Bistro Mix Mushroom",
        objectUrl: "",
        price: "320",
      },
      {
        bannerUrl: "https://drive.google.com/uc?export=download&id=1jw7MKjy4PaP7zR5U3J3m3ePlyrGuSh5z",
        category: "Burgers & Combos",
        desc: "",
        itemId: "BC-002",
        itemName: "Spicy BBQ Chicken Combo",
        objectUrl: "https://drive.google.com/uc?export=download&id=1nm3rqDM1NFoL7MFNix87Ob8nTn6CgodL",
        price: "350",
      },
      {
        bannerUrl: "",
        category: "Main Course",
        cust: ["001"],
        desc: "",
        itemId: "BC-003",
        itemName: "Hosin Glazed Grilled Chicken",
        objectUrl: "",
        price: "280",
      },
      {
        bannerUrl: "https://drive.google.com/uc?export=download&id=17AFInAwDwXUOLYEQAakLzow3Ner2X7qw",
        category: "Pasta",
        cust: ["002"],
        desc: "",
        itemId: "BC-005",
        itemName: "Wild Mushroom Pasta ",
        objectUrl: "https://drive.google.com/uc?export=download&id=182Rs-oOni7C0yHd5qcfgC1iIHOYtz0kk",
        price: "295",
      },
      {
        bannerUrl: "",
        category: "Snacks",
        desc: "",
        itemId: "BC-007",
        itemName: "French Fries",
        objectUrl: "",
        price: "110",
      },
      {
        bannerUrl: "",
        category: "Soups & Salads",
        desc: "",
        itemId: "BC-008",
        itemName: "Exotic Veggies Soup",
        objectUrl: "",
        price: "200",
      },
      {
        bannerUrl: "https://drive.google.com/uc?export=download&id=1uopz02oTWLrITiDHVs9Gn8fOViVuXhQr",
        category: "Breakfast",
        desc: "",
        itemId: "BC-010",
        itemName: "Bistro Heavenly Rolls",
        objectUrl: "https://drive.google.com/uc?export=download&id=1DYZej3r0NxZ7A6IYLm_B8g_L2bBY4Mqy",
        price: "300",
      },
      {
        bannerUrl: "https://drive.google.com/uc?export=download&id=1fMxyyYdRYpXsm3u0OWnfBgCkzElHGO0E",
        category: "Soups & Salads",
        desc: "",
        itemId: "BC-011",
        itemName: "Classic Ceaser Salad",
        objectUrl: "https://drive.google.com/uc?export=download&id=15JVQk8Ysh263m89ud4_YNGl0o9ICKJFX",
        price: "220/250",
      },
      {
        bannerUrl: "https://drive.google.com/uc?export=download&id=1B4wmQm1QXc5c73EhOrRXPXaIlSJGJrtz",
        category: "Main Course",
        desc: "",
        itemId: "BC-012",
        itemName: "Herb Roasted Chicken",
        objectUrl: "https://drive.google.com/uc?export=download&id=1B4tGVggAHrQG_VaOsCeEz_zZj7hL1wPK",
        price: "330",
      },
    ];

    await dispatch({
      type: "SET_CATEGORY_ITEM",
      payload: data,
    });
    setLoading(false);
    // setIsLoading(false)
  };

  const getStagedItems = async (sessionId) => {
    try {
      const sessionRef = await db.ref("sessions");
      let data;
      sessionRef.child(sessionId).on("value", (snapshot) => {
        data = snapshot.val().stagedItems;
        console.log(data, "from firebase");
        if (data === undefined) {
          dispatch({
            type: GET_STAGED_ITEMS,
            payload: [],
          });
        } else {
          dispatch({
            type: GET_STAGED_ITEMS,
            payload: data,
          });
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  const updateStagedItems = async (sessionId, stageItem) => {
    try {
      const sessionRef = db.ref("sessions");
      console.log(state.stagedItems, "from stagedItms func");

      await sessionRef.child(sessionId).update(
        {
          stagedItems: [...state.stagedItems, stageItem],
        },
        (error) => {
          if (error) console.log(error);
          else console.log("update success full");
        }
      );
    } catch (error) {
      console.log(error);
    }
  };

  // get the data for item cust
  const getCustForItem = (item: Iitem) => {
    let itemCust: Igc[] = [];
    item.cust.map((igc) => {
      const tempCust = gcState.filter((gc) => {
        gc.id === igc;
      });
      itemCust.push(tempCust[0]);
    });

    console.log(itemCust);

    return itemCust;
  };

  const setStagedItem = async (item: Iitem, type: string) => {
    // setIsLoading(true)
    setLoading(true);
    switch (type) {
      case "SET_WITH_CUST": {
        const itemCust = getCustForItem(item);
        const newItem = {
          ...item,
          cust: itemCust,
        };
        console.log(newItem, "from setStaged newItems");

        await dispatch({ type: "SET_STAGED", payload: newItem });

        // Firebase API to set Staged with call back
      }
      case "SET_WITHOUT_CUST": {
        console.log("set staged item function ", item);

        let stagedItem = {
          delivered: false,
          item,
          itemId: item.itemId,
          note: "",
          ordered: false,
          qty: 1,
        };

        const sessionId = "-MglGB1mqNf5eF4QWPfZ";
        await updateStagedItems(sessionId, stagedItem);
        // await dispatch({ type: SET_STAGED, payload: stagedItem });
        // api for firebase
      }
    }
    setLoading(false);
    // setIsLoading(false)
  };

  // console.log(categories)
  // console.log(username)
  // console.log(gcState)
  // console.log(stagedItems, 'from state')

  const IncQtyForItem = async (itemId: string, sessionId: string, idx: number) => {
    // console.log(itemId, "from INC FUN");
    try {
      let itemQty = state.stagedItems.find((stagedItem: IstagedItem) => stagedItem.itemId === itemId);
      // console.log(itemQty, "from updateQty itemQty");
      let oldQty = itemQty.qty;
      // console.log(oldQty, "from updateQty oldQty");

      const sessionRef = db.ref("sessions");
      await sessionRef
        .child(sessionId)
        .child("stagedItems")
        .child(idx)
        .update(
          {
            qty: oldQty + 1,
          },
          (error) => {
            if (error) {
              console.log(error);
            } else {
              console.log("qty updated");
            }
          }
        );
    } catch (error) {
      console.log(error);
    }
  };

  const DecQtyForItem = async (itemId: string, sessionId: string, idx: number) => {
    // console.log(itemId, "from DEC FUN");
    try {
      // console.log(state.stagedItems, "from DEC FUN");
      let itemQty = state.stagedItems.find((stagedItem: IstagedItem) => stagedItem.itemId === itemId);
      // console.log(itemQty, "from updateQty itemQty");
      let oldQty = itemQty.qty;
      // console.log(oldQty, "from updateQty oldQty");

      const sessionRef = db.ref("sessions");

      if (oldQty === 1) {
        await sessionRef.child(sessionId).update({
          stagedItems: state.stagedItems.filter((stagedItem: IstagedItem) => stagedItem.itemId !== itemId),
        });
      } else {
        await sessionRef
          .child(sessionId)
          .child("stagedItems")
          .child(idx)
          .update(
            {
              qty: oldQty - 1,
            },
            (error) => {
              if (error) {
                console.log(error);
              } else {
                console.log("qty updated");
              }
            }
          );
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <SessionContext.Provider
        value={{
          isLoading,
          setUsername,
          getCategories,
          populateGc,
          categories,
          username,
          items,
          setCategoryItems,
          gcState,
          stagedItems,
          orderedItems,
          sessionInfo,
          setStagedItem,
          getStagedItems,
          IncQtyForItem,
          DecQtyForItem,
        }}
      >
        {children}
      </SessionContext.Provider>
    </>
  );
};

export default sessionInfo;
