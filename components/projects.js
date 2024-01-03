export const ProjectCard = ({ title, description,imgUrl, withIcons , link }) => {
    return (
            <div className="relative rounded-xl bg-slate-800 mx-2 shadow-xl py-7 px-7 my-3 flex">
                <a href={ link } target="_blank" >
                    <div className="">
                        <h4 className="text-accent" style={{fontSize: '24px', fontWeight: '700',}}>{title}</h4>
                        <span className=" italic">{description}</span>
                        <div className="text-2xl flex gap-2 mt-4">
                            {withIcons.map((Icon, index) => (
                                <span key={index} className="mr-2">
                                    {Icon}
                                </span>
                            ))}
                        </div>
                    </div>
                </a>
            </div>
    )
  }