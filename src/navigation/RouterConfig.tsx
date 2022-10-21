import { Spinner } from "@chakra-ui/react";
import { lazy, Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import { Requirements } from "../requirements/Requirements";

const Home = lazy(() => import("../pages/Home"));
const WidgetDetail = lazy(() => import("../pages/WidgetDetail"));

const RouterConfig = () => {
  return (
    <Suspense
      fallback={
        <div>
          <Spinner>Loading....</Spinner>
        </div>
      }
    >
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/requirements' exact component={Requirements} />
        <Route path='/:id' exact component={WidgetDetail} />
      </Switch>
    </Suspense>
  );
};

export default RouterConfig;
