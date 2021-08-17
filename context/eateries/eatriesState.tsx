import EatriesContext from "./eatriesContext";
import Data from "../../db/claytopia.json";
import { useReducer, useEffect } from "react";
import eatriesReducer from "./eatriesReducer";
import { GET_DATA } from "./eatriesActionType";

const initialState = {
  isLoading: false,
  allData: {},
};

const getData = (data) => {
  const newEateries = Object.entries(data.eateries.bistro_claytopia_all).map((data) => {
    return { name: data[0], value: data[1] };
  });

  const newGC = Object.entries(data.gc).map((data) => {
    return { name: data[0], value: data[1] };
  });

  const modifiedData = {
    eateries: {
      bistro_claytopia_all: newEateries,
    },
    gc: newGC,
  };
  return modifiedData;
};

const EatriesState = ({ children }) => {
  const [state, dispatch] = useReducer(eatriesReducer, initialState);
  const getModifiedData = () => {
    const modifiedData = getData(Data);

    dispatch({
      type: GET_DATA,
      payload: modifiedData,
    });
  };
  const getCategories = () => {
    const categories = new Set();
    // console.log(state.allData, "from get c");
    if (state.allData && state.allData.eateries)
      state.allData.eateries.bistro_claytopia_all.map((data) => {
        categories.add(data.value.category);
      });
    console.log(categories);
  };

  useEffect(() => {
    console.log(state.allData);
    getCategories();
  }, [state.allData]);

  useEffect(() => {
    getModifiedData();
  }, []);
  return (
    <>
      <EatriesContext.Provider value={{ isLoading: state.isLoading, allData: state.allData }}>
        {children}
      </EatriesContext.Provider>
    </>
  );
};

export default EatriesState;
