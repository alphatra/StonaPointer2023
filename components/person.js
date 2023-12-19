"use client";
export function Person({name, surname, caption, imageSrc}) {
    const initials = `${name?.[0] || ''}${surname?.[0] || ''}`;

    return (
        <>
        <div className={`w-36 h-36 ml-5 rounded-xl bg-sky-600/70 border ${imageSrc == undefined ? 'border-sky-950' : 'border-neutral-950'} shadow-2xl flex items-center justify-center text-7xl`}>
            {imageSrc == undefined ? (
                <p className="text-sky-950">{initials}</p>
            ) : (
                <img src={imageSrc} className="w-full h-full rounded-xl"/>
            )}
        </div>
        <div className="bg-stone-950 text-white p-2 w-1/5 mt-8">
            <p className="text-xl ml-5 font-minecraft">{name} {surname}</p>
            <p className="text-sm ml-5 font-minecraft">// {caption}</p>
        </div>
        </>
    );
}

export default Person;
