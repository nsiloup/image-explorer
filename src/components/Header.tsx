import { Dispatch, useState } from "react";
import Filter from "./Filter";
import "../styles/Header.css";
import NavBar from './Navbar';

type ReactJsxElm = React.JSX.Element;
export type MyHeaderProps = {
    category: string,
    changeCategory: Dispatch<string>,
    searchValue: string,
    changeSearchValue: Dispatch<string>,
    logoIsShown: boolean
};

export default function Header(props: MyHeaderProps): ReactJsxElm {
    const [headerIsFixed, setHeaderIsFixed] = useState(false);
    const  [searchBarIsFocused, setSearchBarIsFocused] = useState(false);
    const [displayFilterElmCounter, setDisplayFilterElmCounter] = useState(0);
    console.log("displayFilterElmCounter = ", displayFilterElmCounter)

    function Title(): ReactJsxElm {
      const displayContent = headerIsFixed ? <></> : <p className="header_apptitle">Image Explorer</p>
      return <>
        {displayContent}
      </>
    }
      

    return (
      // <header className={props.logoIsShown ? "header--rowable" : "header--on-coloumn"}>
      <header className={headerIsFixed ? "header--fixed" : "header--default"}>

        <NavBar 
          category={props.category}
          changeCategory={props.changeCategory}
          searchValue={props.searchValue}
          changeSearchValue={props.changeSearchValue}
          logoIsShown={props.logoIsShown}
          headerIsFixed={headerIsFixed}
          setHeaderIsFixed={setHeaderIsFixed}
          searchBarIsFocused={searchBarIsFocused}
          displayFilterElmCounter={displayFilterElmCounter}
          setDisplayFilterElmCounter= {setDisplayFilterElmCounter}
        />
        <Title />
        {!headerIsFixed && <Filter category={props.category} changeCategory={props.changeCategory} changeSearchValue={props.changeSearchValue}/>}
      </header>
    )
};