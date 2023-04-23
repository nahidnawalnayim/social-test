import React,{useState,useEffect} from 'react'
import axios from "axios";
function Postlist() {
    const [getpost, setgetpost] = useState([]);
    const getPost = async () => {
      const res = await axios.get("http://localhost:4000/post");
      setgetpost(res.data);
      console.log(res.data);
    };
    useEffect(() => {
      getPost();
    }, []);
  
  
      return(
<div className="flex flex-column flex-wrap">
{
            getpost.map(single=>(
      <div className="bg-white p-14 sm:py-32" style={{width: '500px',height:'500px'}}>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"> {single.title}</h2>
            <p className="mt-2 text-lg leading-8 text-gray-600">
              Learn how to grow your business with our expert advice.
            </p>
          </div>
          <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
           
              <article key="flex max-w-xl flex-col items-start justify-between">
                <div className="flex items-center gap-x-4 text-xs">
                  <time dateTime="text-gray-500">
                   
                  </time>
                  <a
                    href="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                  >
                    {single.title}
                  </a>
                </div>
                <div className="group relative">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                    <a href="">
                      <span className="absolute inset-0" />
                    
                    </a>
                  </h3>
                  <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600"></p>
                </div>
                <div className="relative mt-8 flex items-center gap-x-4">
                 
                  <div className="text-sm leading-6">
                    <p className="font-semibold text-gray-900">
                     
                        <span className="absolute inset-0" />
                       
                    
                    </p>
                    <p className="text-gray-600"></p>
                  </div>
                </div>
              </article>
   
          </div>
        </div>
      </div>
            ))}
</div>
      )}
      export default Postlist;
  
 