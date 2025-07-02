import Features from '../Components/Features';
import Faq from '../Components/Faq';
import Banner from '../Components/Banner';
import SubscribeSection from '../Components/SubscribeSection';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Features></Features>
            <Faq></Faq>
            <SubscribeSection></SubscribeSection>
        </div>
    );
};

export default Home;