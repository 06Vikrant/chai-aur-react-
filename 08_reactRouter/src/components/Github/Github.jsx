import { useLoaderData } from 'react-router-dom'

export default function Github() {
  // jo bhi data return ho rha hoga from loaderData se it'll give that  
  const data = useLoaderData() 
  // const [data, setData] = useState([])
  // useEffect(() => {
  //   fetch('https://api.github.com/users/06Vikrant')
  //   .then(res => res.json()) //converting the response in JSON format
  //   .then(data => {
  //     console.log(data); // to take the data we need need an state for this
  //     setData(data) // we get the data
  //   }) 
  // },
  //  [])
  return (
    <div className='git bg-gray-600 text-center text-white text-4xl p-4 m-4 rounded-lg'>
      Github followers: {data.followers}  {/* how to get values from the data */}
      <img
      className=' object-center' 
      src={data.avatar_url} 
      alt="Github picture" 
      width={300} height={300} />
    </div>
  )
}

// this method fetch the data from Github API and return it 
export const githubInfoLoader = async () => {
  const response = await fetch('https://api.github.com/users/06Vikrant')
  // we can directly return the response
  return response.json() //but it's still a promise 
}

