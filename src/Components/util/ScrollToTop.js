import React, {useEffect} from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = ({children}) => {
    const Location = useLocation();

    useEffect(() =>{
        window.scrollTo(0,0);
    }, [Location.pathname])

  return (
    <section>
        <React.Fragment>
            {children}
        </React.Fragment>
    </section>
  )
}

export default ScrollToTop;