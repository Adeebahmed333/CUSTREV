export default function FeedBack({title,description,votesCount,onOpen})
{
    return(
        <a href= '' 
        onClick={e=>{e.preventDefault();onOpen();}} 
        className=' flex gap-7 items-center my-7'>
          <div>
          <h2 className=' font-bold'>{title}</h2>
          <p className=' text-gray-600 text-sm '>
          {description}
          </p>
          </div>
          <div>

            <button className=' shadow-sm shadow-gray-300 border rounded-md py-1 px-4 flex items-center gap-1 text-gray-600'>
            <span className='triangle-up-vote'></span>
            {votesCount}
            </button>
          </div>
        </a>
    );
}