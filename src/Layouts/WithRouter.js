import {
    useNavigate,
    useParams,
  } from "react-router-dom";

  function withRouter(Component) {
    function ComponentWithRouterProp(props) {
      
      let navigate = useNavigate();
      let params = useParams();
      return (
        <Component
          {...props}
          router={{params, navigate}}
        />
      );
    }
  
    return ComponentWithRouterProp;
  }
export default withRouter