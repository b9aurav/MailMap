const WelcomeScreen = () => {
  return (
    <div className="bg-gradient-to-r variant-gradient-error-warning w-full h-screen flex flex-col p-6 justify-center items-center">
      <div className="lg:w-1/2 flex flex-col h-full">
        <text className="text-4xl text-center text-white font-bold my-10">
          Welcome to MailMap
        </text>
        <span className="text-2xl text-center text-white break-words">
          MailMap is solution for managing your emails effectively.
        </span>
        <button
          type="button"
          className="btn bg-white text-black variant-filled lg:mx-48 lg:px-4 my-10 mt-auto"
        >
          Get Started
        </button>
      </div>
    </div>
  );
};

export default WelcomeScreen;
