import React from "react"

type ContainerProps ={
    children:React.ReactNode;
}
// F0E8DD
export function Container ({children}: ContainerProps){
return(
    <div className='text-slate-900 min-h-screen bg-#f0e8dd'>   

        <div className='max-w-screen-5xl mx-auto px-8'>{children} </div>
        </div>
)
}
