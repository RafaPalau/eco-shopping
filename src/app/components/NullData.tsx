

interface Props{
    title: string;
}

const NullData: React.FC<Props> = ({title}: Props) => {
    return (
        <div className="w-full h-[50vh] flex items-center justify-center text-x1 md:text-2xl">
            <p className="font-medium">{title}</p>
        </div>
    )
}

export default NullData