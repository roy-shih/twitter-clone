import { signIn } from "next-auth/react";
import Image from "next/image";
import Head from "next/head";

function Login({ providers }) {
  return (
    <div>
       <Head>
        <title>IdeaX</title>
        <link rel="icon" href="/icon-192x192.png" />
        <link rel="manifest" href="/manifest.json" /> 
        <link rel="apple-touch-icon" href="/logo-96x96.png" />
        <meta name="apple-mobile-web-app-status-bar" content="#90cdf4" />
      </Head>
    
      <div className="flex flex-col items-center space-y-20 pt-48">
        <Image
          src="/icon-192x192.png"
          width={150}
          height={150}
          objectFit="contain"
        />
         

        <div>
          {Object.values(providers).map((provider) => (
            <div key={provider.name}>
              {/* https://devdojo.com/tailwindcss/buttons#_ */}
              <button
                className="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-white rounded hover:bg-white group"
                onClick={() => signIn(provider.id, { callbackUrl: "/" })}
              >
                <span className="w-48 h-48 rounded rotate-[-40deg] bg-[#1d9bf0] absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                <span className="relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white">
                  Sign in with {provider.name}
                </span>
              </button>
            </div>
          ))}
         
        </div><h1 className="relative inline-flex items-center text-white text-center">
        Talents, capabilities, and ideas flourish together
          </h1> 
      </div>
    </div>
  );
}

export default Login;
