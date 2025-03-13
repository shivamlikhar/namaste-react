import { useState, useEffect } from "react";
import { MENU_URL } from "../service/zomatoData";

const useRestaurentMenu = (resId) => {

    const [restInfo, setRestaurent] = useState(null);

    useEffect(() => {
        fetchMenu();
    }, []);

    const fetchMenu = async () => {
        try {
            const data = await fetch(
                MENU_URL + resId + "&catalog_qa=undefined&submitAction=ENTER"
            );
            const json = await data.json();
            const ResData = json?.data || [];
            setRestaurent(ResData);
        } catch (error) {
            console.error("Error fetching menu:", error);
        }
    };

    return restInfo;
}

export default useRestaurentMenu;