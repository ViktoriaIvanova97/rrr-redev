import { useRef} from "react";

export const withRenderTracker = (Component) => {
	return (props) =>{
	  const renderCount = useRef(0);
	  renderCount.current += 1;
	  console.log(`Компонент ${Component.name} рендерился ${renderCount.current} раз`);
	  return <Component {...props} />;
	}
};


