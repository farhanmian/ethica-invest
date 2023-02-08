import styles from "@/styles/Home.module.css";
import Image from "next/image";
import logo from "@/assets/img/logo.png";

import DonutChart from "@/components/DonutChart";
import BarChart from "@/components/BarChart";

import useSWR from "swr";
import Loading from "@/components/partials/Loading/Loading";
import ErrorMessage from "@/components/partials/ErrorMessage/ErrorMessage";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const Home = () => {
  const { data, isLoading } = useSWR(
    "https://personal-website-d74afku9x-contrahacker.vercel.app/api/example-data",
    fetcher
  );

  console.log("data", data);

  return (
    <>
      <nav className="bg-zinc-900 px-5 py-6 h-20">
        <div className="h-full">
          <Image src={logo} alt="logo" className="h-full w-auto" />
        </div>
      </nav>

      <section
        className={`min-h-screen text-white ${true ? "pt-20" : ""} ${
          styles.home
        }`}
      >
        <>
          {!isLoading && !data.error && (
            <div className={`max-w-screen-8xl m-auto ${styles.innerContainer}`}>
              <div className="mb-20 max-w-lg w-4/5 m-auto">
                <h3 className={styles.heading}>stocks of each sector</h3>
                <DonutChart chartData={data} />
              </div>

              <div className="max-w-4xl w-full mx-auto">
                <h3 className={styles.heading}>prices of each stock</h3>
                <BarChart chartData={data} />
              </div>
            </div>
          )}

          {isLoading && (
            <div className="h-96 flex ">
              <Loading color="#fff" />
            </div>
          )}
        </>
        {data && data.error && <ErrorMessage error={data.error.message} />}
      </section>
    </>
  );
};
export default Home;
