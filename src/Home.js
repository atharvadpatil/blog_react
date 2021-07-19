import BlogList from './BlogList';
import useFetch from './useFetch';

const Home = () => {

    // const [blogs, setBlogs] = useState([
    //     {title:'Hello Welcome', body:'AAAA', author:'Atharva', id:1},
    //     {title:'My first vlog', body:'BBBB', author:'Apurva', id:2},
    //     {title:'My blog', body:'CCCC', author:'Atharva', id:3}
    // ]);

    

    // const [name, setName] = useState("Atharva");

    // const handleDelete= (id) => {
    //     const newBlogs = blogs.filter(blog => blog.id !== id);
    //     setBlogs(newBlogs);
    // }

    // useEffect(()=>{
    //     console.log("UseEffect ran");
    //     // console.log(name)
    // }, [name]);
    // this is dependancy array used to show on which render the useEffect should run

    

    // setTimeout(() => {
    //     this method fires function after 1000ms
    // }, 1000)

    const { data:blogs, isPending, error } = useFetch('http://localhost:8000/blogs');




    return (
        <div className="home">
            { isPending && <div>Loading....</div> }
            { error && <div>{error}</div>}
            {blogs && <BlogList blogs={ blogs } title="All Blogs" />}


            {/* <p>{name}</p>
            <button onClick={()=> setName("Apurva")}>Change name</button> */}
            {/* <BlogList blogs={ blogs.filter((blog) => blog.author === "Atharva" ) } title="Atharva's Blogs"/> */}

        </div>
    );
}
 
export default Home;