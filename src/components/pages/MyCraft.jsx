import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../ProviderContext";
import MyCraftCard from "../MyCraftCard";
import { RiArrowDropDownLine } from "react-icons/ri";


const MyCraft = () => {

    const { user } = useContext(AuthContext) || {};
    const [items, setItem] = useState([])
    const [displayItem, setDisplayItem] = useState([])

    useEffect(() => {
        fetch(`https://assignment-10-server-mu-liart.vercel.app/products/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setItem(data)
                setDisplayItem(data)
            })
    }, [user])


    
    
    const handleShortData = short =>{
        if(short === 'all'){
            setItem(displayItem)
        }

        else if(short === 'no'){
            let shorting = displayItem.filter(item => item.customize === 'No');
            setItem(shorting)
            console.log(shorting)
        }
        else if(short === 'yes'){
            let shorting = displayItem.filter(item => item.customize === 'Yes');
            setItem(shorting)
            console.log(shorting)
        }
    }

    // console.log(items)
    // console.log(user)


    return (
        <div>
            <div className="text-center mt-10">
                <div className="dropdown dropdown-hover ">
                    <div tabIndex={0}  className="btn m-1 w-[200px] bg-[#f29c94] font-bold ">Customize <RiArrowDropDownLine size={30}></RiArrowDropDownLine></div>
                    <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 w-52 font-bold shadow bg-base-100 rounded-box ">
                        <li onClick={()=>handleShortData('all')}><a>All</a></li>
                        <li onClick={()=>handleShortData('yes')}><a>Yes</a></li>
                        <li onClick={()=>handleShortData('no')}><a>No</a></li>
                    </ul>
                </div>
            </div>
            <div className="grid lg:grid-cols-3 gap-7 md:grid-cols-2">
                {
                    items.map(item => <MyCraftCard key={item._id} item={item} items={items} setItem={setItem}></MyCraftCard>)
                }
            </div>
        </div>
    );
};

export default MyCraft;