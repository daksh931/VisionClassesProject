import React from 'react'

const Loading = () => {
    return (
        <div className='w-[100vw] h-[100vh] flex bg-slate-100'>
            <div className="flex items-center justify-center  h-full w-full">
                <div className="animate-spin rounded-full h-52 w-52 border-t-2 border-b-2 border-gray-800">
                    <div className="animate-spin rounded-full h-52 w-52 border-t-2 border-b-2 border-white-800">
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Loading
