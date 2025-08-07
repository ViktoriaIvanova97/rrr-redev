import { memo,useRef} from "react";

export const withRenderTracker = (Component,name) => {
	return memo((props) =>{
	  const renderCount = useRef(0);
	  renderCount.current += 1;
	  console.log(`Компонент ${name} рендерился ${renderCount.current} раз`);
	  return <Component {...props} />;
	})
};


