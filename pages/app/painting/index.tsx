import React from "react";
import BackButton from "../../../components/common/BackButton";

const Painting = () => {
  const data = [
    {
      itemName: "Paint 1",
      price: "320",
      imageUrl:
        "https://images.unsplash.com/photo-1544614471-98428d9c7e04?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      availableColors: [
        "bg-red-300",
        "bg-indigo-300",
        "bg-purple-300",
        "bg-yellow-300",
      ],
    },
    {
      itemName: "Paint 2",
      price: "320",
      imageUrl:
        "https://images.unsplash.com/photo-1544614471-98428d9c7e04?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      availableColors: [
        "bg-red-300",
        "bg-indigo-300",
        "bg-purple-300",
        "bg-yellow-300",
      ],
    },
  ];

  return (
    <>
      <section className="relative min-w-full min-h-screen pb-4">
        <div
          id="menuHeaderConatiner"
          className={`flex flex-row justify-between items-center min-w-full h-28 px-4 bg-purple-200 bg-cover bg-no-repeat object-center text-white`}
        >
          <div id="menuHeaderBack" className="flex flex-row items-center">
            {typeof window !== "undefined" && <BackButton />}

            <h3 className="ml-2 text-lg font-bold text-black mr-3">
              Create your Masterpiece
            </h3>
            {/* <img src={imgUrl} className="w-[50px] h-[50px] ml-4" /> */}
          </div>

          {/* <CartButton /> */}
        </div>

        {/* <CommunityNotification /> */}

        <div className="mt-2 py-2">
          <h2 className="text-lg font-black px-4">Choose your Masterpiece</h2>
        </div>
        <div className={`flex flex-col overflow-x-auto px-2 items-center`}>
          {data.map((item, i) => (
            <div
              key={i}
              className={`flex flex-row justify-between w-full my-2 mx-2 p-2  text-md font-medium text-left bg-purple-50 rounded-2xl`}
            >
              <div className="flex flex-col flex-six">
                <div className="flex ml-2 mt-1 text-dark text-base font-bold">
                  <h4>
                    {/* <span className="pr-2">{labelValue(item.label)}</span> */}
                    {item.itemName}
                  </h4>
                </div>
                <div className="flex ml-2 text-sm tracking-tighter font-normal font-description text-dark ">
                  <p>Available colors</p>
                </div>
                <div className="flex ml-2 text-base font-black text-dark">
                  {item.availableColors.map((color, i) => (
                    <div key={i} className={`h-4 w-4 m-1 ${color}`}></div>
                  ))}
                </div>
                <div className="flex ml-2 mt-1 text-base font-black text-dark">
                  <h3>
                    ₹{item.price}
                    {/* ({item.itemId}){" "} */}
                  </h3>
                </div>
              </div>
              <div className="flex px-1">
                <img src={item.imageUrl} className="rounded-2xl" />
              </div>
            </div>
          ))}
        </div>

        {/* {items.length !== 0 ? (
          <>
            {categoryName === "Beverages" ||
            categoryName === "Burgers & Combos" ||
            categoryName === "Main Course" ||
            categoryName === "Soups & Salads" ||
            categoryName === "Snacks" ||
            categoryName === "Starters" ||
            categoryName === "Sandwiches" ? (
              <SubMenu
                items={[...items]}
                stagedItems={stagedItems}
                bgColor={bgColor}
                imgUrl={imgUrl}
              />
            ) : (
              <>
                <div className="mt-6 p-4">
                  <h2 className="text-xl font-black px-4">{categoryName}</h2>
                </div>
                <div
                  className={`flex flex-col overflow-x-auto px-2 items-center`}
                >
                  {items.map((item) => {
                    return (
                      <DisclosureCard
                        item={item}
                        stagedItems={stagedItems}
                        bgColor={bgColor}
                        imgUrl={imgUrl}
                        key={item.itemId}
                      />
                    );
                  })}
                </div>
              </>
            )}
          </>
        ) : (
          <>
            <h1 className="mt-16 text-center bg-whiteColor py-2 mx-2 border shadow-lg rounded-xl">
              No Items for this category...
            </h1>
          </>
        )} */}
      </section>
    </>
  );
};

export default Painting;
