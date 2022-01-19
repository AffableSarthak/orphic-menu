import {
  SET_CATEGORIES,
  SET_LOADING,
  GET_STAGED_ITEMS,
  // SET_STAGED,
  SET_USERNAME,
  SET_ALL_ITEMS,
  // UPDATE_QTY,
} from "./actionType";

import SessionContext from "./context";
// import Data from "../../db/claytopia.json";
import { useReducer, useState } from "react";
import sessionReducer from "./reducer";
import { useRouter } from "next/router";
import claytopiaData from "../../db/db.json";

const sessionInfo = ({ children, db }: Iprops) => {
  const initialState: IinitialState = {
    isLoading: false,
    categories: [],
    orderedItems: [],
    stagedItems: [],
    username: "",
    items: [],
    currentItem: null,
    allItems: [
      {
        _id: "61aed50af2bdd550ad01ad0f",
        modelUrl: "",
        imageUrl: "",
        isNonVeg: true,
        rate: "320",
        subCategory: "American Breakfast",
        mainCategory: "All Day Breakfast",
        description:
          " A mouth-watering eggs stuffed with cottage cheese and salami with cheese spread served alongside with baked potatoes, hash brown and sauteed vegetables rolls don't get better than this!",
        name: "Bistro Heavenly Rolls",
        id: "BC-001",
        createdAt: "2021-12-07T03:29:14.995Z",
        updatedAt: "2021-12-10T08:47:59.517Z",
        __v: 0,
      },
    ],
  };

  // console.log({ sessionProps })
  const [state, dispatch] = useReducer(sessionReducer, initialState);
  // const [isLoading, setIsLoading] = useState<boolean>(false)
  const [gcState, setGcState] = useState<Igc[]>([]);
  const [miniGC, setminiGC] = useState<Igc[]>([]);
  const router = useRouter();

  const {
    isLoading,
    categories,
    orderedItems,
    stagedItems,
    username,
    items,
    currentItem,
    allItems,
  } = state;

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
    // console.log(val, "inside setLoading");
    await dispatch({
      type: SET_LOADING,
      payload: val,
    });
  };

  const setCurrentItem = async (item: Iitem) => {
    setLoading(true);
    dispatch({
      type: "SET_CURRENT_ITEM",
      payload: item,
    });
    setLoading(false);
  };

  const setUsername = async (username: string) => {
    setLoading(true);
    dispatch({
      type: SET_USERNAME,
      payload: username,
    });
    localStorage.setItem("username", username);
    setLoading(false);
  };

  const populateGc = async (gc: Igc[]) => {
    setLoading(true);
    // console.log("inisde populate");
    setGcState([...gc]);
    setLoading(false);
  };

  const getFilteredData = (category: string) => {
    // const data = Object.values(claytopiaData.eateries.bistro_claytopia_all);
    // return data.filter((x) => x.category === category);
    console.log(category, allItems);
    const data =
      allItems &&
      allItems.filter((item: Iitem1) => item.mainCategory === category);
    return data;
  };

  const setCategoryItems = async (categoryName: string) => {
    //call API
    setLoading(true);
    // console.log(categoryName, "data from setCategoryItems");
    //@ts-ignore
    const data: Iitem[] = getFilteredData(categoryName);
    // console.log(data, "data from setCategoryItems");

    dispatch({
      type: "SET_CATEGORY_ITEM",
      payload: data,
    });
    const sessionId = localStorage.getItem("sessionId");
    // console.log(sessionId);
    await getStagedItems(sessionId as string);
    setLoading(false);
  };

  const getStagedItems = async (sessionId: string) => {
    try {
      const sessionRef = await db.ref("sessions");
      let data;
      sessionRef.child(sessionId).on("value", (snapshot: any) => {
        data = snapshot.val().stagedItems;
        // console.log(data, "from firebase");
        if (!data) {
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

  const updateStagedItems = async (
    sessionId: string,
    stageItem: IstagedItem
  ) => {
    try {
      const sessionRef = db.ref("sessions");
      // console.log(state.stagedItems, "from stagedItms func");

      await sessionRef.child(sessionId).update(
        {
          stagedItems: [...state.stagedItems, stageItem],
        },
        (error: any) => {
          if (error) console.log(error);
          else console.log("update success full");
        }
      );
    } catch (error) {
      console.log(error);
    }
  };

  // get the data for item cust abcdrfgh
  const getCustForItem = async (item: Iitem) => {
    setLoading(true);
    // console.log(gcState, "from getCustForItem");
    // console.log(item,'from cartItemInfo')
    localStorage.setItem("currentItemName", item.itemName);
    let tempArray: any = [];
    item?.cust?.map((ic) => {
      let itemCObj = gcState.find((gc) => {
        // console.log(gc.id, typeof gc.id, ic, typeof ic);
        return gc.id == ic;
      });
      tempArray.push(itemCObj);
      // console.log(tempArray, "from abcdtexp");
    });
    setminiGC([...tempArray]);
    setLoading(false);
  };

  // console.log(miniGC, "from sttatskbcksc");

  const setStagedItem = async (item: Iitem, type: string) => {
    // setIsLoading(true)
    setLoading(true);
    switch (type) {
      case "SET_WITH_CUST": {
        // await dispatch({ type: "SET_STAGED", payload: newItem });
        // Firebase API to set Staged with call back
        let stagedItem = {
          delivered: false,
          item,
          itemId: item.itemId,
          // note: "",
          ordered: false,
          qty: 1,
          username: localStorage.getItem("username"),
          //cust
        };

        // console.log(stagedItem, "from unwanted switch");

        const sessionId = localStorage.getItem("sessionId");
        // @ts-ignore
        await updateStagedItems(sessionId as string, stagedItem);
      }

      case "SET_WITHOUT_CUST": {
        // console.log("set staged item function ", item);

        let stagedItem = {
          delivered: false,
          item,
          itemId: item.itemId,
          // note: "",
          ordered: false,
          qty: 1,
          username: localStorage.getItem("username"),
          //cust
        };

        const sessionId = localStorage.getItem("sessionId");

        // @ts-ignore
        await updateStagedItems(sessionId as string, stagedItem);
        // await dispatch({ type: SET_STAGED, payload: stagedItem });
        // api for firebase
      }
    }
    setLoading(false);
    // setIsLoading(false)
  };

  // console.log(categories)
  // console.log(username)
  // console.log(miniGC)
  // console.log(stagedItems, 'from state')

  const IncQtyForItem = async (
    itemId: string,
    sessionId: string,
    idx: number
  ) => {
    // console.log(itemId, "from INC FUN");
    try {
      let itemQty = state.stagedItems.find(
        (stagedItem: IstagedItem) => stagedItem.itemId === itemId
      );
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
          (error: any) => {
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

  const DecQtyForItem = async (
    itemId: string,
    sessionId: string,
    idx: number
  ) => {
    // console.log(itemId, "from DEC FUN");
    try {
      // console.log(state.stagedItems, "from DEC FUN");
      let itemQty = state.stagedItems.find(
        (stagedItem: IstagedItem) => stagedItem.itemId === itemId
      );
      // console.log(itemQty, "from updateQty itemQty");
      let oldQty = itemQty.qty;
      // console.log(oldQty, "from updateQty oldQty");

      const sessionRef = db.ref("sessions");

      if (oldQty === 1) {
        await sessionRef.child(sessionId).update({
          stagedItems: state.stagedItems.filter(
            (stagedItem: IstagedItem) => stagedItem.itemId !== itemId
          ),
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
            (error: any) => {
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

  // console.log(isLoading);
  const setAllItems = (data: Iitem1[]) => {
    dispatch({
      type: SET_ALL_ITEMS,
      payload: data,
    });
  };

  const setCategories = (data: string[]) => {
    // console.log(data)
    dispatch({
      type: SET_CATEGORIES,
      payload: data,
    });
  };

  return (
    <>
      <SessionContext.Provider
        value={{
          isLoading,
          setUsername,
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
          getStagedItems,
          IncQtyForItem,
          DecQtyForItem,
          allItems,
          setAllItems,
          setCategories,
        }}
      >
        {children}
      </SessionContext.Provider>
    </>
  );
};

export default sessionInfo;
