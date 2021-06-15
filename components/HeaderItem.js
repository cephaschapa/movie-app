function HeaderItem({Icon, title,}) {
    return (
        <div className="flex flex-col items-center cursor-pointer sm:w-20 group hover:text-white">
            <Icon className="h-8 mb-1 group-hover:animate-pulse"/>
            <p className="opacity-0 tracking-widest group-hover:opacity-100">{title}</p>
        </div>
    )
}

export default HeaderItem
