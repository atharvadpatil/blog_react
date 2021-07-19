import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('atharva');
    const [isPending, setIsPending] = useState(false)

    const histroy = useHistory();

    const handleSubmit = (e) =>{
        e.preventDefault();

        const blog = {title, body, author};

        setIsPending(true);

        fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(blog)
        })
        .then(() =>{
            console.log("New Blog added");
            setIsPending(false);
            // histroy.go(-1) goes back one page
            histroy.push('/');
        });

    }


    return (
        <div className="create">
            <h2>Create a new Blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog Title:</label>
                <input 
                    type="text"
                    required
                    value={ title }
                    onChange={ (e) => setTitle(e.target.value) }
                ></input>
                <label>Blog Body:</label>
                <textarea
                    rows='10'
                    required
                    value={ body }
                    onChange={ (e) => setBody(e.target.value) }
                ></textarea>
                <label>Blog Author:</label>
                <select
                    value={ author }
                    onChange={ (e) => setAuthor(e.target.value) }
                >
                    <option value="atharva">Atharva</option>
                    <option value="apurva">Apurva</option>
                </select>
                { !isPending && <button>Add Blog</button> }
                { isPending && <button disabled>Adding Blog.....</button> }
            </form>

        </div>
    );
}
 
export default Create;