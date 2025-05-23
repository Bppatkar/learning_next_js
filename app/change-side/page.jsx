// import React from "react";

// const page = () => {
//   return (
//     <div>
//       <h3>
//         this is a server side component we change it from server to client
//       </h3>
//       <p>by using 'use client;' on the top</p>
//     </div>
//   );
// };

// export default page;

//? now we can use any hooks and state management here

"use client";
import React, { useState } from "react";

const page = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h3>this is a client side component , here is counter value {count}</h3>
      <button onClick={() => setCount(count + 1)}>Inc</button>
      <button onClick={() => setCount(count > 0 ? count - 1 : 0)}>Dec</button>
    </div>
  );
};

export default page;
