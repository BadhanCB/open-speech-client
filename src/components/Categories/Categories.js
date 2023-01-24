import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";

const Categories = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const fetchCategories = async () => {
            const res = await axios.get("https://open-speech-server-production.up.railway.app/category/all-categories");
            setCategories(res.data);
        }

        fetchCategories();
    }, []);

    return (
        <>
            <span className="sidebar-title">CATEGORIES</span>
            <ul className="sidebar-list">
                {
                    categories.map(cat => <li className="sidebarlist-item">{cat}</li>)
                }
            </ul>
        </>
    );
};

export default Categories;
