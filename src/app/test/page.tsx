"use client";
import { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

type Item = {
  id: number;
  name: string;
};

const items: Item[] = [
  { id: 1, name: "Item 1" },
  { id: 2, name: "Item 2" },
  { id: 3, name: "Item 3" },
  { id: 4, name: "Item 4" },
  { id: 5, name: "Item 5" },
  { id: 1, name: "Item 1" },
  { id: 2, name: "Item 2" },
  { id: 3, name: "Item 3" },
  { id: 4, name: "Item 4" },
  { id: 5, name: "Item 5" },
  { id: 1, name: "Item 1" },
  { id: 2, name: "Item 2" },
  { id: 3, name: "Item 3" },
  { id: 4, name: "Item 4" },
  { id: 5, name: "Item 5" },
  { id: 1, name: "Item 1" },
  { id: 2, name: "Item 2" },
  { id: 3, name: "Item 3" },
  { id: 4, name: "Item 4" },
  { id: 5, name: "Item 5" },
  { id: 1, name: "Item 1" },
  { id: 2, name: "Item 2" },
  { id: 3, name: "Item 3" },
  { id: 4, name: "Item 4" },
  { id: 5, name: "Item 5" },
];

const App = () => {
  const [hasMore, setHasMore] = useState(true);
  const [currentItems, setCurrentItems] = useState<Item[]>(items.slice(0, 6));

  const fetchMoreData = () => {
    if (currentItems.length >= items.length) {
      setHasMore(false);
      return;
    }
    setTimeout(() => {
      const nextItems = items.slice(
        currentItems.length,
        currentItems.length + 6
      );
      setCurrentItems((prevItems) => [...prevItems, ...nextItems]);
    }, 1000);
  };

  return (
    <div>
      <InfiniteScroll
        dataLength={currentItems.length}
        next={fetchMoreData}
        hasMore={hasMore}
        loader={<h4>Loading...</h4>}
      >
        {currentItems.map((item) => (
          <div key={item.id}>
            <h2>{item.name}</h2>
          </div>
        ))}
      </InfiniteScroll>
      <button onClick={fetchMoreData}>Load more</button>
    </div>
  );
};

export default App;
