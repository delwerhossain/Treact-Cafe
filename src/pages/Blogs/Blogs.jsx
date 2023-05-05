import { PDFDownloadLink } from "@react-pdf/renderer";
import React, { useEffect, useState } from "react";
import PDFFile from "../../Components/PDFFile/PDFFile";
import Loading from "../../Components/Loading/Loading";

const Blogs = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (loading) {
      setTimeout(() => {
        setLoading(false);
      }, 300);
    }
  }, []);

  return loading ? (
    <div className="grid justify-center items-center">
      <Loading />
    </div>
  ) : (
    <div className=" my-8 relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <svg
          className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="e813992c-7d03-4cc4-a2bd-151760b470a0"
              width={200}
              height={200}
              x="50%"
              y={-1}
              patternUnits="userSpaceOnUse"
            >
              <path d="M100 200V.5M.5 .5H200" fill="none" />
            </pattern>
          </defs>
          <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
            <path
              d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
              strokeWidth={0}
            />
          </svg>
          <rect
            width="100%"
            height="100%"
            strokeWidth={0}
            fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)"
          />
        </svg>
      </div>

      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-6xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              <PDFDownloadLink document={<PDFFile />} filename="FORM">
                {({ loading }) =>
                  loading ? (
                    <button className="btn ">Loading Document...</button>
                  ) : (
                    <button className="btn btn-primary mb-3">pdf Download</button>
                  )
                }
              </PDFDownloadLink>
              {/* <PDFFile /> */}
              <p className="text-base font-semibold leading-7 bg-indigo-50 w-4/5 rounded-lg px-4 text-indigo-600">
                Questions & Answers Part
              </p>
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                A better workflow
              </h1>
              <p className="mt-6 my-3 md:text-3xl text-xl font-bold leading-8 text-gray-700">
                Uses Of{" "}
                <span className="text-blue-500 bg-blue-100 rounded-lg px-3">
                  react
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
          <img
            className="w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
            src="https://shorturl.at/egjDT"
            alt=""
          />
        </div>
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-5xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
              <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">
                Tell us the differents between uncontrolled and controlled
                components??
              </h2>
              <p className="mt-6">
                {" "}
                <span className="bg-blue-50 p-2 block text-xl font-bold rounded-lg w-3/5">
                  Controlled Components
                </span>
                Controlled components are those components that are fully
                controlled by React. This means that React manages all aspects
                of the component's state and behavior, events, and rendering. In
                other words, the component's state is stored in React's state
                and updated using the setState() method. The data flows from the
                parent component to the child component via props..
              </p>
              <p className="mt-6">
                {" "}
                <span className="bg-blue-50 p-2 block text-xl font-bold rounded-lg w-3/5">
                  UnControlled Components
                </span>
                Uncontrolled components, on the other hand, are those components
                that are not fully controlled by React. This means that React
                does not manage all aspects of the component's state and
                behavior, and some of its behavior is left up to the browser
              </p>
              <img
                className=" my-3 rounded-lg"
                src="https://i.ibb.co/BKRSVGs/Control-Uncontrolled-Components-Web.webp"
                alt=""
              />
              <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">
                How to validate React props Using proptypes ??
              </h2>
              <p className="mt-6 bg-green-100 rounded-lg p-6">
                <ul className="list-decimal hover:list-disc">
                  <p className="">
                    <span className="font-bold"> React Props Validation :</span>{" "}
                    In React, you can use the PropTypes library to validate the
                    props that are passed to a component. PropTypes is a library
                    that allows you to specify the type and shape of the props
                    that a component should receive. It's a good practice to
                    validate your props because it helps catch errors early and
                    makes your code more maintainable.Here's an example of how
                    to use PropTypes to validate a comp.
                  </p>
                </ul>
                <img
                  className=" my-3 rounded-lg"
                  src="https://i.ibb.co/XjXnvhd/miniature-comprendre-le-state-notext-1-1000x598.png"
                  alt=""
                />
              </p>
              <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">
                Tell Us the difference between Node.js and Express.js ??
              </h2>
              <p className="mt-6">
                <span className="text-2xl font-bold mr-2">Node Js :</span>{" "}
                Node.js is a runtime environment for executing JavaScript code
                outside of a web browser. It is built on the V8 JavaScript
                engine and provides a way to run JavaScript on the server-side.
                Node.js provides many built-in modules, such as http, fs, and
                path, which allow developers to build server-side applications
                that can perform tasks like serving web pages, handling file
                uploads, and interacting with databases..
              </p>
              <p className="mt-6">
                <span className="text-2xl font-bold mr-2">Express Js :</span>{" "}
                Express.js, on the other hand, is a web application framework
                built on top of Node.js. It provides a set of abstractions for
                building web applications, such as middleware for handling HTTP
                requests and responses, routing for mapping URLs to functions,
                and templating engines for rendering HTML pages. Express.js
                makes it easier to build web applications in Node.js by
                providing a set of useful features and abstractions.
              </p>
              <img
                className=" my-3 rounded-lg"
                src="https://i.ibb.co/GCbJzQ6/Express-JS-vs-Node-JS-Why-its-Time-to-Migrate-1.png"
                alt=""
              />
              <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">
                What is custom hook ?? And Why will You create a custom hook ?
              </h2>
              <p className="mt-6">
                <span className="bg-blue-50 p-2 block text-xl font-bold rounded-lg w-3/5 ">
                  Node Js :
                </span>{" "}
                In React, a custom hook is a JavaScript function that allows you
                to reuse logic across multiple components. Custom hooks enable
                you to extract stateful logic from components so that it can be
                reused in other components. Custom hooks follow the naming
                convention of starting with the word "use"..
              </p>
              <img
                className=" my-3 rounded-lg"
                src="https://i.ibb.co/4pWVSBV/React-Hooks-Custom.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
