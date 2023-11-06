import menus from '../data/menu-detail.json';

/*전체 메뉴 리스트 조회용 API*/
export  function getMenuList(){

    return menus;
}

/* 메뉴 코드를 이용하여 메뉴 한개의 상세내용 조회*/
export function getMenuDetail(menuCode){

    return menus.find(menu => menu.menuCode == menuCode); /*2 === '2'이므로 이렇게 작성하면 안됨 ==로 작성해준다.*/
}

/*메뉴명 전달 받아 메뉴 이름을 포함하고 있는 메뉴 목록 조회*/
export  function getSearchMenu(menuName){


    return menus.filter(menu => menu.menuName.match(menuName)); //여러개의 배열로 반환하고자하므로 filter를 사용함.
}