import React from "react";
import Header2 from "./Header2";

const Blog = () => {
  return (
    <div>
      <Header2>Blogs</Header2>
      <div className="mt-11 space-y-3">
        <div className="card md:w-[80%] mx-auto bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">When should you use context API?</h2>
            <p>
              Particularly in big and sophisticated applications with numerous
              components, prop drilling may become tiresome and error-prone. By
              using the Context API, you can control the state of the
              application without having to feed props across each level of the
              component tree. You may simplify your codebase and eliminate the
              need for prop digging by utilizing context to transfer data across
              components. This will make it simpler to maintain and expand your
              application over time.
            </p>
          </div>
        </div>
        <div className="card md:w-[80%] mx-auto bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title"> What is a custom hook?</h2>
            <p>
              A custom hook is a React function you create to reuse certain
              functionality across different contexts. To handle state and other
              logic, it makes use of built-in hooks like useState, useEffect,
              etc. UseMyCustomHook is an example of a custom hook name that has
              the word "use" in front of it. Custom hooks can help you organize,
              simplify, and increase the effectiveness of your code.
            </p>
          </div>
        </div>
        <div className="card md:w-[80%] mx-auto bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title"> What is useRef?</h2>
            <p>
              With the help of the useRef hook in React, you may establish a
              persistent reference to a DOM element or variable. You may use it
              to directly alter the DOM, save changeable values, or cache data
              in between views. For instance, you can use useRef to create a ref
              variable and the ref prop to connect it to an input element so
              that you may focus it or retrieve its value. By doing so, you
              establish a reference to the element that may subsequently be
              utilized in your code. A value that you wish to persist between
              component renderings may also be stored via useRef. Managing state
              that doesn't require a re-render or caching data that are hard to
              calculate can both benefit from this.
            </p>
          </div>
        </div>
        <div className="card md:w-[80%] mx-auto bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title"> What is useMemo?</h2>
            <p>
              React's useMemo utility enables speed optimization by allowing you
              to memoize function call results and only recompute them when
              their dependencies change. To put it another way, using useMemo
              allows you to save a calculation's result and only recalculate it
              when its inputs change. This can speed up your program and cut
              down on pointless computations. For instance, if you have a
              function that takes a long time to complete, you may use useMemo
              to store the results and prevent needlessly rerunning the
              function. In conclusion, useMemo is a helpful feature in React for
              speed optimization by caching the outcome of costly calculations.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
