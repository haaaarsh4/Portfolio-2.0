import Slider from "../../components/Slider";
import Circles from "../../components/Circles";

const Contact = () => {
  return (
  <div className=" h-full bg-primary/30 py-32 text-center">
    <Circles />
    <div className="container mx-auto h-full flex flex-col justify-center mt-5">
      <h2 className="h2 mb-8 xl:mb-0 text-accent">Projects</h2>
      <div>
        <Slider />
      </div>
    </div>
  </div>
  );
};

export default Contact;
