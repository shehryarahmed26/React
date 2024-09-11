let Startgame = ({togglebtn}) => {
    return <div className="flex w-full h-screen justify-center items-center px-5">
        <img className="w-[550px]" src="../public/Dices.png" alt="" />
        <div className="content">
            <h1 className="text-7xl font-bold">Dice Game</h1>
            <button onClick={togglebtn} className="bg-black text-white text-1xl px-16 py-2 rounded float-end mt-8 play transition">Play Now</button>
        </div>
    </div>
}
export default Startgame