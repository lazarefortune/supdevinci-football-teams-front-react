import TeamList from "./TeamList.jsx";
import {Link} from "react-router-dom";

function Home() {

  return (
    <>
        <main>
            <section className="container grid items-center gap-6 pt-6 pb-8 md:py-10">
                <div className="flex flex-col items-start gap-2 max-w-[980px]">
                    <h1 className="text-3xl font-bold leading-tight tracking-tight sm:text-3xl md:text-5xl lg:text-6xl">Manage
                        your <span className="text-pink-500">teams</span>. <br className="inline"/>Manage <span className="text-pink-500">players</span>.</h1>
                    <p className="text-lg text-slate-500 max-w-[700px] sm:text-xl">
                        This is a simple application to manage your teams and players.
                    </p>
                </div>
                <div className="flex flex-col space-y-4 sm:space-x-4 sm:space-y-0 sm:flex-row md:flex-row">
                    <Link to="/teams/add"
                        className="btn-dark">
                        Add team
                    </Link>
                    <button className="btn-light">
                        View players
                    </button>
                </div>
                <div className="bg-slate-200 my-2 h-[1px] w-full" role="none"></div>

                <div className="flex flex-col items-center">
                    <h2 className="text-3xl tracking-tight leading-tight sm:text-3xl md:text-4xl lg:text-5xl font-bold">Discover all the teams</h2>
                    <p className="text-md max-w-[700px] text-center text-slate-500 sm:text-lg">
                        All the teams are here, you can see them, edit them, delete them.
                    </p>
                </div>
                <TeamList />
            </section>
        </main>
    </>
  );
}

export default Home;