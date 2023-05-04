#cmd --

```
npm create vite@latest name-of-your-project -- --template react
```

```
npm install react-router-dom localforage match-sorter sort-by
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
npm i daisyui
npm i firebase
npm install recharts
npm install react-icons --save
```

# install-package

- Tailwindcss
- Daisy UI
- React router
- Recharts
- Hero Icon
- firebase
- more packages etc.

# Treact <a name="TOP"></a>

> React
>
> > project

---

## Live Link

# Hosted in Firebase -> https://client-food-chef.web.app

# install-package

    Markup :  # install-package #

- Tailwindcss
- Daisy UI
- React router
- Recharts
- Hero Icon
- firebase
- more packages etc.

## Dynamically menu

    Markup :  # Menu #

    use of

    array of obj to map

```javascript
let menuList = [
  { title: "Home", link: "/", id: 1 },
  { title: "Blogs", link: "/blogs", id: 2 },
];
export const NavContext = createContext({
  menuList: [],
});
```

    See All :  first slice data after click

```javascript
const [jobsData, setJobsData] = useState([]);
const cardData = useLoaderData();
useEffect(() => {
  if (cardData) {
    setJobsData(cardData.slice(0, 4));
  }
}, []);
const handleSetData = (id) => {
  addToDb(id);
};

const allData = (check) => {
  if (check) {
    setJobsData(cardData);
  }
};
allData(false);
```

# Route declaration

    Route :  first slice data after click

```javascript
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layouts />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("https://server-food-chef.vercel.app/chef"),
      },
      {
        path: "/chef/:id",
        element: (
          <PrivateRoute>
            {" "}
            <ChefDetails />{" "}
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://server-food-chef.vercel.app/chef/${params.id}`),
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "blogs",
        element: <Blogs />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
```

# Private Route declaration

```javascript
const PrivateRoute = ({ children }) => {
  // use state
  const { user, loader } = useContext(AuthContext);
  // location
  const location = useLocation();
  // loader
  if (loader) {
    return (
      <div className=" my-8 flex items-center justify-center">
        <div>
          <h1 className="mt-3 text-center text-2xl">loading...</h1>{" "}
          <progress className=" progress w-56"></progress>
        </div>
      </div>
    );
  }
  if (user) {
    return children;
  }
  return <Navigate to={"/login"} state={{ from: location }} replace></Navigate>;
};
```
