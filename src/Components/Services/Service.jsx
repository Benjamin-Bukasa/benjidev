import { IoIosArrowDroprightCircle } from "react-icons/io";
import { Link } from "react-router-dom";

const Service=() =>{
    const services = [
        {
            id:"01",
            title:"Site web",
            comment:"Conception des sites web statique et dynamique",
            icon:""
        },
        {
            id:"01",
            title:"Application",
            comment:"Développement des application web et mobile",
            icon:""
        },
        {
            id:"01",
            title:"Content Manager System",
            comment:"Conception des sites web avec wordPress (WooCommerce, Etc...)",
            icon:""
        },
        {
            id:"01",
            title:"Web Design",
            comment:"Maquettage, UI/UX design, Intégration de maquette web",
            icon:""
        },
        {
            id:"01",
            title:"Maintenance Informatique",
            comment:"Conception des sites web statique et dynamique",
            icon:""
        },
        {
            id:"01",
            title:"Consultance",
            comment:"Audit des applications web",
            icon:""
        },
    ]
    return(
        <>
            <div className="w-full flex flex-col items-center justify-start gap-5">
                <p className="text-[#c8f31d] text-4 text-center">Services</p>
                <h2 className="w-1/3 text-center text-[40px]">Développe ton bussiness grace à <span className="text-[#c8f31d]">mes services </span></h2>
                <div className="w-[70%] p-5 flex flex-wrap justify-center gap-4 ">
                    {
                        services.map((service)=>(
            
                                <Link to={`/${service.title}`} className="w-[45%] flex justify-between items-center  hover:border hover:border-[#c8f31d] hover:text-[#c8f31d] ease-in-out duration-300 transition gap-5 bg-[#232323] px-4 py-8 rounded-lg cursor-pointer border border-[#232323]">
                                    <div className="w-full flex justify-between items-center" >
                                            <div className="flex flex-col gap-1 hover:text-white">
                                                <div className="text-white">{service.title}</div>
                                                <div className="text-[12px] text-white opacity-50 hover:opacity-50 ">{service.comment}</div>
                                            </div>
                                            <IoIosArrowDroprightCircle size={40} />
                                    </div>
                                </Link>
                            
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default Service