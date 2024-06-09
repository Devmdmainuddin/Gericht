import SectionTitel from "../shared/SectionTitel";


const Newsletter = () => {
    return (
        <div className="bg-[#0C0C0C] pt-[113px] pb-[128px] px-6">
            <div className="max-w-[1300px] mx-auto border-2 border-[#a09f9f] py-16 px-6">
                <div className="">
                    <SectionTitel className='' titledescaption={'Newsletter'} title={"Subscribe to Our Newsletter"}></SectionTitel>
                    <p className="text-white text-center mt-2 lg:mt-6">And never miss latest Updates!</p>
                    <form action="" className="flex gap-x-6 justify-center mt-16 max-w-[796px] mx-auto">
                        <input className="py-4 px-9 w-full border border-[#AAAAAA] bg-transparent" type="email" name="" id="" placeholder="Enter your Email" />
                        <input className="bg-[#DCCA87] text-[#0C0C0C] py-1 px-3 lg:py-4 lg:px-9" type="submit" value="Subscribe" />
                    </form>
                </div>

            </div>

        </div>
    );
};

export default Newsletter;