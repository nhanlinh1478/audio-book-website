import axios from "axios";
// import { useRouter } from "next/router";
import { useEffect } from "react";
import { toast } from "react-toastify";

export default function activation({ message }) {
  // const router = useRouter();
  useEffect(() => {
    toast.success(message);
  }, []);

  return <div></div>;
}

export async function getServerSideProps(context) {
  const { activationCode } = context.query;
  if (!activationCode) {
    return {
      redirect: {
        permanent: false,
        destination: "/auth/signin",
      },
    };
  }
  const res = await axios.get(
    `${process.env.NEXT_PUBLIC_CONTAINER_API_URL}/auth/ActivationAccount/${activationCode}`
  );

  if (res.status === 200) {
    if (res.data.success == true) {
      return {
        props: {
          message: res.data.message,
        },
      };
    }
  }
  return {
    redirect: {
      permanent: false,
      destination: "/auth/signin",
    },
  };
}
