"use client";

export function Member({name, surname, caption, desc, image}) {
    const initials = `${name?.[0] || ''}${surname?.[0] || ''}`;
    return (
        <>
        <div className={`w-60 h-60 mt-8 ml-5 rounded-xl bg-sky-600/70 border border-neutral-950 shadow-2xl flex items-center justify-center text-8xl`}>
            {image == undefined ? (
                <p className="text-sky-950">{initials}</p>
            ) : (
                <img src={image} className="w-full h-full rounded-xl"/>
            )}           
        </div>
    
        <div className=" ml-5 bg-stone-950 text-white pt-2 pl-2 pr-2 w-1/6 mt-8 rounded-t-lg">
            <p className="text-xl ml-5 font-minecraft">{name} {surname}</p>
            <p className="text-sm ml-5 font-minecraft">//{caption}</p>
        </div>
        <div className=" ml-5 bg-stone-950 text-white pt-7 pl-1 pr-8 w-1/4 pb-8 rounded-b-lg rounded-r-lg">
            <p className="text-base ml-5">{desc}</p>
        </div>
    
        </>
    );
  };


  export default Member;