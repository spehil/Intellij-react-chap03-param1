import {useSearchParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {getSearchMenu} from "../api/MenuAPI";
import boxStyle from './Menu.module.css';
import MenuItem from "../components/MenuItem";

function MenuSearchResult(){

    /*쿼리스트링 형태로 전달된 값은 useSearchParams hook을 통해 꺼낼수 있다.*/
    const [searchParams] = useSearchParams();

    /*쿼리스트링의 key값을 get함수에 전달하여 해당 파라미터 값을 읽어온다. */
    const menuName = searchParams.get('menuName');
    const[menuList, setMenuList] = useState();


    useEffect(() => {
        setMenuList(getSearchMenu(menuName));
    }, []);



    return(

        <div>
            <h1>검색 된 메뉴 </h1>
            <div className={boxStyle.MenuBox}>
                { menuList && menuList.map(menu => <MenuItem key={ menu.menuCode } menu={menu} />)}

            </div>
        </div>


    );
}

export default MenuSearchResult;