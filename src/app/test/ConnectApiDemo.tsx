import { GetStaticProps, NextPage } from "next";

interface userDataProps {
  id: number;
  value: string;
  date: Date;
}

type Props = {
  userData: userDataProps[];
};

const ConnectApiDemo: NextPage<Props> = ({ userData }) => {
  return (
    <>
      <main>
        <ul>
          {userData.map((data) => (
            <li key={data.id}>{data.value}</li>
          ))}
        </ul>
      </main>
    </>
  );
};

export default ConnectApiDemo;
