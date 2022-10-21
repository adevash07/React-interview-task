import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { Link, useRouteMatch } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./home.scss";

type Props = {};

const Home = (props: Props) => {
  let toastNumber = 0;
  const [AllWidgets, setAllWidgets] = useState([]);

  const getWidgets = () => {
    return fetch("/api/widgets");
  };

  const match = useRouteMatch();

  const { isError, isLoading, error } = useQuery(["user"], () => getWidgets(), {
    onSuccess: (data: any) => {
      setAllWidgets(JSON.parse(data._bodyInit));
      if (toastNumber === 0) {
        toast("Welcome back ", {
          type: "info",
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
      }
      toastNumber++;
    },
    onError: (error: any) => {
      toast(`Can't get widgets: ${error.message}`, {
        type: "error",
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    },
    retry: 1,
  });

  return (
    <div className='Widget'>
      <h1 className='Widget--Header'>All Widgets</h1>
      <ul className='Widget--List'>
        {isLoading &&
          isError &&
          AllWidgets.map((widget: any) => {
            return (
              <Link className='Widget--Link' to={`${match.url}${widget.id}`}>
                <li key={widget.id} className='Widget--ListItem'>
                  <span className='Widget--Icon'>
                    <img src={widget.image} alt='Widget Icon' />
                  </span>
                  <span className='Widget--Name'>{widget.name}</span>
                </li>
              </Link>
            );
          })}
      </ul>
      {isLoading && <div className='Widget--Error'>Loading...</div>}
      {isError && (
        <div className='Widget--Loading'>`Error: ${error.message}`</div>
      )}
    </div>
  );
};
export default Home;
