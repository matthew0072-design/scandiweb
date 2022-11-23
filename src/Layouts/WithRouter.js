import {
    useNavigate,
    useParams,
    useLocation
  } from "react-router-dom";

  function withRouter(Component) {
    function ComponentWithRouterProp(props) {
      
      let navigate = useNavigate();
      let params = useParams();
      let location = useLocation();
      return (
        <Component
          {...props}
          router={{params, navigate, location}}
        />
      );
    }
  
    return ComponentWithRouterProp;
  }
export default withRouter