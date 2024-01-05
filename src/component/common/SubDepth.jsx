import React, {useState, useRef, useEffect} from 'react';
import { Link } from 'react-router-dom';


function SubDepth({headerHeight}) {
    const menus = [
        { link: "/about/bexco", name: "회사개요" },
        { link: "/esg/esg", name: "ESG경영" },
        // { link: "/about/Bexco", name: "주관행사" },
        { link: "/location", name: "오시는길" },
    ];

    const [menu, setMenu] = useState("회사개요");
    const [show, setShow] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const $subDepth = useRef(null);
    const [subDepthHeight, setSubDepthHeight] = useState(0);

    useEffect(()=>{
        const updatesubDepthHeight = ()=>{
            if($subDepth.current){
                const height = $subDepth.current.clientHeight;
                setSubDepthHeight(height);
            }
        }        
        updatesubDepthHeight();
    },[])

    const headerScrollStyle = ()=>{
        const scrollPosition = window.scrollY;
        if(scrollPosition >= headerHeight + subDepthHeight) {
            setScrolled(true)
        }else {
            setScrolled(false)
        }
    }
    window.addEventListener('scroll', headerScrollStyle);


    return (
        <div id="sub-depth" className={scrolled ? "scroll" : ""} ref={$subDepth}>
            <button className="sub-depth__label" onClick={()=>setShow(!show)}>
                <span>{menu}</span>
                <img src={process.env.PUBLIC_URL + '/img/icons/icon_open.svg'} alt="" className={"accordion" + (show ? " open" : "")} />
            </button>
            <ul className={"select" + (show ? " active" : "")}>
                {menus.map((menu,index)=>(
                    <li key={index} className="option" onClick={()=>setMenu(menu.name)}>
                        <Link to={menu.link}>
                            {menu.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default SubDepth;