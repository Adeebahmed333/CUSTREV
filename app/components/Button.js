export default function Button(props)
{
    return(
<button {...props} className={" py-1 px-2 rounded-md  text-opacity-70 " +(props.primary
 ? "bg-red-300 text-slate-700" : ' text-black'
 )}></button>
    ); 
}