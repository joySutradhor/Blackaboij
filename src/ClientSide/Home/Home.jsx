// import BlogPosts from "./BlogPosts/BlogPosts";
import BlackSaleSection from "./BlackSaleSection/BlackSaleSection";
import HeroSection from "./HeroSection/HeroSection";
import NewArivalSection from "./NewArivalSection/NewArivalSection";
import ShadesSection from "./ShadesSection/ShadesSection";


const Home = () => {
    return (
        <div>
            <div className=" ">
                <HeroSection></HeroSection>
            </div>
            <NewArivalSection></NewArivalSection>
            {/* <BlogPosts></BlogPosts> */}
            <BlackSaleSection></BlackSaleSection>
            <ShadesSection></ShadesSection>
        </div>
    );
};

export default Home;