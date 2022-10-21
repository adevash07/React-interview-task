import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function WidgetDetail() {
  const [Widget, setWidget] = useState<any>({});
  const params: any = useParams();
  console.log(params);
  let toastNumber = 0;

  const getWidget = () => {
    return fetch(`/api/widgets/${params.id}`);
  };
  const { isError, isLoading, error } = useQuery(
    [`${params?.id}`],
    () => getWidget(),
    {
      onSuccess: (data: any) => {
        console.log(data);
        setWidget(JSON.parse(data._bodyInit));
        if (toastNumber === 0) {
          toast("Welcome to widget Page", {
            type: "info",
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
          });
          toastNumber++;
        }
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
    }
  );

  console.log(Widget);

  return (
    <div className='Widget'>
      <h1 className='Widget--Header'>Widget Detail</h1>
      {!isError && !isLoading && (
        <div>
          <h2>{Widget?.name} </h2>
          <p>
            <img src={Widget?.image} alt='Widget Icon' />
          </p>
        </div>
      )}
      {isLoading && <div>Loading...</div>}
      {isError && <div>Error: {error.message}</div>}
    </div>
  );
}

export default WidgetDetail;
