import BlogPosts from "./BlogPosts/BlogPosts";
import NewArivalSection from "./NewArivalSection/NewArivalSection";


const Home = () => {
    return (
        <div>
            <NewArivalSection></NewArivalSection>
            <BlogPosts></BlogPosts>
        </div>
    );
};

export default Home;