import BlogPosts from "./BlogPosts/BlogPosts";
import HeroSection from "./HeroSection/HeroSection";
import NewArivalSection from "./NewArivalSection/NewArivalSection";


const Home = () => {
    return (
        <div>
            <div className="mt-[-119px] ">
                <HeroSection></HeroSection>
            </div>
            <NewArivalSection></NewArivalSection>
            <BlogPosts></BlogPosts>
        </div>
    );
};

export default Home;