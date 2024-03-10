import { useState, useEffect } from "react"



const Carousel = () => {

    const images = [
        {
            "title": "Coffee-Shop-1",
            "url": "https://i.pinimg.com/originals/1b/3e/de/1b3ede369c112797f86cc3cc0319f81c.jpg"
        },
        {
            "title": "Coffee-Shop-2",
            "url": "https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/advisor/wp-content/uploads/2023/01/How_To_Start_A_Coffee_Shop_-_article_image.jpg"
        },
        
        {
            "title": "Coffee-Shop-4",
            "url": "https://majestycoffee.com/cdn/shop/articles/How_Much_Does_a_Coffee_Shop_Make__A_Concise_Analysis.jpg"
        }
    ]

    let [index, setIndex] = useState(0);

    const handlePrevBtn = () => {
        index > 0 ? setIndex(index - 1) : setIndex(2);
    };

    const handleNextBtn = () => {
        index < 2 ? setIndex(index + 1) : setIndex(0);
    };

    useEffect(() => {
        const timeCards = setInterval(() => {
            if (index < 2) {
                setIndex(index + 1)
            } else {
                setIndex(0)
            }
        }, 4000)
        return () => {
            clearInterval(timeCards)
        }
    }, [index])


    return (
        <div className="flex items-center justify-center p-1">
            
            <div className='flex gap-5 items-center justify-center'>
            <button onClick={handlePrevBtn} type="button" className="flex absolute left-0 cursor-pointer group focus:outline-none" data-carousel-prev>
            <span className="inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                <svg className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
                <span className="hidden">Previous</span>
            </span>
        </button>
        <img className='object-cover w-full h-96' src={images[index].url} alt="" />
        <button onClick={handleNextBtn} type="button" className="flex absolute right-0  justify-center items-center px-4 h-full cursor-pointer group focus:outline-none" data-carousel-next>
            <span className="inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                <svg className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
                <span className="hidden" >Next</span>
            </span>
        </button>
            </div>

        </div>

        
            
        



    


    



    )
}

            export default Carousel