import SessionContext from './context'
// import Data from '../../db/claytopia.json'
import { useReducer, useEffect } from 'react'
import { SET_INITIAL_DATA } from './actionType'
import SessionReducer from './reducer'

const initialState: IinitialState = {
  isLoading: false,
  categories: [],
  orderedItems: [],
  stagedItems: [],
  username: '',
  items: [],
}

const SessionState = ({ children, db, sessionProps }: Iprops) => {
  console.log({ sessionProps })
  const [state, dispatch] = useReducer(SessionReducer, initialState)
  const { isLoading, categories, orderedItems, stagedItems, usernamem, items } =
    state

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

  return (
    <>
      <SessionContext.Provider value={{ isLoading }}>
        {children}
      </SessionContext.Provider>
    </>
  )
}

export default SessionState

//   const getModifiedData = () => {
//     const modifiedData = getData(Data);

//     dispatch({
//       type: GET_DATA,
//       payload: modifiedData,
//     });
//   };
//   const getCategories = () => {
//     const categories = new Set();
//     // console.log(state.allData, "from get c");
//     if (state.allData && state.allData.eateries)
//       state.allData.eateries.bistro_claytopia_all.map((data) => {
//         categories.add(data.value.category);
//       });
//     console.log(categories);
//   };

//   useEffect(() => {
//     console.log(state.allData);
//     getCategories();
//   }, [state.allData]);

//   useEffect(() => {
//     getModifiedData();
//   }, []);

/**
 * UseEffect
 *
 * Get server side props to get ID in the QR code => function to call the Get Initial Data
 *
 */
