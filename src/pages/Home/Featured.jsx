import SectionTitle from "../../components/SectionTitle/SectionTitle";
import featureImg from '../../assets/home/featured.jpg'
import './Featured.css'
const Featured = () => {
    return (
        <div className="featured-item bg-fixed text-white pt-8 my-20">
            <SectionTitle
            subHeading="check  it out"
            heading="Featured Item"
            ></SectionTitle>
            <div className="md:flex justify-center bg-slate-500 bg-opacity-60 items-center pb-20 pt-12 px-36">
                <div>
                    <img src={featureImg}></img>
                </div>
                <div className="md:ml-10">
                    <p>Aug 20, 2029</p>
                    <p className="uppercase">Where can i get some?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, atque incidunt laboriosam fuga accusantium excepturi quidem eveniet! Praesentium perferendis corrupti excepturi. Esse aperiam at quasi, reprehenderit cumque necessitatibus fugiat voluptate ab. Praesentium quisquam tenetur reprehenderit quos similique suscipit, soluta architecto autem itaque aperiam est animi modi dicta deleniti iure? Facilis!</p>
                    <button className="btn text-white btn-outline border-0 border-b-4 mt-4">Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;