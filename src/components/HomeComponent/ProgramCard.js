import React from 'react';

const ProgramCard = ({title, description, image}) => {
    return (
        <div className=' md:max-w-[300px] rounded overflow-hidden shadow-lg pb-4'>
            <div>
                <img src={image} alt='project card' className='h-[200px] w-[100%]'/>
            </div>
            <h3 className='text-xl font-bold mt-4 uppercase px-2 text-gray-900'>{title}</h3>
            <p className='text-[1rem] font-light px-2 text-gray-700'>{description}</p>
        </div>
    )
}

export default ProgramCard;