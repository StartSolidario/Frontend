function Slide02() {
    return (
        <div className="h-full flex flex-col justify-center items-center border-2 border-[#2B4042] bg-slate-200">
            <div className="w-full h-[35%]">
                <img className="w-full h-full" src="https://ik.imagekit.io/startsolidario/Viagens/Default.png?updatedAt=1725847334956"></img>
            </div>
            <div className="w-full h-[10%] flex justify-around py-4">
                <p className="text-2xl font-semibold">Destino - XXX</p>
                <p className="text-2xl font-semibold">Data De Partida - XXX</p>
            </div>
            <div className="w-full h-[45%] flex flex-col justify-center items-center">
                <p className="text-3xl font-semibold">Missão - XXX:</p>
                <p className="text-center">Lorem ipsum odor amet, consectetuer adipiscing elit. Euismod felis nullam conubia lobortis malesuada non nam primis. Dui facilisis risus taciti massa montes dis. Sodales praesent facilisis eget tortor, vulputate ipsum. Congue justo bibendum duis sit; turpis leo sollicitudin neque libero. Imperdiet tincidunt cras porttitor mollis imperdiet condimentum.</p>
            </div>
            <div className="w-full h-[10%] flex justify-center items-center gap-8">
                <p className="text-xl font-semibold border-[#2B4042] border-2 rounded-2xl py-2 px-4 mb-12 hover:bg-slate-300">Me Inscrever</p>
                <p className="text-xl font-semibold border-[#2B4042] border-2 rounded-2xl py-2 px-4 mb-12 hover:bg-slate-300">Saiba mais</p>
            </div>
        </div>
    )
}

export default Slide02