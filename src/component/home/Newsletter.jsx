import SectionTitel from "../shared/SectionTitel";


const Newsletter = () => {
    return (
      
            <div className="max-w-[1300px] mx-auto pb-[64px] border border-[#ebe4bf]">
                <div className="">
                    <SectionTitel className='' titledescaption={'Newsletter'} title={"Subscribe to Our Newsletter"}></SectionTitel>
                    <p className="text-white text-center mt-2 lg:mt-6">And never miss latest Updates!</p>
                    <form action="" className="flex gap-x-6 justify-center mt-16 max-w-[796px] mx-auto px-2">
                        <input className="py-4 px-9 w-full border border-[#AAAAAA] bg-transparent" type="email" name="" id="" placeholder="Enter your Email" />
                        <input className="bg-[#DCCA87] text-[#0C0C0C] py-1 px-3 lg:py-4 lg:px-9" type="submit" value="Subscribe" />
                    </form>
                </div>

            </div>

      
    );
};

export default Newsletter;